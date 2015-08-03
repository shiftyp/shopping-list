$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_square-red',
    radioClass: 'iradio_square-red',
    increaseArea: '50%' // optional
  });

  $('div.red-line ins.iCheck-helper').click(function() {
      $('.icheckbox_square-red').parent().next().css("text-decoration", "none");
      $('.icheckbox_square-red.checked').parent().next().css("text-decoration", "line-through");
  });


});
