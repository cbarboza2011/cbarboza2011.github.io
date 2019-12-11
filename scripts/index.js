$(document).ready(function() {
  $('.navigation').hide();
  const $portrait = $('.headshot').detach();
  $('#main').prepend($portrait);
  $('.photo-column div').on('click', function() {
    var $img = $(this).find('img');
    var $imgUrl = $img.attr('src');
    $('.big-photo').show();
    $('.enlarged').attr('src', $imgUrl);
    $('.exit').on('click', function() {
      $('.big-photo').hide();
    });
  });

  $('.grid-box.graphic').on('click', function() {
    var $imgUrl = $(this).css('background-image').replace('url("', '').replace('")', '');
    console.log($imgUrl);
    $('.big-photo').show();
    $('.enlarged').attr('src', $imgUrl);
    $('.exit').on('click', function() {
      $('.big-photo').hide();
    });
  });

  $('.navcontrol').on('click', function() {
    if ($('.navigation').is(':visible')) {
      $('.navigation').slideToggle();
      $('.navcontrol').text('☰');
    } else {
      $('.navigation').slideToggle();
      $('.navcontrol').text('×');
    }
  });

  var x = window.matchMedia("(max-width: 700px)");
  checkIfMobile(x) // Call listener function at run time
  x.addListener(checkIfMobile) // Attach listener function on state changes

  function checkIfMobile(x) {
    if (x.matches) { // if mobile
      $('#photography .subheader').text('Click for full screen');
    }
  }


});
