const h1 = document.querySelector('p');
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text =h1.innerText; 

let iteration = 0;

function randomText () {
    const str = text.split('').map(function (char, idx) {
        if (idx < iteration) {
            return char;
        }
        return characters.split('')[Math.floor(Math.random() * 52)];
    }).join('');
    h1.innerText = str;
    iteration += 0.25;
}


h1.addEventListener('mouseenter', function () {
    iteration = 0;
    setInterval(() => {
        randomText()
    }, 50);
})
