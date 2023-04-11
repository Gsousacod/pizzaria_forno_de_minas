const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});

// Quando user fizer scroll executar a myFuntion
window.onscroll = function() {myFunction()};

var header = document.getElementById("menu");

var sticky = header.offsetTop;

// Adicionar a classe sticky ao header quando chega à posição de scroll e remover quando sai dessa posição.
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}