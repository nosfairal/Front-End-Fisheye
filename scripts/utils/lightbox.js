function displayLightbox(num = 0) {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "block";
    gotoslide(num);
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}


let compteur = 0
let medias, slides, slideWidth
medias = document.querySelector(".lightbox_container")

window.onload = () => {
    const lightbox = document.querySelector(".lightbox")
    slides = Array.from(medias.children)

    slideWidth = medias.getBoundingClientRect().width

    let next = document.querySelector(".arrow_right")
    let prev = document.querySelector(".arrow_left")

    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)

    let decal = -slideWidth * compteur

    let photos = document.querySelectorAll(".media_lightbox")

    photos.forEach(element => {
        element.style.transform = `translateX(${decal}px)`;
    });
}

function slideNext() {
    let photos = document.querySelectorAll(".media_lightbox")
    compteur++
    if (compteur == photos.length) {
        compteur = 0
    }
    slideWidth = medias.getBoundingClientRect().width
    let decal = -slideWidth * compteur

    photos.forEach(element => {
        element.style.transform = `translateX(${decal}px)`;
    });

}

function slidePrev() {
    let photos = document.querySelectorAll(".media_lightbox")

    compteur--
    if (compteur < 0) {
        compteur = photos.length - 1
    }
    slideWidth = medias.getBoundingClientRect().width
    let decal = -slideWidth * compteur

    photos.forEach(element => {
        element.style.transform = `translateX(${decal}px)`;
    });
}

function gotoslide(num) {
    let photos = document.querySelectorAll(".media_lightbox")

    compteur = num
    if (compteur < 0) {
        compteur = photos.length - 1
    }
    if (compteur >= photos.length) {
        compteur = 0
    }
    slideWidth = medias.getBoundingClientRect().width
    let decal = -slideWidth * compteur

    photos.forEach(element => {
        element.style.transform = `translateX(${decal}px)`;
    });
}