// TODO: Do this in vanilla JavaScript

(function($) {
  var $allTags = $('*'),
    $btnDebug = $('.js-debug'),
    $btnNormalize = $('.js-normalize'),
    hasNormalize = false;

    function toggleNormalize() {
    var $hasNormalizeEl = $('#has-normalize');

    if (hasNormalize && $hasNormalizeEl) {
      if ($hasNormalizeEl) {
        hasNormalize = false;
        $hasNormalizeEl.remove();
        $btnNormalize.find('.fa').removeClass('fa-minus').addClass('fa-plus');
      }
    } else {
      hasNormalize = true;
      $btnNormalize.find('.fa').removeClass('fa-plus').addClass('fa-minus');
      $('head').append('<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.min.css" id="has-normalize">');
    }
  }
    
  $btnNormalize.on('click', toggleNormalize);

  $btnDebug.on('click', function() {
    $allTags.toggleClass('debug');
  });
})(jQuery);
