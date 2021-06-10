$(window).on('load', function(){

	$("#loading_wrap").fadeOut("slow");;

  footerHeight = $('footer').height();
  $('body').css("padding-bottom", footerHeight);

  $(window).resize(function() {
    footerHeight = $('footer').height();
    $('body').css("padding-bottom", footerHeight);
  });
});
