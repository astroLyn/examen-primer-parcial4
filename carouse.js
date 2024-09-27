const carouselImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
    carouselImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselImages.length;
    carouselImages[currentIndex].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
    carouselImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    carouselImages[currentIndex].classList.add('active');
});
