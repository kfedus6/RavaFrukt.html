const images = [
    "granat-2-копия-600x430.jpg",
    "25-prost-banana-preview.jpg",
    "peach.jpg.jpg"
];

let currentSlide = 0;

function showSlide() {
    const carouselImage = document.querySelector('.products-carousel img');
    carouselImage.src =images[currentSlide];
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= images.length) currentSlide = 0;
    showSlide();
}
function prevtSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = images.length - 1;
    showSlide();
}
showSlide();
setInterval(nextSlide, 2000);

document.querySelector('.carousel-prev').addEventListener('click', prevtSlide);
document.querySelector('.carousel-next').addEventListener('click', nextSlide);
