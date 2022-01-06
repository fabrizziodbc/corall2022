const header__hamburguer = document.querySelector('.header__hamburguer');
const header__menu = document.querySelector('.header__menu-mobile');
const main = document.querySelector('main');
const form = document.getElementById("myForm");

const YOUR_SERVICE_ID = "service_y5leog6";
const YOUR_TEMPLATE_ID = "template_ysgrd24";
const sendForm = (event) => {
  event.preventDefault();
  emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, "#myForm").then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
  alert("Mensaje enviado");
};

addEventListener('DOMContentLoaded', () => {
  header__hamburguer.addEventListener('click', () => {
    header__menu.classList.toggle('showRight');
  });
  header__menu.addEventListener('click', () => {
    header__menu.classList.toggle('showRight');
  });
  main.addEventListener('click', () => {
    header__menu.classList.remove('showRight');
  });
  form.addEventListener("submit", sendForm);
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -8.0929367, lng: -79.0131982 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}