const images = [
    "granat.jpg",
    "1402862895_banana2.jpg",
    "https://placekitten.com/200/287"
]

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

setInterval(nextSlide, 2000);

document.querySelector('.carousel-prev').addEventListener('click', prevtSlide);
document.querySelector('.carousel-next').addEventListener('click', nextSlide);
