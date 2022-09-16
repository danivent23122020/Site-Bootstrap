// carousel Lightbox -> gallerie
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// carousel  ban2 -> txt
$(".carousel").carousel({
    interval: 2500,
    pause: "null",
});
