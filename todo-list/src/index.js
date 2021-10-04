import { firstLoad, addTask } from "./storageManager";
import { displayTasks, displayUserProjects, updateProjDropdown, resetForms } from "./display";

firstLoad();

// Open modal for adding a new task
const addTaskBtn = document.querySelector("#add-task");
const newModal = document.querySelector("#new-modal");
addTaskBtn.addEventListener("click", () => {
    updateProjDropdown();
    newModal.style.display = "block";
});

// Open the project when the project is clicked (default projects)
const defaultProjects = document.querySelector("#default-projects").childNodes;
for (let proj of defaultProjects) {
    proj.addEventListener("click", function() {
        displayTasks(proj.dataset.name, "Due date");
    });
}

displayUserProjects();

// Change the task sorting when the dropdown value is changed
const sortSelect = document.querySelector("#sort-select");
sortSelect.addEventListener("change", (e) => {
    const curProject = document.querySelector("#cur-project-name").textContent;
    const sort = e.target.value;
    displayTasks(curProject, sort);
});

displayTasks("Inbox", "Due date");

// Handle submitting a new task
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

// Ways to close out of the form
newModal.addEventListener("click", (event) => {
    if (event.target == newModal) resetForms();
});

document.querySelector("#new-task-cancel").addEventListener("click", () => {
    resetForms();
})