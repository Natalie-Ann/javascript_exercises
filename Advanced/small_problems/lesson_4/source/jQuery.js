$(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        let $input = $('#key').val();
        $(document).off('keypress').on('keypress', function(e) {
        if (e.key !== $input) {
            return;
          } else {
              let accordion = $('#accordion'); //find accordion element
              accordion.slideToggle();
          }
        });
    });
});
  