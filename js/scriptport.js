$('.nav-item').on('click', function () {
  var tujuan = $(this).attr('href');

  var elemenTujuan = $(tujuan);

  $('html,body').animate({
    scrollTop: elemenTujuan.offset().top - 50
  }, 1500);

});

// parallax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $('.jumbotron img').css({
    'transform': 'translate(0px, ' + wScroll / 4 + '%)'
  });

  $('.jumbotron h1').css({
    'transform': 'translate(0px, ' + wScroll / 2.1 + '%)'
  });

  $('.jumbotron h3').css({
    'transform': 'translate(0px, ' + wScroll / 2 + '%)'
  });

});