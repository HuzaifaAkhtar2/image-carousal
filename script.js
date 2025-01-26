const img = document.querySelectorAll('.images')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const dot = document.querySelectorAll('.dot')

var counter = 0

next.addEventListener("click", nextScroll)
prev.addEventListener("click", prevScroll)

function nextScroll() {
    img[counter].style.animation = "next1 0.5s ease-in forwards"
    if (counter >= img.length - 1) {
        counter = 0
    } else {
        counter++
    }
    img[counter].style.animation = "next2 0.5s ease-in forwards"
    indicators()
}

function prevScroll() {
    img[counter].style.animation = "prev1 0.5s ease-in forwards"
    if (counter == 0) {
        counter = img.length - 1
    } else {
        counter--
    }
    img[counter].style.animation = "prev2 0.5s ease-in forwards"
    indicators()
}

function auto() {
    interval = setInterval(timer, 3000)
    function timer() {
        nextScroll()
        indicators()
    }
}
auto()

const container = document.querySelector('.slide-container')
container.addEventListener("mouseover", function () {
    clearInterval(interval)
})

container.addEventListener("mouseout", auto)

function indicators() {
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove("active");
    }
    if (counter >= 0 && counter < dot.length) {
        dot[counter].classList.add("active");
    }
}

function switchImage(currentImage) {
    currentImage.classList.add("active")
    var imageId = currentImage.getAttribute("attr")
    if (imageId > counter) {
        img[counter].style.animation = "next1 0.5s ease-in forwards"
        counter = imageId
        img[counter].style.animation = "next2 0.5s ease-in forwards"
    } else if (imageId == counter) {
        return
    } else {
        img[counter].style.animation = "prev1 0.5s ease-in forwards"
        counter = imageId
        img[counter].style.animation = "prev2 0.5s ease-in forwards"
    }
    indicators()
}