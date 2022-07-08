// paralax
$(window).scroll(function () {
      var wscroll = $(this).scrollTop();
      $(".jumbotron img").css({
            transform: "translate(0px, " + wscroll + "%)",
      });
});
