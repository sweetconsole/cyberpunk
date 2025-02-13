
const background = document.getElementById("hero_background");
const header = document.getElementById("header")

let backgroundId = 1

window.onload = function() {
    setInterval(change_background, 30*1000)
}

function change_background() {
    if (backgroundId === 3) {
        backgroundId = 1

    } else {
        backgroundId += 1
    }

    if (backgroundId === 1) {
        background.classList.remove(`hero_background_3`)
    } else {
        background.classList.remove(`hero_background_${backgroundId-1}`)
    }

    background.classList.add(`hero_background_${backgroundId}`)
}

window.onscroll = function (event) {
    const verticalScroll = window.scrollY;

    if (verticalScroll === 0) {
        header.classList = "header"
    } else {
        header.classList = "header header__background"
    }

    console.log(verticalScroll);
}

