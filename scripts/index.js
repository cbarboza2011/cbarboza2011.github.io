$(document).ready(function() {
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
    var $imgUrl = $(this).css('background-image').replace('url("file:///C:/Users/Cristiana/Desktop/cbarboza2011.github.io/', '').replace('")', '');
    console.log($imgUrl);
    $('.big-photo').show();
    $('.enlarged').attr('src', $imgUrl);
    $('.exit').on('click', function() {
      $('.big-photo').hide();
    });
  });
});
