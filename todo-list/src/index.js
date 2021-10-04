import { firstLoad, addTask } from "./storageManager";
import { displayTasks, displayUserProjects, updateProjDropdown, resetForms } from "./display";

firstLoad();

const addTaskBtn = document.querySelector("#add-task");
const newModal = document.querySelector("#new-modal");
addTaskBtn.addEventListener("click", () => {
    updateProjDropdown();
    newModal.style.display = "block";
});

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
    displayTasks(curProject, sort);
});

displayUserProjects();
displayTasks("Inbox", "Due date");

newModal.addEventListener("click", (event) => {
    if (event.target == newModal) resetForms();
});

document.querySelector("#new-task-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const taskName = document.querySelector("#new-task-name").value;
    const taskPriority = document.querySelector("#new-task-priority").value;
    const taskDueDate = document.querySelector("#new-task-date").value;
    const taskProject = document.querySelector("#new-task-project").value;
    addTask(taskName, taskPriority, taskDueDate, taskProject);

    const curProject = document.querySelector("#cur-project-name").textContent;
    const curSort = document.querySelector("#sort-select").value;
    resetForms();
    displayTasks(curProject, curSort);
});

document.querySelector("#new-task-cancel").addEventListener("click", () => {
    resetForms();
})