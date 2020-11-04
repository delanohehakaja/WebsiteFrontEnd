// JavaScript Document

// maakt de variabel deButton aan om "nav button" aan te kunnen roepen //
var deButton = document.querySelector("nav button");

// Zorgt ervoor dat de animatie wordt geactiveerd dmv klikken // 
deButton.addEventListener("click", toggleMenu);

//Na de klik wordt toggleMenu aangeroepen//

//hier geef je toggleMenu de functie om toonmenu aan te tonen//
function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}