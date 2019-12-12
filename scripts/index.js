$(document).ready(function() {
  $('.photo-column div').on('click', function() {
    var $img = $(this).find('img');
    var $imgUrl = $img.attr('src');
    $('.big-photo').css('display', 'flex');
    $('.enlarged').attr('src', $imgUrl);
    $('.exit').on('click', function() {
      $('.big-photo').hide();
    });
  });

  $('.grid-box.graphic').on('click', function() {
    let $imgUrl = $(this).css('background-image');
    let $position = $imgUrl.indexOf("images/graphics/");
    $imgUrl = $imgUrl.substring($position, $imgUrl.length - 2);
    $('.big-photo').css('display', 'flex');
    $('.enlarged').attr('src', $imgUrl);
    $('.exit').on('click', function() {
      $('.big-photo').hide();
    });
  });

  $('.navcontrol').on('click', function() {
    if ($('.navigation').is(':visible')) {
      $('.navigation').slideToggle();
      $('.navcontrol').text('Menu ☰');
    } else {
      $('.navigation').slideToggle();
      $('.navcontrol').text('×');
    }
  });

  let x = window.matchMedia("(max-width: 800px)");
  checkIfMobile(x) // Call listener function at run time
  x.addListener(checkIfMobile) // Attach listener function on state changes

  function checkIfMobile(x) {
    if (x.matches) { // if mobile
      $('.navigation').hide();
      const $portrait = $('.headshot').detach();
      $('#main').prepend($portrait);
      $('#photography .subheader').text('Click for full screen');
    }
  }


});
