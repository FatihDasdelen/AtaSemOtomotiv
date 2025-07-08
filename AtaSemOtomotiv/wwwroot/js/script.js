// Slider için görseller arası geçiş
let index = 0;
const images = ['images/car1.jpg', 'images/car2.jpg', 'images/car3.jpg'];

setInterval(() => {
    const img = document.querySelector('.gallery img');
    img.src = images[index];
    index = (index + 1) % images.length;
}, 3000);