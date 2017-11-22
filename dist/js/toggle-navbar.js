(function () {
  $(window).scroll(function() {

      if (!$(window).scrollTop()) {
        $('.navbar-nav').fadeOut();
      } else {
        $('.navbar-nav').fadeIn();
      }
  });
})();
