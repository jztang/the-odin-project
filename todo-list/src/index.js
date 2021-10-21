import { firstLoad, addTask, editTask, deleteTask, getUserProjects, addProject, editProject, deleteProject, deleteAll } from "./storageManager";
import { displayTasks, displayUserProjects, updateProjDropdown, resetForms } from "./display";

firstLoad();
displayUserProjects();
displayTasks("Inbox", "Due date");

// VARIOUS EVENT LISTENERS
// Open modal for adding a new task or project
const addTaskBtn = document.querySelector("#add-task");
const newTaskForm = document.querySelector("#new-task-form");
const newProjBtn = document.querySelector("#new-project");
const newProjForm = document.querySelector("#new-project-form");
const newModal = document.querySelector("#new-modal");

addTaskBtn.addEventListener("click", () => {
    updateProjDropdown("#new-task-project");
    newModal.style.display = "block";
    newTaskForm.style.display = "flex";
});

newProjBtn.addEventListener("click", () => {
    newModal.style.display = "block";
    newProjForm.style.display = "flex";
});

// Open the project when the project is clicked (default projects)
const defaultProjects = document.querySelector("#default-projects").childNodes;
for (let proj of defaultProjects) {
    proj.addEventListener("click", function () {
        displayTasks(proj.dataset.name, "Due date");
    });
}

// Demo buttons
document.querySelector("#demo-reset").addEventListener("click", () => {
    localStorage.clear();
    firstLoad();
    displayUserProjects();
    displayTasks("Inbox", "Due date");
});

document.querySelector("#demo-blank").addEventListener("click", () => {
    deleteAll();
    displayUserProjects();
    displayTasks("Inbox", "Due date");
});

// Change the task sorting when the dropdown value is changed
const sortSelect = document.querySelector("#sort-select");
sortSelect.addEventListener("change", (e) => {
    const curProject = document.querySelector("#cur-project-name").textContent;
    const sort = e.target.value;
    displayTasks(curProject, sort);
});


// Task validation for adding a new task
document.querySelector("#new-task-name").addEventListener("input", () => {
    const submitBtn = document.querySelector("#new-task-submit");
    if (document.querySelector("#new-task-name").value.trim().length < 1) {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
});

// Handle submitting a new task
document.querySelector("#new-task-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const taskName = document.querySelector("#new-task-name").value.trim();
    const taskPriority = document.querySelector("#new-task-priority").value;
    const taskDueDate = document.querySelector("#new-task-date").value;
    const taskProject = document.querySelector("#new-task-project").value;
    addTask(taskName, taskPriority, taskDueDate, taskProject);

    resetForms();
    const curProject = document.querySelector("#cur-project-name").textContent;
    const curSort = document.querySelector("#sort-select").value;
    displayTasks(curProject, curSort);
});

// New project name validation
document.querySelector("#new-project-name").addEventListener("input", () => {
    const projName = document.querySelector("#new-project-name").value.trim();
    const projects = ["Inbox", "Today", "This Week"].concat(getUserProjects());
    const submitBtn = document.querySelector("#new-project-submit");
    let errorText = document.querySelector("#new-project-error");

    if (projName.length < 1) {
        submitBtn.disabled = true;
        errorText.textContent = "";
    } else if (projects.includes(projName)) {
        submitBtn.disabled = true;
        errorText.textContent = "This project already exists";
    } else {
        submitBtn.disabled = false;
        errorText.textContent = "";
    }
});

// Handle submitting a new project
document.querySelector("#new-project-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const projName = document.querySelector("#new-project-name").value.trim();
    addProject(projName);

    resetForms();
    displayUserProjects();
});

// Edit project name validation
document.querySelector("#edit-project-name").addEventListener("input", () => {
    const editName = document.querySelector("#edit-project-name").value.trim();
    const curName = document.querySelector("#cur-project-name").textContent;
    const projects = ["Inbox", "Today", "This Week"].concat(getUserProjects());
    const saveProjBtn = document.querySelector("#edit-project-submit");
    let errorText = document.querySelector("#edit-project-error");

    if (editName.length < 1 || editName === curName) {
        saveProjBtn.disabled = true;
        errorText.textContent = "";
    } else if (projects.includes(editName) && editName !== curName) {
        saveProjBtn.disabled = true;
        errorText.textContent = "This project already exists";
    } else {
        saveProjBtn.disabled = false;
        errorText.textContent = "";
    }
});

// Handle editing a project name
document.querySelector("#edit-project-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const curName = document.querySelector("#cur-project-name").textContent;
    const editName = document.querySelector("#edit-project-name").value.trim();
    editProject(curName, editName);

    resetForms();
    displayUserProjects();
    displayTasks(editName, document.querySelector("#sort-select").value);
});

// Deleting a project
document.querySelector("#edit-project-delete").addEventListener("click", () => {
    const projName = document.querySelector("#cur-project-name").textContent;
    const delConfirm = confirm(`Are you sure you want to delete Project "${projName}"? ` +
        `All tasks under the project will also be deleted. This action cannot be undone.`);
    if (delConfirm) {
        deleteProject(projName);
        resetForms();
        displayUserProjects();
        displayTasks("Inbox", "Due date");
    }
});

// Task validation for editing a task
const editTaskForm = document.querySelector("#edit-task-form");
const saveTaskBtn = document.querySelector("#edit-task-submit");
let nameEmpty = false;
let nameChanged = false;
let prioChanged = false;
let dateChanged = false;
let projChanged = false;

/**
 * Enables or disables the save button, based on whether or not valid changes were made.
 */
function validateChanges() {
    let valid = false;
    if (nameChanged || prioChanged || dateChanged || projChanged) {
        valid = true;
    }
    if (nameEmpty) {
        valid = false;
    }

    if (valid) {
        saveTaskBtn.disabled = false;
    } else {
        saveTaskBtn.disabled = true;
    }
}

const editTaskName = document.querySelector("#edit-task-name");
editTaskName.addEventListener("input", () => {
    if (editTaskName.value.trim().length < 1) {
        nameEmpty = true;
        nameChanged = true;
    } else if (editTaskName.value.trim() === editTaskForm.dataset.name) {
        nameEmpty = false;
        nameChanged = false;
    } else {
        nameEmpty = false;
        nameChanged = true;
    }
    validateChanges();
});

const editTaskPriority = document.querySelector("#edit-task-priority");
editTaskPriority.addEventListener("input", () => {
    if (editTaskPriority.value === editTaskForm.dataset.priority) {
        prioChanged = false;
    } else {
        prioChanged = true;
    }
    validateChanges();
});

const editTaskDate = document.querySelector("#edit-task-date");
editTaskDate.addEventListener("input", () => {
    if (editTaskDate.value === editTaskForm.dataset.dueDate) {
        dateChanged = false;
    } else {
        dateChanged = true;
    }
    validateChanges();
});

const editTaskProject = document.querySelector("#edit-task-project");
editTaskProject.addEventListener("input", () => {
    if (editTaskProject.value === editTaskForm.dataset.project) {
        projChanged = false;
    } else {
        projChanged = true;
    }
    validateChanges();
});

/**
 * Resets flags used for edit task validation.
 */
function resetEditFlags() {
    nameEmpty = nameChanged = prioChanged = dateChanged = projChanged = false;
}

// Handle editing a task
editTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    editTask(editTaskForm.dataset.id, editTaskName.value.trim(), editTaskPriority.value,
        editTaskDate.value, editTaskProject.value);

    resetEditFlags();
    resetForms();
    const curProject = document.querySelector("#cur-project-name").textContent;
    const curSort = document.querySelector("#sort-select").value;
    displayTasks(curProject, curSort);
});

// Deleting a task
document.querySelector("#edit-task-delete").addEventListener("click", () => {
    const delConfirm = confirm(`Are you sure want to delete Task ` +
        `"${editTaskForm.dataset.name}"? This action cannot be undone.`);
    if (delConfirm) {
        deleteTask(editTaskForm.dataset.id);
        resetEditFlags();
        resetForms();
        const curProject = document.querySelector("#cur-project-name").textContent;
        const curSort = document.querySelector("#sort-select").value;
        displayTasks(curProject, curSort);
    }
});

// Ways to close out of the form
newModal.addEventListener("mousedown", (event) => {
    if (event.target == newModal) {
        resetEditFlags();
        resetForms();
    }
});

document.querySelectorAll(".form-cancel").forEach(btn => {
    btn.addEventListener("click", () => {
        resetEditFlags();
        resetForms();
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        resetEditFlags();
        resetForms();
    }
});