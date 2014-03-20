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
 
  $("#projects").owlCarousel({
    items: 2,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false
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