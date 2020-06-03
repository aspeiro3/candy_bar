$(function(){
  $('.href-scroll').click(function(){
    var id = $(this).attr('href');

    $('html, body').animate({
      scrollTop: ($(id).offset().top - 0)
    }, 500);
    return false;
  });
});
