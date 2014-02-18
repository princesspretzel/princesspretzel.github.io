window.onload=function() {

  setTimeout(function() {
    $('.animation').hide();
    $('.replacement').show();
  }, 1000);

};

$('#about').on("click", function(){
  $('.about').show();
});

$('#portfolio').on("click", function(){
  $('.portfolio').show();
});

$('#home').on("click", function(){
  $('.home').show();
});

$('#skills').on("click", function(){
  $('.skills').show();
});

$('#contact').on("click", function(){
  $('.contact').show();
});