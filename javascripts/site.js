$( document ).ready(function() {

  console.log( "ready!" );

  $('#mode-toggle').click(function(){
    $('body').toggleClass('light');
    console.log('success');
  });

  var words = [
  'UI/UX',
  'branding',
  'ilustración',
  'animación'
  ], i = 0;

  setInterval(function () {       // \/ \/ callback function
  	$('#word').fadeOut(200, function() {
    	$(this).text( words[ (i === words.length - 1) ? i = 0 : i += 1 ] ).fadeIn(200);
    });
  }, 3000);


  var allPanels = $('.accordion > dd').hide().css('opacity',0);
  var allArrows = $('.accordion > dt > a > svg');

  $('.accordion > dt > a').click(function() {
      $this = $(this);
      $target = $this.parent().next();
      $thisArrow = $this.children().eq(1);
      $activePanel = $('.accordion > .active');

      if(!$target.hasClass('active')){
        $activePanel.animate(
          { opacity: 0 },
          { queue: false, duration: 'fast' }
        );
        allPanels.removeClass('active').slideUp('normal').css('opacity',0);
        allArrows.removeClass('rotate');
        $target.addClass('active').slideDown('fast').animate(
          { opacity: .7 },
          { queue: false, duration: '300' }
        );
        $thisArrow.addClass('rotate');
      } else if($target.hasClass('active')){
        $activePanel.animate(
          { opacity: 0 },
          { queue: false, duration: 'fast' }
        );
        allPanels.removeClass('active').slideUp('normal').css('opacity',0);
        allArrows.removeClass('rotate');
      }

    return false;
  });

});
