let count = 0
let counter = document.querySelector("#counter")
let increment = document.querySelector("#buttons .btn1")
let decrement = document.querySelector("#buttons .btn2")

counter.innerHTML = count

increment.addEventListener("click", function() {
    count++
    counter.innerHTML = count
})
decrement.addEventListener("click", function() {
    count--
    counter.innerHTML = count
})