$('#next-question').on('click', function(event) {
  var question_count = $('#question_count').text();
  var correct_count = $('#correct_count').text();
  var incorrect_count = $('#incorrect_count').text();
  var isCorrect = false;

  $('input.answerButtons').each(function() {
    if (this.checked === true && this.value === $('#answer').text()) {
      isCorrect = true;
    }
  });

  $('#question_count').text(parseInt(question_count) + 1);

  if (isCorrect) {
    $('#correct_count').text(parseInt(correct_count) + 1);
  } else {
    $('#incorrect_count').text(parseInt(incorrect_count) + 1);
  }

  var request = $.ajax({
    method: 'GET',
    url: '/new-question.json'
  });

  request.done(function(newQuestion) {
    $('#question').text(newQuestion.question);
    $('#answers').empty();
    for (var ii = 0; ii < newQuestion.options.length; ii++) {
      var answerValue = newQuestion.options[ii];
      $('#answers').append('<input type="radio" name="answerButtons" class="answerButtons" value=' + answerValue + ' />' + answerValue + '<br>');
    }
    $('#answer').text(newQuestion.answer);
    $("button#next-question").attr('disabled', 'disabled');
  });
});
