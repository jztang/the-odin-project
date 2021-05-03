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

const createMenuItem = (name, description, price) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("div");
    itemName.classList.add("item-name");
    itemName.textContent = name;
    menuItem.appendChild(itemName);

    const itemDesc = document.createElement("div");
    itemDesc.classList.add("item-desc");
    itemDesc.textContent = description;
    menuItem.appendChild(itemDesc);

    const itemPrice = document.createElement("div");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = price;
    menuItem.appendChild(itemPrice);

    return menuItem;
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

    const ramenTitle = document.createElement("div");
    ramenTitle.classList.add("menu-title");
    ramenTitle.textContent = "- RAMEN -";
    contentMenu.appendChild(ramenTitle);

    const ramenMenu = document.createElement("div");
    ramenMenu.classList.add("sub-menu");
    ramenMenu.appendChild(createMenuItem("TONKOTSU RAMEN", "Pork bone broth, " + 
        "shio tare, fatty pork belly, marinated egg, pickled shiitake, black " + 
        "garlic oil, scallion", "14"));
    ramenMenu.appendChild(createMenuItem("SPICY MISO RAMEN", "Pork bone broth, " + 
        "chili-miso tare, crispy pork belly, marinated bean sprouts, menma, " + 
        "chili oil, scallion", "15"));
    ramenMenu.appendChild(createMenuItem("SHIO RAMEN", "Chicken-dashi broth, " + 
        "shio tare, yuzu grilled chicken, marinated egg, fried shallot, chicken " + 
        "fat, katsuobushi, yuzu kosho, scallion", "14"));
    ramenMenu.appendChild(createMenuItem("SHOYU RAMEN", "Chicken-dashi broth, " + 
        "roasted shoyu tare, fatty pork belly, marinated egg, menma, chicken " + 
        "fat, katsuobushi, scallion, sesame seed", "14"));
    ramenMenu.appendChild(createMenuItem("VEGGIE MISO RAMEN", "Shiitake dashi, " + 
        "miso tare, grilled corn, pickled shiitake, seasonal vegetables, " + 
        "scallion", "12"));
    ramenMenu.appendChild(createMenuItem("KID'S RAMEN", "Choice of broth: pork " + 
        "bone, chicken-shio, chicken-shoyu, miso, or spicy miso", "8"));
    contentMenu.appendChild(ramenMenu);

    const drinkTitle = document.createElement("div");
    drinkTitle.classList.add("menu-title");
    drinkTitle.textContent = "- DRINKS -";
    contentMenu.appendChild(drinkTitle);

    const drinkMenu = document.createElement("div");
    drinkMenu.classList.add("sub-menu");
    drinkMenu.appendChild(createMenuItem("LYCHEE MARTINI", "Wodka Vodka, " + 
        "St. Elder, lychee syrup, lychee popping boba", "8"));
    drinkMenu.appendChild(createMenuItem("KYOTO MULE", "Japanese shochu, lime, " + 
        "lychee syrup, Fever Tree ginger beer", "10"));
    drinkMenu.appendChild(createMenuItem("TOKI OLD FASHIONED", "Suntory Toki " + 
        "Japanese whiskey, ginger, lemon bitters", "10"));
    contentMenu.appendChild(drinkMenu);

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