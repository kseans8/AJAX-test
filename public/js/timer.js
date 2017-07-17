function calculateTotalTime() {
  var startTime = $('#initialTime').text();
  var endTime = performance.now();

  $("#initialTime").text("it took you " + ((endTime - startTime)/1000).toFixed(2) + " seconds to finish the quiz!");
  $("#initialTime").removeAttr("hidden");
}
