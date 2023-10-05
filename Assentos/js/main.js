
    const menuFive = document.querySelector('.menuFive');

    function addClassFunFive() {
        this.classList.toggle("clickMenuFive");
    }

    menuFive.addEventListener('click', addClassFunFive);


    $(document).on('click', '.smoothscrolled', function (event) {
      event.preventDefault();
      $('body, html').animate({
        scrollTop: $($(event.target).attr('href')).offset().top,
      }, 1000);
    });


    $(document).on('click', '.button-nav', function() {
    $('body').toggleClass('modal-open');
    $('.head').toggleClass('background-black');
    $('.header').toggleClass('background-black');
    $('button').toggleClass('background-black')
    $('button span').toggleClass('background-white')
});


    $(document).on('click', '.smoothscrolled', function() {
    $('body').removeClass('modal-open');
    $('div.navbar-collapse').removeClass('in');
    $('button.menuFive').removeClass('clickMenuFive');
    $('.head').removeClass('background-black');
    $('.header').removeClass('background-black');
    $('button').removeClass('background-black')
    $('button span').removeClass('background-white')
});
