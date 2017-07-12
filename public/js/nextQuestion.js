$('#answers').on('click', 'input', function(event) {
  console.log('asdf');
  $("button#next-question").removeAttr("disabled");
});
