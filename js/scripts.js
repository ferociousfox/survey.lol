//var fullName = function(fnameInput, lnameInput){
  //return fnameInput + " " + lnameInput
//}


//front end starts here
$(document).ready(function() {
  $("#addressbook").submit(function(event) {
    var fnameInput = $("input#fname").val();
    var lnameInput = $("input#lname").val();
    var fullname = fnameInput + " " + lnameInput;
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
    $(".fullname").text(fullname);


    $("#contact-card").show();

    event.preventDefault();
  });
});
