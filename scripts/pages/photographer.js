/*global mediasFactory, displayLightbox*/

//Js for photographer.html
let params = (new URL(document.location)).searchParams;
let idUrl = params.get('id');

async function getPhotographers() {
    const response = await fetch('data/photographers.json')
    const fichierjson = await response.json();
    return fichierjson.photographers;
}
async function getMedia() {
    const response = await fetch('data/photographers.json')
    const fichierjson = await response.json();
    return fichierjson.media;
}

async function init() {
    const photographers = await getPhotographers();
    // Get photographer by id's
    const profil = photographers.find((photo) =>
        photo.id == idUrl
    );

    // if not return to index
    if (profil == undefined) {
        window.location.href = "/"
    }
    const photographerInfo = document.querySelector(".photographer_profile");
    const photographeHeader = document.createElement("article");
    const picture = `assets/photographers/${profil.portrait}`;
    const img = document.createElement('img');
    img.setAttribute("src", picture);
    img.classList.add("profilePicture");
    let info = `<h1 class ="photographer_name">${profil.name}</h1>
            <p class="photographer_location">${profil.city}, ${profil.country}</p>
            <p class="photographer_devise">${profil.tagline}</p>`;
    photographerInfo.prepend(photographeHeader);
    photographeHeader.innerHTML = info;
    photographerInfo.appendChild(img);

    const mediaSource = await getMedia();
    // get medias by url id's
    let medias = mediaSource.filter((m) =>
        m.photographerId == idUrl
    )

    // Sort medias by alfabetical order
    medias = medias.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });

    //Display media
    medias.forEach((medias) => {
        const photoCard = mediasFactory(medias, profil.name);
        const MediasCardDOM = photoCard.getMediasDOM();
        const MediasCardLightbox = photoCard.getMediasLightbox();
        document.querySelector(".pictures_medias").appendChild(MediasCardDOM);
        document.querySelector(".lightbox_container").appendChild(MediasCardLightbox);
    });

    //Opening of lightbox
    let clickLightbox = document.querySelectorAll(".photos, .videos")
    for (let i = 0; i < clickLightbox.length; i++) {
        clickLightbox[i].addEventListener("click", () => {
            displayLightbox(i)
        })
    }


    //calculate likes
    let totalLikes = 0
    medias.forEach((media) => {
        totalLikes += media.likes
    });

    //Display elements into likebox
    const photographerLikesBox = document.querySelector(".box");
    const photographerLikes = document.createElement("div");
    let infoLikes = `<div class="boxInfos"> 
  <div class=""><span class="totalLikes">${totalLikes}</span> <img src="assets/icons/heart-solid.svg" width="18px" height="18px"></div>
  <div class="boxPrice">${profil.price}€ / jour</div></div>`;
    photographerLikesBox.prepend(photographerLikes);
    photographerLikes.innerHTML = infoLikes;

}

init();