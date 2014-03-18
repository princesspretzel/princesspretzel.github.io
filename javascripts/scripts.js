window.onload=function() {

  setTimeout(function() {
    $('.animation').hide();
    $('.replacement').show();
  }, 1000);

  $('#logo').on("click", function(){
    $('.poofle').hide();  
    $('.photo').show();
  });

  $('h1').on("click", function(){
    $('.poofle').hide();  
    $('.photo').show();
  });

  $('#about').on("click", function(){
    $('.poofle').hide();  
    $('.about').show();
  });

  $('#portfolio').on("click", function(){
    $('.poofle').hide();
    $('.portfolio').show();
  });

  // $(".projects").on("click", function(){ 
  //   $('.projects').hide();
  //   $('.group').show();
  // }); 

  // $(".projects").on("click", function(){ 
  //   $('.projects').hide();
  //   $('.game1').show();
  // }); 

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