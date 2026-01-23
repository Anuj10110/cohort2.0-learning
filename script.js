addEventListener('mousemove', function(dets) {
    document.body.style.setProperty('--x', dets.x + 'px')
    document.body.style.setProperty('--y', dets.y + 'px')
})