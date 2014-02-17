$( "#about" ).click(function() {
  $("#container").load( "about.html" )
});

$( "#portfolio" ).click(function() {
  $("#container").load( "portfolio.html" )
});

$( "#home" ).click(function() {
  $("#container").load( "index.html" )
});

$( "#skills" ).click(function() {
  $("#container").load( "skills.html ul" )
});

$( "#contact" ).click(function() {
  $("#container").load( "contact.html" )
});

window.onload=function() {

  setTimeout(function() {
    $('.animation').hide();
    $('.replacement').show();
  }, 1000);

};