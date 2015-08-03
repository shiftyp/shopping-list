$(document).ready(function(){

  $('body').on('click','', function() {
    console.log( event.target );
  });

  //cross out the text of items with the checkbox selected
  $('body').on('click', 'ins.iCheck-helper', function() {
      $('.icheckbox_square-red').parent().next().children('span').css("text-decoration", "none");
      $('.icheckbox_square-red.checked').parent().next().children('span').css("text-decoration", "line-through");
  });


  $('body').on('ifToggled', function(event){
    alert(event.type + ' callback');
  });

    //add items

    $('body').on('click', '.lined-box-first > div > button', function() {
        console.log("add button clicked!");
        var itemvalue = $('.lined-box-first .todo-item > input').val();
        console.log(itemvalue);
        $( 'body .line-item:last-of-type' ).clone().insertAfter('body .line-item:last-of-type');
        $( 'body .line-item:last-of-type .todo-item > span' ).text( itemvalue );
        $('body .line-item:last-of-type input').remove();
        $('body .line-item:last-of-type input').iCheck({
          checkboxClass: 'icheckbox_square-red',
          radioClass: 'iradio_square-red',
          increaseArea: '50%', // optional
          inheritID: true
        });
        $('body div.line-item').sortable();
    });

  //remove lines
  $('body').on('click', 'ul li.line-item .lined-box .button-error', function( event ) {
    console.log( event.target );
    $( event.target ).closest('li.line-item').slideUp();


    });


    $('input').iCheck({
      checkboxClass: 'icheckbox_square-red',
      radioClass: 'iradio_square-red',
      increaseArea: '50%', // optional
      inheritID: true
    });

$('body div.line-item').sortable();

});
