(function () {
    const slides = document.querySelectorAll(".hero-slider .slide");
    if (!slides.length) return;

    let current = 0;

    function showSlide(index) {
        slides[current].classList.remove("active");
        current = index;
        slides[current].classList.add("active");
    }

    setInterval(() => {
        const next = (current + 1) % slides.length;
        showSlide(next);
    }, 3500);
})();