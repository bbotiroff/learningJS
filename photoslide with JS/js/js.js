$(function() {
  $("[img-ID=picMR]").click(function() {   
    $('img').fadeOut(100);
    $("[img-ID]").removeClass('active');
    $(this).addClass('active');
    $("#picMR").fadeIn(1000);
  });
  $("[img-ID=MRglass]").click(function() {    
    $('img').fadeOut(100);
    $("[img-ID]").removeClass('active');
    $(this).addClass('active');
    $("#MRglass").fadeIn(1000);
  });
  $("[img-ID=HQueen]").click(function() {    
    $('img').fadeOut(100);
    $("[img-ID]").removeClass('active');
    $(this).addClass('active');
    $("#HQueen").fadeIn(1000);
  });
});