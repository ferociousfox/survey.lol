$(document).ready(function() {
  $("#addressbook").submit(function(event) {
    var fnameInput = $("input#fname").val();
    var lnameInput = $("input#lname").val();
    var streetaddrInput = $("input#street-addr").val();
    var cityInput = $("input#city").val();
    var stateSelect = $("select#state").val();
    var zipInput = $("input#zip").val();


    $(".firstname").text(fnameInput);
    $(".lastname").text(lnameInput);
    $(".street").text(streetaddrInput);
    $(".city").text(cityInput);
    $(".state").text(stateSelect);
    $(".zip").text(zipInput);


    $("#contact-card").show();

    event.preventDefault();
  });
});
