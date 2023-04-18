// generates photographers cards in home page
function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    const url = `photographer.html?id=${id}`;

    // generates user card DOM element
    function getUserCardDOM() {
        const redirect = document.createElement('a');
        redirect.setAttribute('href', url);
        redirect.setAttribute('aria-label', name);
        const article = document.createElement('article');
        const container_img = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Image_profil");
        const h2 = document.createElement('h2');

        const location = document.createElement('h3');
        const sentence = document.createElement('h3');
        const dayprice = document.createElement('h3');

        container_img.classList.add('container_img');
        location.classList.add('location');
        sentence.classList.add('tagline');
        dayprice.classList.add('dayprice');

        location.textContent = city + ', ' + country;
        sentence.textContent = tagline;
        dayprice.textContent = price + '€/jour';
        h2.textContent = name;

        location.setAttribute('tabindex', 0);
        sentence.setAttribute('tabindex', 0);
        dayprice.setAttribute('tabindex', 0);

        redirect.appendChild(article);
        article.appendChild(container_img);
        container_img.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(sentence);
        article.appendChild(dayprice);
        return (redirect);
    }
    return { name, picture, getUserCardDOM }
}