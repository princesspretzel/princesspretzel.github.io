window.onload=function() {

  setTimeout(function() {
    $('.animation').hide();
    $('.replacement').show();
  }, 1000);

  $('#about').on("click", function(){
    $('.poofle').hide();  
    $('.about').show();
  });

  $('#portfolio').on("click", function(){
    $('.poofle').hide();
    $('.portfolio').show();
  });

  $('#home').on("click", function(){
    $('.poofle').hide();
    $('.home').show();
  });

  $('#skills').on("click", function(){
    $('.poofle').hide();
    $('.skills').show();
  });

  $('#contact').on("click", function(){
    $('.poofle').hide();
    $('.contact').show();
  });

};