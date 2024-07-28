import $ from "jquery";

$(document).ready(function () {
  console.log("jQuery is ready!");

  // Initialize form logic
  initializeFormLogic();

  // Initialize image gallery logic
  initializeImageGalleryLogic();
});

function initializeFormLogic() {
  $("#submitButton").on("click", function () {
    submitContactForm();
  });

  function submitContactForm() {
    alert("Das Kontaktformular wurde abgeschickt!");
  }
}

function initializeImageGalleryLogic() {
  const modal = $("#myModal");
  const slides = $(".slide");
  const images = $(".image-gallery .figure .image");
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

  $(".next").on("click", function () {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  });

  $(".prev").on("click", function () {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  });

  function showSlide(index) {
    slides.each(function () {
      $(this).removeClass("active");
    });
    slideIndex = index;
    $(slides[slideIndex]).addClass("active");
  }
}
