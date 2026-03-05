const functionBlock = document.querySelector('.functions');
let flag = false;

document.addEventListener('contextmenu', function (details) {
    details.preventDefault();
    functionBlock.style.top = details.y + 'px';
    functionBlock.style.left = details.x + 'px';
    if (!flag) {
        flag = true;
        functionBlock.style.display = "block";
    }
})

document.addEventListener('click', function() {
    flag = false;
    functionBlock.style.display = "none";
})