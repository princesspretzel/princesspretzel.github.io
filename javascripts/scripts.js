window.onload=function() {

  var clicks=0;
  console.log("Nice to meet you!");

  $(window).on("click", function(){
    clicks++;
    if (clicks === 5) {
      console.log("Let's shake hands!");
    }
  });

  $('.claw').on("click", function(){
    window.location="https://github.com/princesspretzel"
  });

};