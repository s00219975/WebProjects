
    const menuFive = document.querySelector('.menuFive');

    function addClassFunFive() {
        this.classList.toggle("clickMenuFive");
    }

    menuFive.addEventListener('click', addClassFunFive);


    $('body').on('click', '.button-nav', function() {
    $('body').toggleClass('modal-open');
});
