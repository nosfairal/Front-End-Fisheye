function mediasFactory(data, name) {
    const { image, video, title, likes } = data;

    const coeur = `assets/icons/heart.svg`;

    let medias;
    if (image != undefined) {
        medias = `assets/images/${name.split(" ")[0]}/${image}`;
    }
    else {
        medias = `assets/images/${name.split(" ")[0]}/${video}`;
    }

    function getMediasDOM() {
        const article = document.createElement('article');
        if (image != undefined) {
            const image = document.createElement('img');
            image.setAttribute("src", medias);
            image.className = 'photos';
            article.appendChild(image);
        }
        else {
            const video = document.createElement('video');
            const source = document.createElement('source');
            source.setAttribute("src", medias);
            source.setAttribute("type", "video/mp4");
            video.setAttribute("controls", "");
            video.className = 'videos';
            video.appendChild(source);
            article.appendChild(video);
        }
        const legende = document.createElement('div');
        const titre = document.createElement('span');
        titre.classList.add('title');
        titre.textContent = title;
        const nbLikes = document.createElement('span');
        nbLikes.classList.add('likes');
        nbLikes.textContent = likes;
        const img = document.createElement('img');
        img.setAttribute("src", coeur);
        img.className = 'coeur';
        img.addEventListener("click", addLike);
        img.addEventListener("click", photoLike);
        legende.classList.add("media_infos");
        legende.appendChild(titre);
        legende.appendChild(nbLikes);
        legende.appendChild(img);
        article.appendChild(legende);
        return (article);
    }

    function getMediasLightbox() {
        const media = document.createElement('div');
        media.className = 'media_lightbox';
        if (image != undefined) {
            const image = document.createElement('img');
            image.setAttribute("src", medias);
            image.className = 'photos_lightbox';
            media.appendChild(image);
        }
        else {
            const video = document.createElement('video');
            const source = document.createElement('source');
            source.setAttribute("src", medias);
            video.className = 'photos_lightbox';
            video.appendChild(source);
            media.appendChild(video);
        }
        const h2 = document.createElement('div');
        h2.textContent = `${title}`;
        h2.classList.add("media_infos");
        media.appendChild(h2);
        return (media);
    }

    return { getMediasDOM, getMediasLightbox, }
}

function addLike() {
    let like = document.querySelector(".totalLikes").textContent;
    like = parseInt(like) + 1;
    document.querySelector(".totalLikes").textContent = like;
}

function photoLike(e) {
    let addHeart = e.target.previousSibling.textContent;
    addHeart = parseInt(addHeart) + 1;
    e.target.previousSibling.textContent = addHeart;
}