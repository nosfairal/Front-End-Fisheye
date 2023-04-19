const options = document.querySelectorAll(".option");
const dropdownBtn = document.querySelector(".dropdown-menu__button");
const dropdown = document.querySelector(".selector");
let medias;

// Listen for the custom event
document.addEventListener("hisMediaAvailable", (e) => {
    medias = e.detail.hisMedia;
});

/**
 * changeFilter(medias)
 * @param {Object} medias data of medias of the photographer  
 * change filter choice
 **/
function changeFilter(medias) {
    removeAllCardsAllSlides();

    const checkedFilter = document.querySelector(".checked").id;
    switch (checkedFilter) {
        case "popularity":
            organizeByLikes(medias);
            displayDataMedia(medias);
            createSlider(medias);
            break;
        case "date":
            organizeByDate(medias);
            displayDataMedia(medias);
            createSlider(medias);
            break;
        case "title":
            organizeByTitles(medias);
            displayDataMedia(medias);
            createSlider(medias);
            break;
        default:
            checkedFilter
            break;
    }
}

// if dropdownBtn has been clicked then show expension of dropdown
dropdownBtn.addEventListener("click", () => {
    dropdownBtn.setAttribute("aria-haspopup", false);
    dropdownBtn.setAttribute("aria-expanded", true);
    dropdown.style.display = "flex";
    dropdownBtn.style.display = "none";
})


options.forEach(option => {
    // Si cliqué, masquez le menu déroulant et affichez le bouton
    option.addEventListener("click", handleOptionClick);

    // Si la touche Entrée a été enfoncée, masquez le menu déroulant et affichez le bouton
    option.addEventListener("keydown", (e) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            handleOptionClick.call(option);
        }
    });

    function handleOptionClick() {
        dropdownBtn.innerHTML = this.innerHTML;
        dropdownBtn.setAttribute("aria-haspopup", true);
        dropdownBtn.setAttribute("aria-expanded", false);
        dropdown.style.display = "none";
        dropdownBtn.style.display = "flex";

        // Supprimer la vérification précédente
        options.forEach(opt => {
            opt.classList.remove("checked");
            opt.setAttribute("aria-selected", false);
        });
        // Ajouter une vérification
        this.classList.add("checked");
        this.parentElement.setAttribute("aria-activedescendant", this.id);
        this.setAttribute("aria-selected", "true");
        dropdownBtn.setAttribute("aria-activedescendant", this.innerText);
        dropdownBtn.setAttribute("aria-labelledby", this.innerText);
        changeFilter(medias);
    }

});

/**
 * removeAllCardsAllSlides():
 * remove all card of slides
 **/
function removeAllCardsAllSlides() {
    const cards = document.querySelectorAll(".card");
    let slides = document.querySelectorAll(".slide");

    cards.forEach(card => {
        card.remove();
    });
    slides.forEach(slide => {
        slide.remove();
    });
}

/**
 * organizeByLikes(media)
 * @param {Object} media
 * Organize media By most Likes
 **/
const organizeByLikes = (media) => {
    // if function of comparaison return somthing > 0 then sort a after b
    media.sort((a, b) => b.likes - a.likes);
}

/**
 * organizeByTitles(media)
 * @param {Object} media
 * Organize by alphabetic order
 **/
const organizeByTitles = (media) => {
    media.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        }
        return 0;
    });
}

/**
 * organizeByDate(media)
 * @param {Object} media
 * Organize By most recent date of post
 **/
const organizeByDate = (media) => {
    media.sort((a, b) => new Date(b.date) - new Date(a.date));
}