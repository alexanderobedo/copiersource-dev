(function(window, document, $) {
   

  // home banner slider

  $('.home-banner .flexslider').flexslider({
    animation: "slide",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a"),
    start: function(slider){
      $('body').removeClass('loading');
    }
  });

  // home featured products slider
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

  $('li.has-ul').click(function() {
    $(this).children('.sub-ul').slideToggle(500);
    $(this).toggleClass('active');
     event.preventDefault();
  });

  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })


  // single product slider
  $('.section-product-details #carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 20,
    itemMargin: 12,
    minItems: 2,
    maxItems: 3,
    asNavFor: '#slider'
  });

  $('.section-product-details #slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });


})(window, document, jQuery);



