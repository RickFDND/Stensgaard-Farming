document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.querySelector('#hamburger-button');
  const navbar = document.querySelector('nav');

  if (!hamburgerButton || !navbar) return;

  hamburgerButton.addEventListener('click', function (e) {
    e.preventDefault(); // voorkomt dat de <a href="#quick-links"> springt naar de footer

    navbar.classList.toggle('nav-open'); // toggle menu zichtbaar
    hamburgerButton.classList.toggle('active'); // toggle knop animatie
  });
});