(function($) {
  var $btnDebug = $('.btn-debug'),
    $allTags = $('*');

  $btnDebug.on('click', function(e) {
    e.preventDefault();

    $allTags.toggleClass('debug');
  });
})(jQuery);
