$( document ).ready(function() {

  console.log( "ready!" );

  $('#mode-toggle').click(function(){
    $('body').toggleClass('light');
    console.log('success');
  });

  var words = [
  'coding',
  'branding',
  'illustration',
  'content'
  ], i = 0;

  setInterval(function () {       // \/ \/ callback function
  	$('#word').fadeOut(200, function() {
    	$(this).text( words[ (i === words.length - 1) ? i = 0 : i += 1 ] ).fadeIn(200);
    });
  }, 3000);

});
