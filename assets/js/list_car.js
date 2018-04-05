var mockData = [];


mockData.push({
    item: {
        id: 'id3',
        label: 'Все машины',
        pictures: null,
        value: 1,
        checked: false,
        onExpand: true
    },
    children: [{


        item: {
            id: 'id32',
            pictures: null,
            label: 'Группа 1',
            value: 1,
            checked: false
        },
        children:
            [{
                //KDM

                item: {
                    id: 'id321',
                    pictures: null,
                    label: 'КДМ',
                    value: 1,
                    checked: false
                },
                children:

                    [{
                        item: {
                            id: 'id11',
                            pictures: "/assets/img/car",
                            label: '00001',
                            value: 1,
                            checked: false
                        }
                    }, {
                        item: {
                            id: 'id12',
                            pictures: "/assets/img/car",
                            label: '00002',
                            value: 1,
                            checked: false
                        }
                    }, {
                        item: {
                            id: 'id13',
                            pictures: "/assets/img/car",
                            label: '00003',
                            value: 1,
                            checked: false
                        }

                    }, {
                        item: {
                            id: 'id131',
                            pictures: "/assets/img/car",
                            label: '00001',
                            value: 1,
                            checked: false
                        }
                    }, {
                        item: {
                            id: 'id412',
                            pictures: "/assets/img/car",
                            label: '00002',
                            value: 1,
                            checked: false
                        }
                    }, {
                        item: {
                            id: 'id513',
                            pictures: "/assets/img/car",
                            label: '00003',
                            value: 1,
                            checked: false
                        }

                    }, {
                        item: {
                            id: 'id611',
                            pictures: "/assets/img/car",
                            label: '00001',
                            value: 1,
                            checked: false
                        }
                    }, {
                        item: {
                            id: 'id712',
                            pictures: "/assets/img/car",
                            label: '00002',
                            value: 1,
                            checked: false
                        }
                    }, {
                        item: {
                            id: 'id163',
                            pictures: "/assets/img/car",
                            label: '00003',
                            value: 1,
                            checked: false
                        }

                    }
                    ]
                //   KDM
            }, {
                //автогудронаторы
                item: {
                    id: 'id2422',
                    pictures: null,
                    label: 'Автогудронаторы',
                    value: 1,
                    checked: false
                },
                children:

                    [{
                        item: {
                            id: 'id1w231',
                            pictures: "/assets/img/car_not",
                            label: '00001',
                            value: 1,
                            checked: false
                        }
                    }, {
                        item: {
                            id: 'id512',
                            pictures: "/assets/img/car_not",
                            label: '00002',
                            value: 1,
                            checked: false
                        }
                    }, {
                        item: {
                            id: 'id16323',
                            pictures: "/assets/img/car_not",
                            label: '00003',
                            value: 1,
                            checked: false
                        }
                    }]

            }
            ]
    }, {


        item: {
            id: 'id32342',
            pictures: null,
            label: 'Группа 2',
            value: 1,
            checked: false
        },
        children:
            [{
                //Грейдеры
                item: {
                    id: 'id323421',
                    pictures: null,
                    label: 'Гредеры',
                    value: 1,
                    checked: false
                },
                children:

                    [{
                        item: {
                            id: 'id324211',
                            pictures: "/assets/img/greider",
                            label: '00001',
                            value: 1,
                            checked: false
                        }
                    }, {
                        item: {
                            id: 'id12342',
                            pictures: "/assets/img/greider",
                            label: '00002',
                            value: 1,
                            checked: false
                        }
                    }, {
                        item: {
                            id: 'id12343',
                            pictures: "/assets/img/greider",
                            label: '00003',
                            value: 1,
                            checked: false
                        }

                    }]
                //   еще, что то
            }, {
                //автогудронаторы
                item: {
                    id: 'id2422342',
                    pictures: null,
                    label: 'Гелик',
                    value: 1,
                    checked: false
                },
                children:

                    [{
                        item: {
                            id: 'id23211a',
                            pictures: "/assets/img/greider",
                            label: '00001',
                            value: 1,
                            checked: false
                        }
                    }, {
                        item: {
                            id: 'id1234342',
                            pictures: "/assets/img/greider",
                            label: '00002',
                            value: 1,
                            checked: false
                        }
                    }, {
                        item: {
                            id: 'id14233',
                            pictures: "/assets/img/greider",
                            label: '00003',
                            value: 1,
                            checked: false
                        }
                    }]

            }
            ]
    }
    ]
});


$(function () {

    $('#tree-container').checkTree({
        data: mockData
    });

});

var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();


