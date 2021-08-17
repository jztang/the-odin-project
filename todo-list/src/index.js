import { firstLoad } from "./storageManager";
import { displayTasks, displayUserProjects } from "./display";

firstLoad();

const defaultProjects = document.querySelector("#default-projects").childNodes;
for (let proj of defaultProjects) {
    proj.addEventListener("click", function() {
        displayTasks(proj.dataset.name, "Due date");
    });
}

displayUserProjects();

displayTasks("Inbox", "Due date");