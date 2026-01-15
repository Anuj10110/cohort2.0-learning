let stories = [
    {
        dp : "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
        story : "https://i.pinimg.com/736x/96/61/ea/9661eaa55b90fc899b0f642054e00dd2.jpg",
    },
    {
        dp : "https://i.pinimg.com/736x/72/1d/95/721d957dcbc1ea47675146260c3b41d7.jpg",
        story : "https://i.pinimg.com/736x/dc/69/35/dc6935b674e4777f54cd6f4fa83aa840.jpg",
    },
    {
        dp : "https://i.pinimg.com/736x/e6/d4/79/e6d4799474ae8fca2f13c16a200e96d1.jpg",
        story : "https://i.pinimg.com/736x/88/b0/27/88b02718e21047d8c397a8d97be6055d.jpg",
    },
    {
        dp : "https://i.pinimg.com/736x/f2/42/97/f242977db5d5e96972444d9013b37bea.jpg",
        story : "https://i.pinimg.com/736x/87/b1/7f/87b17fb4f6d602cf2606fdf482e41c2b.jpg",
    },
    {
        dp : "https://i.pinimg.com/736x/eb/bc/9e/ebbc9ef623a94299c760105ae27979cc.jpg",
        story : "https://i.pinimg.com/1200x/67/ae/72/67ae7245af90c40886c040b27e18a95d.jpg",
    }
]
clutter = ""
let profile = document.querySelector("main #full-screen #story")
stories.forEach(function(val, idx) {
    clutter += `<div class="card">
                    <img src="${val.dp}" alt="" id="${idx}">
                </div>`
})
profile.innerHTML = clutter
profile.addEventListener("click", function(details) {
    document.querySelector("main #full-screen #display-story").style.display = "block"
    document.querySelector("main #full-screen #display-story").style.backgroundImage = `url(${stories[details.target.id].story})`

    setTimeout(function() {
        document.querySelector("main #full-screen #display-story").style.display = "none"
    },2500)
})