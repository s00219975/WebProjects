

const menuFive = document.querySelector('.menuFive');

function addClassFunFive() {
    this.classList.toggle("clickMenuFive");
}

menuFive.addEventListener('click', addClassFunFive);


$(document).on('click', '.button-nav', function() {
$('body').toggleClass('modal-open');
$('button span').toggleClass('background-cross')
});
