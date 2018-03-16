$(function() {
  
  //this for talking to your user
  $('button#hello').click(function() {
    $('ul#user').append('<li>Hey you!</li>');
    $('ul#webpage').append('<li>Hello sir!, what can I do for <strong> you</strong> ?</li>');
    $('li').click(function() {
      $(this).remove();
    });
  });
  $('button#something').click(function() {
    $('ul#user').append('<li>I am going to say some staff..</li>');
    $('ul#webpage').append('<li>Well YEAH! sure let\'s talk man..</li>');
    $('li').click(function() {
      $(this).remove();
    });
  });
  $('button#bye').click(function() {
    $('ul#user').append('<li>Good bye..</li>');
    $('ul#webpage').append('<li>SEE YOU LATER..</li>');
    $('li').click(function() {
      $(this).remove();
    });
  });
  
  //this for make your pets sound
  $('#dog').click(function() {
    $('ul#dog-bark').append('<li>WOOF, WOOF</li>');
    $('li').click(function() {
      $(this).remove();
    });
  });
  $('#cat').click(function() {
    $('ul#meow').append('<li>MEOW, MEOW</li>');
    $('li').click(function() {
      $(this).remove();
    });
  });
  //Lets see some image
  
  $('#clickable').click(function() {
    $('#images').children('img').fadeToggle(1000);
  });
  
  
  
  
});