/**
 *name: jquery.checkTree
 *author: Elyor Latipov
 *version: 0.1.1
 */

/**input data format:

 [{
    item:{id:'id', label:'label',value:1, checked:false}, 
    chidren:[{
        item:{id:'id', label:'label', checked:false}, 
        chidren:[...]
    }]
}, ....]

 */
(function ($) {

    jQuery.fn.checkTree = function (settings) {

        settings = $.extend({
            data: [],               // input data which will be used to initilze the tree
            onExpand: null,        // an event will be triggered when the tree node was expanded
            onCollapse: null,      // an event will be triigered when the tree node was collapsed
            onPreCheck: null,      // an event will be triggered before the tree node was checked
            onCheck: null,         // an event will be triggered when the tree node was checked
            onUnCheck: null,       // an event will be triggered when the tree node was unchecked
            onLabelHoverOver: null,// событие будет вызвано при наведении указателя мыши на метку
            onLabelHoverOut: null  // событие будет вызвано при наведении указателя мыши на метку
        }, settings);

        var container = $(this), $tree = this;

        //дети строке HTML-тег
        function getChildrenHtml(treesdata) {
            var result = '', len = treesdata.length, node, clen, arrowClass;

            for (i = 0; i < len; i++) {
                node = treesdata[i];
                $.data($tree, node.item.id, node); //прикрепите узел данных для узла ID
                clen = node.children ? node.children.length : 0;

                arrowClass = 'collapsed';
                if (clen === 0) {
                    arrowClass = 'nochildren';
                    checkClass = node.item.checked ? 'checked' : ' ';
                } else {
                    var checkedChildren = $.grep(node.children, function (el) {
                        return el.item.checked;
                    });
                    checkClass = checkedChildren.length === 0 ? '' : checkedChildren.length === clen ? 'checked' : 'half_checked';
                }
                if (node.item.pictures == null) {
                    result += '<li rel="' + node.item.id + '"><div class="arrow ' + arrowClass + '">' +
                        '</div><div class="checkbox ' + checkClass + '"><input type="hidden" ' +
                        'value="' + node.item.value + '"/></div><label>' +
                        node.item.label + '</label></li>';
                } else {
                    if (node.item.checked) {
                        result += '<li rel="' + node.item.id + '"><img ' +
                            ' id="i' + node.item.id + '" ' +
                            'src="' + node.item.pictures + '_white.svg" style="width: 30px; margin-left: 3px;">' +
                            '<div class="arrow ' + arrowClass + '"></div><div class="checkbox ' + checkClass + '">' +
                            '<input type="hidden" value="' + node.item.value + '"/></div><label>' +
                            node.item.label + '</label></li>';
                    } else {
                        result += '<li rel="' + node.item.id + '" ><img' +
                            ' id="i' + node.item.id + '" ' +
                            ' src="' + node.item.pictures + '_orange.svg" style="width: 30px; margin-left: 3px;">' +
                            '<div class="arrow ' + arrowClass + '"></div><div class="checkbox ' + checkClass + '">' +
                            '<input type="hidden" value="' + node.item.value + '"/></div><label>' +
                            node.item.label + '</label></li>';
                    }
                }
            }
            return result;
        }

        //показать дочерний узел с источником данных
        function updateChildrenNodes($li, data, isExpanded) {
            if (data.children && data.children.length > 0) {
                var innerHtml = isExpanded ? '<ul>' : '<ul style="display:none;">';
                innerHtml += getChildrenHtml(data.children) + '</ul>';
                $li.append(innerHtml);

            }

            $li.addClass('updated');
        }

        //привязка выберите изменить на флажок
        container.off('selectchange', '.checkbox').on('selectchange', '.checkbox', function () {
            if (settings.onPreCheck) {
                if (!settings.onPreCheck($(this).parent())) {
                    return;
                }
            }

            var $li = $(this).parent();
            var dataSource = $.data($tree, $li.attr('rel'));
            var $all = $(this).siblings('ul').find('.checkbox');
            var $checked = $all.filter('.checked');

            //all children checked
//----------------------------------------------------------------------------------------------------------------------
            if ($all.length === $checked.length) {
                $(this).removeClass('half_checked').addClass('checked');
                dataSource.item.checked = true;
                if (settings.onCheck) {
                    settings.onCheck($li);
                }
                //all children are unchecked
            } else if ($checked.length === 0) {
                dataSource.item.checked = false;
                $(this).removeClass('checked').removeClass('half_checked');
                if (settings.onUnCheck) {
                    settings.onUnCheck($li);
                }
                //some children are checked
            } else {
                dataSource.item.checked = false;
                if (settings.onHalfCheck && !$(this).hasClass('half_checked')) {
                    settings.onHalfCheck($li);
                }

                $(this).removeClass('checked').addClass('half_checked');
                // console.log("машинка")
            }
        });

        //инициализировать дерево проверки входными данными
        (function initalCheckTree() {
            var treesHtml = '<ul class="checktree">';
            treesHtml += getChildrenHtml(settings.data);
            container.empty().append(treesHtml + '<ul>');
        })();

        //развернуть и свернуть узел
        container.off('click', '.arrow').on('click', '.arrow', function () {
            if ($(this).hasClass('nochildren')) {
                return;
            }

            var $li = $(this).parent();
            if (!$li.hasClass('updated')) {
                updateChildrenNodes($li, $.data($tree, $li.attr('rel')), true);
                $(this).removeClass('collapsed').addClass('expanded');
                if (settings.onExpand) {
                    settings.onExpand($li);
                }
            } else {
                $(this).siblings("ul").toggle();
                if ($(this).hasClass('collapsed')) {
                    $(this).removeClass('collapsed').addClass('expanded');
                    if (settings.onExpand) {
                        settings.onExpand($li);
                    }
                } else {
                    $(this).removeClass('expanded').addClass('collapsed');
                    if (settings.onCollapse) {
                        settings.onCollapse($li);
                    }
                }
            }

        });

        //проверить и снять отметку с узла
        container.off('click', '.checkbox').on('click', '.checkbox', function () {
            var $li = $(this).parent();
            var dataSource = $.data($tree, $li.attr('rel'));
            if (!$li.hasClass('updated')) {
                updateChildrenNodes($li, dataSource, false);
            }

            if (settings.onPreCheck) {
                if (!settings.onPreCheck($li)) {
                    return;
                }
            }

            $(this).removeClass('half_checked').toggleClass('checked');

            if ($(this).hasClass('checked')) {
                dataSource.item.checked = true;
                if (settings.onCheck) {
                    settings.onCheck($li, false);
                }

                this
                $(this).siblings('ul').find('.checkbox').not('.checked').removeClass('half_checked').addClass('checked').each(function () {
                    var $subli = $(this).parent();
                    $.data($tree, $subli.attr('rel')).item.checked = true;
                    if (settings.onCheck) {
                        settings.onCheck($subli, false);

                    }
                });
            } else {
                dataSource.item.checked = false;
                if (settings.onUnCheck) {
                    settings.onUnCheck($li, true);
                }

                // работает на отжатие чека

                $(this).siblings('ul').find('.checkbox').filter('.checked').removeClass('half_checked').removeClass('checked').each(function () {
                    var $subli = $(this).parent();
                    $.data($tree, $subli.attr('rel')).item.checked = false;
                    if (settings.onUnCheck) {
                        settings.onUnCheck($subli, false);
                    }
                    //Меняет картинку машинки
                });
            }

            // console.log(dataSource.item);

            $(this).parents('ul').siblings('.checkbox').trigger('selectchange');
        });

        //меняем цвет машинки

        container.on('click', '.checkbox', function car() {

            var elements = container.find("li");
            for (var i in elements) if (elements.hasOwnProperty(i)) {
                var elem = $(elements[i]);
                var img = elem.find(' > img');
                if (img.length !== 0) {
                    var src = img.attr("src");
                    if (elem.find('.checkbox').is(".checked")) {

                        src = src.replace("_orange.svg", "_white.svg");
                        // document.getElementById("i"+dataSource.item.id).src = dataSource.item.pictures + '_white.svg';
                    } else {
                        src = src.replace("_white.svg", "_orange.svg");
                        // document.getElementById("i" + dataSource.item.id).src = dataSource.item.pictures + '_orange.svg';
                    }
                    img.attr('src', src);
                }
            }

            function carSher() {

            }
        });

        //щелкните метка также вызвать действие проверки
        container.off('click', 'label').on('click', 'label', function () {
            $(this).prev('.checkbox').trigger('click');
        });

        container.off('mouseenter', 'label').on('mouseenter', 'label', function () {
            $(this).addClass("hover");
            if (settings.onLabelHoverOver) settings.onLabelHoverOver($(this).parent());
        });

        container.off('mouseleave', 'label').on('mouseleave', 'label', function () {
            $(this).removeClass("hover");
            if (settings.onLabelHoverOut) settings.onLabelHoverOut($(this).parent());
        });
    };

})(jQuery);
