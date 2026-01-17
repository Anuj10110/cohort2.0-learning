const img = document.querySelector('img');
const loveIcon = document.querySelector('.ri-heart-3-fill');

img.addEventListener('dblclick', function () {
    loveIcon.style.opacity = 1;
    loveIcon.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';

    setTimeout(() => {
        loveIcon.style.transform = 'translate(-50%, -300%) scale(1) rotate(360deg)';
    }, 700);
    setTimeout(() => {
        loveIcon.style.opacity = 0;
    }, 1000);
    setTimeout(() => {
        loveIcon.style.transform = 'translate(-50%, -50%) scale(0) rotate(-60deg)';
    }, 1200);
    
})