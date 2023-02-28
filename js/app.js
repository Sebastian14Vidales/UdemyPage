let mybutton = document.querySelector(".topscroll");
const bandera = document.querySelector('.eu');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    console.log(document.body.scrollTop);
    mybutton.style.display = "block";

  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener('click', function () {
  document.body.scrollTo({ top: 0, behavior: 'smooth' }); // For Safari
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
});


// CAMBIAR IDIOMA
bandera.addEventListener('click', function () {

});

// MOSTRAR INFORMACIÓN POPOVER
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


