//Скрипт: для отображения выбранной техники
$(document).ready(function () {
    $('select')
        .each(function () {
            $(this).siblings('p').text($(this).find('option:selected').text());
        })
        .change(function () {
            $(this).siblings('p').text($(this).find('option:selected').text());
        });
});

//Скрипт: для поиска по фильтру

var filtrPath = {};

filtrPath.GpsDate = function find() {
    var filterData = {
        //список техники
        carId:$("#select").val(),
        //выбранный период
        dateBegin: $("#dateWork").val(),
        timeBegin: $("#timeWork").val(),
        timeEnd: $("#timeWork1").val(),
        // радио
        radio:$("[name = 'mode']:checked").val(),
        directory:$("[name = 'directory']:checked").val(),
        see:$("[name = 'see']:checked").val(),
        all:$("[name = 'all']:checked").val(),
        //бегунок
        sliderSpeed:$("#speed").val(),
        sliderPosit:$("#position").val()

    };

    filterData.beg = new Date(filterData.dateBegin + ' ' + filterData.timeBegin);


    // console.log(JSON.stringify(filterData.beg));
    console.log(filterData);


};
$("#find").on("click", filtrPath.GpsDate);