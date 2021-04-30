const getPageTemplate = pageTitle => {
    const content = document.createElement("div");
    content.id = "content";

    const title = document.createElement("div");
    title.classList.add("content-title");
    title.textContent = pageTitle;
    content.appendChild(title);

    return content;
}

const clearNavColor = () => {
    const tabs = document.querySelectorAll(".crumb a");
    for (let tab of tabs) {
        tab.classList.remove("yellow");
    }
}

const loadAbout = () => {
    clearNavColor();
    document.querySelector("#tab-about a").classList.add("yellow");
    const content = getPageTemplate("About Us");

    const contentAbout = document.createElement("div");
    contentAbout.id = "content-about";

    const ramenImg = document.createElement("img");
    ramenImg.src = "../img/ramen.jpeg";
    contentAbout.appendChild(ramenImg);

    const aboutText1 = document.createElement("p");
    aboutText1.textContent = "We make our own authentic noodles, using techniques " +
        "straight from Japan. Our dream is to create a laid-back environment that " +
        "satisfies everyone's ramen cravings.";
    contentAbout.appendChild(aboutText1);

    const linebreak = document.createElement("br");
    contentAbout.appendChild(linebreak);

    const aboutText2 = document.createElement("p");
    aboutText2.textContent = "Using only fresh ingredients, we make each bowl " +
        "with love. Come indulge in the flavors of Japan, right in the heart " +
        "of downtown New York!";
    contentAbout.appendChild(aboutText2);

    content.appendChild(contentAbout);
    document.querySelector("#container").appendChild(content);
}

const loadMenu = () => {
    clearNavColor();
    document.querySelector("#tab-menu a").classList.add("yellow");
    const content = getPageTemplate("Menu");

    const contentMenu = document.createElement("div");
    contentMenu.id = "content-menu";

    content.appendChild(contentMenu);
    document.querySelector("#container").appendChild(content);
}

const loadContact = () => {
    clearNavColor();
    document.querySelector("#tab-contact a").classList.add("yellow");
    const content = getPageTemplate("Contact");

    const contentContact = document.createElement("div");
    contentContact.id = "content-contact";

    content.appendChild(contentContact);
    document.querySelector("#container").appendChild(content);
}

export {
    loadAbout,
    loadMenu,
    loadContact
}