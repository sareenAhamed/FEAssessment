// Animation
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".section-3, .section-4, .content-box, .image-box, .content-layer");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });
});
