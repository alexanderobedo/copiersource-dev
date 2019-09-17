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

  $('.product-slider #carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '.product-slider #slider'
  });
 
  $('.product-slider #slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: ".product-slider #carousel"
  });

})(window, document, jQuery);



