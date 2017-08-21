function Places(location, landmark, time, notes) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedLandmark = $("input#landmark").val();
    var inputtedTime = $("input#date").val();
    var inputtedNotes = $("textarea#notes").val();

    var myPlace = new Places(inputtedLocation, inputtedLandmark, inputtedTime, inputtedNotes);
    alert(myPlace.location);

    $("ul#results").append("<li><span class='place'>" + myPlace.location + "</span></li>");
    $(".place").last().click(function(){
      $("#showDetails").show();
      $("#showDetails h2").text(myPlace.location);
      $(".landmark").text(myPlace.landmark);
      $(".date").text(myPlace.time);
      $(".notes").text(myPlace.notes);
    });
    $("input#location").val("");
    $("input#landmark").val("");
    $("input#date").val("");
    $("textarea#notes").val("");

  });
});
