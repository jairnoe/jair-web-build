$( document ).ready(function() {

  console.log( "ready!" );

  $('#mode-toggle').click(function(){
    $('body').toggleClass('dark');
    console.log('success');
  });

});
