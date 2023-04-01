$(document).ready(function() {

  // ENLARGE PHOTOS IN GALLERY
  $('.photo-column div').on('click', function() {
    var $img = $(this).find('img');
    var $imgUrl = $img.attr('src');
    enlargePhoto($imgUrl);
  });

  // ENLARGE PORTFOLIO GRAPHICS
  $('.grid-box.graphic').on('click', function() {
    let $imgUrl = $(this).css('background-image');
    let $position = $imgUrl.indexOf("images/graphics/");
    $imgUrl = $imgUrl.substring($position, $imgUrl.length - 2);
    enlargePhoto($imgUrl);
  });

  // OPEN NAV MENU ON MOBILE
  $('.navcontrol').on('click', function() {
    if ($('.navigation').is(':visible')) {
      $('.navigation').slideToggle();
      $('.navcontrol').text('☰');
    } else {
      $('.navigation').slideToggle();
      $('.navcontrol').text('×');
    }
  });

  let x = window.matchMedia("(max-width: 800px)");
  checkIfMobile(x) // Call listener function at run time
  x.addListener(checkIfMobile) // Attach listener function on state changes

  // CHANGE THINGS ON MOBILE
  function checkIfMobile(x) {
    if (x.matches) { // if mobile
      $('.navigation').hide(); // hide nav menu
      // const $portrait = $('.headshot').detach(); // remove portrait from nav manu
      // $('#portrait-place').prepend($portrait); // put portrait at top of main page
      $('.hide-on-mobile').hide(); // hide anything with this class
    }
  }

  // BIG PHOTO FUNCTION
  function enlargePhoto($imgUrl) {
    $('.big-photo').fadeIn(400).css('display','flex');
    $('.enlarged').attr('src', $imgUrl);
    $('.exit').on('click', function() {
      $('.big-photo').fadeOut(400);
    });
  }

  // PORTFOLIO SECTION OPEN & CLOSE FUNCTION
  $('.arrow').on('click', function() {
    var $section = $(this).nextAll('div.grid:first');
    console.log($section)
    $section.slideToggle();
  });


});
