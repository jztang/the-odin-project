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

    const map = document.createElement("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6254270160457!2d-73.99290268413769!3d40.74826697932811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af1989db01%3A0xfff4c602a3069de6!2sIchiran!5e0!3m2!1sen!2sus!4v1620059631914!5m2!1sen!2sus";
    map.width = "600";
    map.height = "450";
    map.style.border = "0";
    map.loading = "lazy";
    contentContact.appendChild(map);

    const contactInfo = document.createElement("div");
    contactInfo.id = "contact-info";

    const contactLoc = document.createElement("div");
    contactLoc.classList.add("contact-section");
    const contactLocTitle = document.createElement("div");
    contactLocTitle.classList.add("contact-section-title");
    contactLocTitle.textContent = "Address";
    contactLoc.appendChild(contactLocTitle);
    const contactLocDesc1 = document.createElement("div");
    contactLocDesc1.classList.add("contact-section-desc");
    contactLocDesc1.textContent = "132 W 31st St";
    contactLoc.appendChild(contactLocDesc1);
    const contactLocDesc2 = document.createElement("div");
    contactLocDesc2.classList.add("contact-section-desc");
    contactLocDesc2.textContent = "New York, NY 10001";
    contactLoc.appendChild(contactLocDesc2);
    contactInfo.appendChild(contactLoc);

    const contactHrs = document.createElement("div");
    contactHrs.classList.add("contact-section");
    const contactHrsTitle = document.createElement("div");
    contactHrsTitle.classList.add("contact-section-title");
    contactHrsTitle.textContent = "Hours";
    contactHrs.appendChild(contactHrsTitle);
    const contactHrsDesc1 = document.createElement("div");
    contactHrsDesc1.classList.add("contact-section-desc");
    contactHrsDesc1.textContent = "Sun - Thu: 11 AM - 10 PM";
    contactHrs.appendChild(contactHrsDesc1);
    const contactHrsDesc2 = document.createElement("div");
    contactHrsDesc2.classList.add("contact-section-desc");
    contactHrsDesc2.textContent = "Fri - Sat: 11 AM - 2 AM";
    contactHrs.appendChild(contactHrsDesc2);
    contactInfo.appendChild(contactHrs);

    const contactNum = document.createElement("div");
    contactNum.classList.add("contact-section");
    const contactNumTitle = document.createElement("div");
    contactNumTitle.classList.add("contact-section-title");
    contactNumTitle.textContent = "Call Us";
    contactNum.appendChild(contactNumTitle);
    const contactNumDesc = document.createElement("div");
    contactNumDesc.classList.add("contact-section-desc");
    contactNumDesc.textContent = "123-456-7890";
    contactNum.appendChild(contactNumDesc);
    contactInfo.appendChild(contactNum);

    contentContact.appendChild(contactInfo);

    content.appendChild(contentContact);
    document.querySelector("#container").appendChild(content);
}

export {
    loadAbout,
    loadMenu,
    loadContact
}