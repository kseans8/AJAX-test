$('#next-question').on('click', function(event) {
  console.log("shit");

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
    $('#answer').text(newQuestion.answer);
    $("button#next-question").attr('disabled', 'disabled');
  });
});
