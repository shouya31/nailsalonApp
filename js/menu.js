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