function photographerFactory(data) {
    const { name, portrait, city, country, id, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const link = document.createElement('a');
        link.setAttribute("href", "photographer.html?id=" + id)
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = `${city}, ${country}`;
        const slogan = document.createElement('p');
        slogan.textContent = tagline;
        slogan.classList.add("slogan");
        const cost = document.createElement('p');
        cost.textContent = price + " €/jour";
        cost.classList.add("prix");
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(link);
        article.appendChild(h3);
        article.appendChild(slogan);
        article.appendChild(cost);
        return (article);
    }
    return { name, picture, getUserCardDOM }

}
