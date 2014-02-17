window.onload=function() {

  window.interval = setInterval(function() {
    $('#animation').attr('src',$('#animation').attr('src'))
  },1)

  setTimeout(function() {
    clearInterval(interval)  
  }, 2000)

};