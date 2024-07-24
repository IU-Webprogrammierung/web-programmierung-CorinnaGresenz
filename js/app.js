import $ from "jquery";

$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#submitButton").on("click", function () {
    submitContactForm();
  });

  function submitContactForm() {
    alert("Das Kontaktformular wurde abgeschickt!");
  }
});
