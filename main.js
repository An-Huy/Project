$(window).scroll(function(){
  if($(window).scrollTop() >= 10) {
    $('.button_scroll2top').show();
  } else {
    $('.button_scroll2top').hide();
  }
});

function page_scroll2top(){
  $('html,body').animate({
    scrollTop: 0
    }, 'slow');
}

function learnmore(){
  $('html,body').animate({
    scrollTop: 710
    }, 'slow');
}