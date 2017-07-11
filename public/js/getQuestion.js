$('#new-question').on('click', (event) => {
  event.preventDefault();

  let request = $.ajax({
    method: 'GET',
    url: '/new-question.json'
  });

  request.done((newQuestion) => {
    $('#question').text(newQuestion['question']);

    $('#answers li').each(function(ii) {
      $(this).text(newQuestion['options'][ii]);
    });
  });
});
