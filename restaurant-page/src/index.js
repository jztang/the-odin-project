import { loadAbout, loadMenu, loadContact } from "./tabs";

const tabs = document.querySelectorAll(".crumb a");

for (let tab of tabs) {
    tab.addEventListener("click", () => {
        document.querySelector("#content").remove();

        if (tab.textContent === "About") {
            loadAbout();
        } else if (tab.textContent === "Menu") {
            loadMenu();
        } else if (tab.textContent === "Contact") {
            loadContact();
        }
    });
}

loadAbout();