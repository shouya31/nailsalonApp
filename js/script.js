if (window.matchMedia('(min-width: 959px)').matches) {
    $(window).on('load scroll', function(){
        if ($(window).scrollTop() > 200) {
          $('.header_wrapper').fadeIn(400);
         } else {
          $('.header_wrapper').fadeOut(400);
         }
      });
  } else {
    $(function () {
        $('.zdo_drawer_button').click(function () {
          $(this).toggleClass('active');
          $('.header_wrapper').fadeToggle();
        })
      })
      $(function () {
        $('.header_nav,.header_cta-btn a').click(function () {
          $('.header_wrapper').fadeOut();
          $('.zdo_drawer_button').toggleClass('active');
        })
      })
  }


  