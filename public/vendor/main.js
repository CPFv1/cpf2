


function renderGMap() {
  if (document.contains(document.getElementById('googleMap'))) {
    myCenter = new google.maps.LatLng(14.731362, 121.145129);
    var mapOptions = {
      center: myCenter,
      zoom: 11, scrollwheel: false, draggable: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          "featureType": "all",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#008eff"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "0"
            },
            {
              "lightness": "0"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            },
            {
              "saturation": "-60"
            },
            {
              "lightness": "-20"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#f7f7f7"
            }
          ]
        }
      ]
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);


    function HTMLMarker(lat, lng) {
      this.lat = lat;
      this.lng = lng;
      this.pos = new google.maps.LatLng(lat, lng);
    }

    HTMLMarker.prototype = new google.maps.OverlayView();
    HTMLMarker.prototype.onRemove = function () { }

    //init your html element here
    HTMLMarker.prototype.onAdd = function () {
      div = document.createElement('DIV');
      div.className = "arrow_box";
      div.innerHTML = `
    <div>
    <span class="pulse"></span>
    </div>
    `;
      var panes = this.getPanes();
      panes.overlayImage.appendChild(div);
    }

    HTMLMarker.prototype.draw = function () {
      var overlayProjection = this.getProjection();
      var position = overlayProjection.fromLatLngToDivPixel(this.pos);
      var panes = this.getPanes();
      panes.overlayImage.style.left = position.x + 'px';
      panes.overlayImage.style.top = position.y - 30 + 'px';
    }

    // render map

    var htmlMarker = new HTMLMarker(14.731362, 121.145129);
    htmlMarker.setMap(map);
  }
}


function doneLoading() {
  $('#preloader').delay(100).fadeOut('slow', function () {
    $(this).remove();
  });
}

// Hero rotating texts
function initAnn() {
  $("#hero .rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 3000
  });
}


const initPage = () => {

  renderGMap()

  !(function ($) {
    "use strict";


    // // Preloader
    // $(window).on('load', function () {

    // });



    // Initiate the wowjs
    new WOW().init();

    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
      animation: {
        opacity: 'show'
      },
      speed: 400
    });

    // Mobile Navigation
    if ($('#nav-menu-container').length) {
      var $mobile_nav = $('#nav-menu-container').clone().prop({
        id: 'mobile-nav'
      });
      $mobile_nav.find('> ul').attr({
        'class': '',
        'id': ''
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
      $('body').append('<div id="mobile-body-overly"></div>');
      $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');
      $(document).on('click', '.menu-has-children i', function (e) {
        $(this).next().toggleClass('menu-item-active');
        $(this).nextAll('ul').eq(0).slideToggle();
        $(this).toggleClass("fa-chevron-up fa-chevron-down");
      });
      $(document).on('click', '#mobile-nav-toggle', function (e) {
        $('body').toggleClass('mobile-nav-active');
        $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
        $('#mobile-body-overly').toggle();
      });
      $(document).click(function (e) {
        var container = $("#mobile-nav, #mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').fadeOut();
          }
        }
      });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
      $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    // Stick the header at top on scroll
    $("#header").sticky({
      topSpacing: 0,
      zIndex: '50'
    });

    // Smoth scroll on page hash links
    $('a[href*="#"]:not([href="/#"])').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          var top_space = 0;
          if ($('#header').length) {
            top_space = $('#header').outerHeight();
          }
          $('html, body').animate({
            scrollTop: target.offset().top - top_space
          }, 1500, 'easeInOutExpo');
          if ($(this).parents('.nav-menu').length) {
            $('.nav-menu .menu-active').removeClass('menu-active');
            $(this).closest('li').addClass('menu-active');
          }
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').fadeOut();
          }
          return false;
        }
      }
    });

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, #mobile-nav');

    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop() + 120;

      nav_sections.each(function () {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight() - 90;

        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('menu-active');
          }
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-active');
        }
        if (cur_pos < 200) {
          $(".nav-menu li:first").addClass('menu-active');
        }
      });
    });

    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
    });

    // Porfolio isotope and filter
    $(window).on('load', function () {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
      });

      renderGMap()

    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $('.venobox').venobox();
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });

  })(jQuery);
}