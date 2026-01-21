const allBtn = document.querySelectorAll('button');

allBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (btn.innerHTML === 'Add Friend') {
            btn.innerHTML = 'Remove Friend';
            btn.style.backgroundColor = '#ff4d4d';
            alert('Friend Added Successfully');
        } else {
            btn.innerHTML = 'Add Friend';
            btn.style.backgroundColor = '#4CAF50';
            alert('Friend Removed Successfully');
        }
    })
})