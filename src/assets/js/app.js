$(document).ready(function() {

  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  $('.modal').modal();
  $('select').material_select();
  $('[data-tooltip]').tooltip({delay: 50});
  $('.slider').bxSlider();

  $('.login').click(function() {
    $('.login').css('display', 'none');
    $('.login.login-reg').css('display', 'block');
  });
  
});

// $(document).Materialize();