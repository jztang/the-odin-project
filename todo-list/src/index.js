import { firstLoad } from "./storageManager";
import { displayTasks, displayUserProjects } from "./display";

firstLoad();

const defaultProjects = document.querySelector("#default-projects").childNodes;
for (let proj of defaultProjects) {
    proj.addEventListener("click", function() {
        displayTasks(proj.dataset.name, "Due date");
    });
}

const sortSelect = document.querySelector("#sort-select");
sortSelect.addEventListener("change", (e) => {
    const curProject = document.querySelector("#cur-project-name").textContent;
    const sort = e.target.value;
    // console.log(e.target.value);
    // console.log(document.querySelector("#cur-project-name").textContent);
    displayTasks(curProject, sort);
});

displayUserProjects();

displayTasks("Inbox", "Due date");