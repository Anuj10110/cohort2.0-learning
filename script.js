let m = document.querySelector("main")
let curs = document.querySelector("main .cursor")

m.addEventListener("mousemove", function(val) {
    curs.style.left = val.x + "px"
    curs.style.top = val.y + "px"
})