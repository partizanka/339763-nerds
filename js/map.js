ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
            center: [59.939054, 30.319866],
            zoom: 16
        }, {
            searchControlProvider: "yandex#search"
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: "ул. Б. Конюшенная, д. 19/8",
            balloonContent: "Nerds"
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: "default#image",
            // Своё изображение иконки метки.
            iconImageHref: "img/marker.png",
            // Размеры метки.
            iconImageSize: [187, 190],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [100, -150]
        });

    myMap.geoObjects.add(myPlacemark);
});