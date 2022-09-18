// carousel  ban2 -> txt
$(".carousel").carousel({
    interval: 2500,
    pause: "null",
});
// carousel interval
const myCarousel = document.querySelector("#carouselExampleControls");
const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1500,
    wrap: false,
});
