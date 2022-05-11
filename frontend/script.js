
const menuButtonComponent = function (){
    return`
    <button id="menu-btn"></button>
    `
}

const beerSectionComponent = function (title, sub, text, id) {
    return `
        <section id="${id}">
            <h1 class="beerName">${title}</h1>
            <h2 class="beerCompany">${sub}</h2>
            <h3 class="beerType">${text}</h3>
        </section>
    `
}

const beerAnchorComponent = function (title, id) {
    return `
        <a href="#${id}">${title}</a>
    `
}

const beerNavComponent = function (inner) {
    return`
        <nav>${inner}</nav>
    `
}

const menuButtonClickEvent = function (event) {
    event.currentTarget.closest("#root").classList.toggle("menu-opened");
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("nav-clicked");

}

const loadEvent = function (){
/*  console.log(typeof beerSectionComponent)

    (function () {
        console.log("blaaaaah")
    })();  IIFE - Immediately Invoked Function Expression*/ 

    const rootElement = document.getElementById("root");
    //console.log(rootElement.parentElement) adott elem parentjéhez férünk hozzá

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent()); //ez nem callback, azt akarjuk, h lefusson rögtön

    const menuButtonElement = document.getElementById("menu-btn");

    menuButtonElement.addEventListener("click", menuButtonClickEvent);

    let beerSections = ""; //csinálunk egy sections minden sörtípusnak
    for (const beer of beers.cards) {
            beerSections += beerSectionComponent(beer.title, beer.sub, beer.text)
        }
    console.log(beerSections)
    rootElement.insertAdjacentHTML("beforeend", beerSections)

    let beerAnchors =""; //megcsináljuk a navbart a linkekkel (minden sör név egy link)
    for (const beer of beers.cards) {
        beerAnchors += beerAnchorComponent(beer.title)
    }
    rootElement.insertAdjacentHTML("beforeend", beerNavComponent(beerAnchors))

}

window.addEventListener("load", loadEvent)  //callback: csak akkor fut le, amikor az oldal betöltődik

