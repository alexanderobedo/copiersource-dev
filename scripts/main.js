(function(window, document, $) {
   
  $('.flexslider').flexslider({
    animation: "slide",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a"),
    start: function(slider){
      $('body').removeClass('loading');
    }
  });

  $('.featured-products-slider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5,
    minItems: 2,
    maxItems: 3
    //customDirectionNav: $(".custom-navigation a")
  });


})(window, document, jQuery);



