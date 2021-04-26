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

    document.querySelector("#container").appendChild(content);
}

const loadMenu = () => {
    clearNavColor();
    document.querySelector("#tab-menu a").classList.add("yellow");

    const content = getPageTemplate("Menu");

    document.querySelector("#container").appendChild(content);
}

const loadContact = () => {
    clearNavColor();
    document.querySelector("#tab-contact a").classList.add("yellow");

    const content = getPageTemplate("Contact");

    document.querySelector("#container").appendChild(content);
}

export {
    loadAbout,
    loadMenu,
    loadContact
}