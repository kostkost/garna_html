// ------------------------------
//            PLUGINS
// ------------------------------

//  bootstrap tooltip
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
});

new WOW().init();

// slick
$(function() {
  $('.partners-slick').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(function() {
  $('.hero-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });
});

// ------------------------------
//            CUSTOM
// ------------------------------

// Easy Scrool to #id
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-80
        }, 1000);
        return false;
      }
    }
  });
});

// Back To Top
$(document).ready(function() {
  // hide #back-top first
  $("#back-top").hide();
  // fade in #back-top
  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > (document.documentElement.scrollHeight - 1500)) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
});

// Project Description Sticky Sitebar
$(document).ready(function(){
  if ( $( "#project" ).length ) { 
    var bottom_sidebar = $( document ).height() - $('#project').offset().top + 10 - $('#project').height();
    if ($( document ).width() > 768) {
      $('#myAffix').affix({
        offset: {
          top: 100,
          bottom: bottom_sidebar
        }
      });
    }
  }
});