$(document).ready(function() {
  $('#next-question').on('click', function(event) {
    event.preventDefault();

    var request = $.ajax({
      method: 'GET',
      url: '/new-question.json'
    });

    request.done(function(newQuestion) {
      $('#question').text(newQuestion.question);
      $('#answers').empty();
      for (var ii = 0; ii < newQuestion.options.length; ii++) {
        var answerValue = newQuestion.options[ii];
        $('#answers').append('<input type="radio" name="option" value=' + answerValue + '> ' + answerValue + '<br>');
      }
      $('#answers').append('<button id="next-question" disabled>Next Question</button>');
      $('#answer').text(newQuestion.answer);
    });
  });
});
