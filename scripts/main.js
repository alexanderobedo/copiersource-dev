(function(window, document, $) {
   
  $('.flexslider').flexslider({
    animation: "slide",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a"),
    start: function(slider){
      $('body').removeClass('loading');
    }
  });

  // $('.flexslider').flexslider({
  //   animation: "slide",
  //   animationLoop: false,
  //   itemWidth: 210,
  //   itemMargin: 5
  // });

})(window, document, jQuery);



