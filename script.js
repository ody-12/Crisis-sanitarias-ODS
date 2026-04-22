const slides = document.querySelectorAll(".slides img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide(i){
    slides.forEach(img => img.classList.remove("active"));
    slides[i].classList.add("active");
}

next.onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

prev.onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
};

setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 4000);