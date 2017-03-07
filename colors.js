$(document).ready(function() {
  $('#colorList').addClass('red');
  $('#colorList li').addClass('blue');
  $('#colorList li:last').hover(function() {
    $(this).addClass('green');
  }, function(){
    $(this).removeClass('green');
  });
});
