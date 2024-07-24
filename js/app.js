import $ from "jquery";

$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#submitButton").on("click", function () {
    submitContactForm();
  });

  function submitContactForm() {
    alert("Das Kontaktformular wurde abgeschickt!");
  }

  let modal = $("#myModal");
  let slides = $(".slide");
  let images = $(".image-gallery .image");
  let slideIndex = 0;

  images.each(function (index) {
    $(this).on("click", function () {
      modal.css("display", "flex");
      showSlide(index);
    });
  });

  $(".close").on("click", function () {
    modal.css("display", "none");
  });

  function showSlide(index) {
    slides.each(function () {
      $(this).removeClass("active");
    });
    slideIndex = index;
    $(slides[slideIndex]).addClass("active");
  }

  $(".next").on("click", function () {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  });

  $(".prev").on("click", function () {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  });
});
