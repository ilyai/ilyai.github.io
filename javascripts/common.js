(function($) {
  function revealContact($el) {
    var emailCodes = $el.data('mailto').split(",");
    var href = "mailto:" + $.map(emailCodes, function(v) {
      return String.fromCharCode(v);
    }).join("");
    $el.attr('href', href).removeAttr('data-mailto');
  }
  $(function() {
    revealContact($('p.copyright a'));
  });
})(jQuery);
