
let grow = 0;
let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner');
btn.addEventListener('click', function() {

    btn.style.pointerEvents = 'none'
    let time = 50 + Math.floor(Math.random() * 50);
    let download = setInterval(function() {
        grow++;
        h2.innerHTML = `${grow}%`
        inner.style.width = `${grow}%`;
    },time);
    setTimeout(() => {
        clearInterval(download);
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
        console.log('Downloaded in ' + (time / 10) + ' seconds');
    }, time * 100);
})