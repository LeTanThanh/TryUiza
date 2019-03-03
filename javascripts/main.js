$(document).ready(function() {
  $('.js-btn-run').on('click', function() {
    var code = $('#js-editor').val();
    var ajaxURL = "https://ltt-try-uiza-ruby.herokuapp.com/api/v1/try_uiza"

    $.ajax({
      url: ajaxURL,
      type: 'GET',
      dataType: 'JSON',
      data: {
        code: code
      },
      success: function(response) {
        $('#js-output').val(response.result);
      }
    });
  });
});
