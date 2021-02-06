$( document ).ready(function() {

  console.log( "ready!" );

  $('#mode-toggle').click(function(){
    $('body').toggleClass('light');
    console.log('success');
  });

});
