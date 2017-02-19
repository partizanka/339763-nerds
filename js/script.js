var link = document.querySelector(".contacts-link");
var popup = document.querySelector(".letter");
var close = document.querySelector(".letter-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("letter-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("letter-show");
});

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
      iconLayout: "default#image",
      iconImageHref: "img/marker.png",
      iconImageSize: [187, 190],
      iconImageOffset: [100, -150]
    });
  myMap.geoObjects.add(myPlacemark);
});