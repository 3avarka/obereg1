var json_sample = JSON.parse('{"key":{"lat":65, "lng":35, "cnt":"1: Описание </br> ' +
    '2: Описание", "img":"/assets/image/logo.svg"}, "key1":{"lat":34, "lng":45, "cnt":"1: Описание </br> ' +
    '2: Описание", "img":"/assets/image/logo.svg"}}');

//---- инициализация
ymaps.ready(init);
    var myMap,
    myPlacemark;

longitude   = 65.266075;
latitude    = 55.429551;


function init(){
    myMap   = new ymaps.Map("map", {
        center: [latitude, longitude],
        zoom: 7
    });

    myPlacemark = new ymaps.Placemark([latitude, longitude]);

    myMap.geoObjects.add(myPlacemark);

    setPolyline([
        [latitude, longitude],
        [latitude+1, longitude+1],
        [latitude-1, longitude+1],
        [latitude, longitude]
    ],"#21d11b",'<br><img src="https://pp.userapi.com/c841225/v841225056/735ac/H2pK20cCBQQ.jpg"style="width: 100px;"> ');

}