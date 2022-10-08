// *** scroll to top ***
//display btn
window.addEventListener("scroll", function () {
    let scroll = this.document.querySelector(".scrolltop");
    scroll.classList.toggle("active", window.scrollY > 200);
});

// scroll to top
const btn = document.querySelector(".scrolltop");
btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// *** animation resize navbar ***
// condition animation
window.addEventListener("scroll", function () {
    let scroll = this.document.querySelector(".navbar");
    scroll.classList.toggle("resize", window.scrollY > 30);
});
