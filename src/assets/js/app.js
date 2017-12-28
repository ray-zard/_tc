$(document).ready(function() {

  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  $('.modal').modal();

  $('select').material_select();

  $('[data-tooltip]').tooltip({delay: 50});
  $('.slider').bxSlider();

  $('.login').on('click', '#reg', function() {
    $('.login').css('display', 'none');
    $('.login.login-reg').css('display', 'block');
  });

  $('.val-link').click(function() {
    if ($(this).parent().siblings().is('.val-body')) {
      $(this).toggleClass('active');
      $(this).parent().siblings('.val-body').toggle();
    } else {
      $(this).removeClass('active');
    }
  });


  $('form.val-body :checkbox').change(function(e) {

    if ($('input:checked').length > 0) {
      $('.val-f-btn').addClass('active');
    } else {
      $('.val-f-btn').removeClass('active');
    }

  });

  $('.val-i-drop').click(function() {
    if ($(this).parent().siblings().is('.val-sublist')) {
      $(this).toggleClass('active');
      $(this).parent().siblings('.val-sublist').toggle();
    } else {
      $(this).removeClass('active');
    }
  })
  
});

// $(document).Materialize();