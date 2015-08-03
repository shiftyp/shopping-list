$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_square-red',
    radioClass: 'iradio_square-red',
    increaseArea: '50%' // optional
  });

  //cross out the text of items with the checkbox selected
  $('div.red-line ins.iCheck-helper').click(function() {
      $('.icheckbox_square-red').parent().next().css("text-decoration", "none");
      $('.icheckbox_square-red.checked').parent().next().css("text-decoration", "line-through");
  });

  //remove lines

  $('.lined-box button').click(function() {
    $( this ).parent().slideUp();

    });

  //add items

  $('.lined-box-first > div > button').click(function() {
      console.log("add button clicked!");
      var itemvalue = $('.lined-box-first .todo-item > input').val();
      console.log(itemvalue);
      $( 'body .line-item:last-of-type' ).clone().insertAfter('body .line-item:last-of-type');
      $( 'body .line-item:last-of-type .todo-item > span' ).text( itemvalue );   
  });



});
