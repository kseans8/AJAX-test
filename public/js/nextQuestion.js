$(document).ready(function() {
  $("input:radio").change(function () {
    console.log('asdf');
    $("button#next-question").removeAttr("disabled");
  });
});
