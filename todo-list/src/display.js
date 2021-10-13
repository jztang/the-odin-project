import { getTasks, getUserProjects } from "./storageManager";
import { dueToday, dueThisWeek, getRelativeDate, isLate } from "./date";

/**
 * Removes the current project highlight and current tasks.
 */
function resetDisplay() {
    document.querySelectorAll(".project").forEach(proj => {
        proj.classList.remove("current-project");
    });

    document.querySelectorAll(".task").forEach(task => {
        task.remove();
    });
}

/**
 * Display the tasks under a project, sorted.
 * @param {string} project - The project to display.
 * @param {string} sort - The sort to use on the tasks.
 */
function displayTasks(project, sort) {
    resetDisplay();
    document.querySelector(`[data-name="${project}"]`).classList.add("current-project");
    document.querySelector("#cur-project-name").textContent = project;

    let tasks;

    // Filter all tasks for the current project
    if (project === "Today") {
        tasks = getTasks().filter(task => dueToday(task.dueDate));
    } else if (project === "This Week") {
        tasks = getTasks().filter(task => dueThisWeek(task.dueDate));
    } else {
        tasks = getTasks().filter(task => task.project === project);
    }

    // Sort the tasks
    if (sort === "Due date") {
        tasks.sort(compareDueDate);
        document.querySelector("#sort-select").value = "Due date";
    } else if (sort === "Priority") {
        tasks.sort(comparePriority);
        document.querySelector("#sort-select").value = "Priority";
    } else if (sort === "Alphabetical") {
        tasks.sort(compareAlphabetical);
        document.querySelector("#sort-select").value = "Alphabetical";
    }

    // Add each task to the DOM
    const containerDiv = document.querySelector("#cur-project-container");

    for (const task of tasks) {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const taskCheck = document.createElement("button");
        taskCheck.classList.add("task-check");
        taskCheck.dataset.priority = task.priority;
        const checkImg = document.createElement("img");
        checkImg.src = `../img/circle-p${task.priority}.svg`;
        taskCheck.appendChild(checkImg);
        taskDiv.appendChild(taskCheck);

        const taskName = document.createElement("span");
        taskName.classList.add("task-name");
        taskName.textContent = task.name;
        taskDiv.appendChild(taskName);

        const taskDueDate = document.createElement("time");
        taskDueDate.classList.add("task-due-date");
        taskDueDate.textContent = getRelativeDate(task.dueDate);
        if (isLate(task.dueDate)) taskDueDate.classList.add("late");
        taskDiv.appendChild(taskDueDate);

        const taskEdit = document.createElement("button");
        taskEdit.classList.add("task-edit");
        const editImg = document.createElement("img");
        editImg.src = "../img/pencil.svg";
        taskEdit.appendChild(editImg);
        taskDiv.appendChild(taskEdit);

        containerDiv.appendChild(taskDiv);
    }
}

/**
 * Compare the due dates of two tasks.
 * @param {string} a - The due date of the first task.
 * @param {string} b - The due date of the second task.
 * @returns - -1 if a is due after b.
 *             1 if a is due before b.
 *             0 if a and b are due at the same time.
 */
function compareDueDate(a, b) {
    if (a.dueDate < b.dueDate && a.dueDate !== "") {
        return -1;
    } else if (a.dueDate > b.dueDate || (a.dueDate === "" && b.dueDate !== "")) {
        return 1;
    } else {
        return 0;
    }
}

/**
 * Compare the priorities of two tasks.
 * @param {number} a - The priority of the first task. 
 * @param {number} b - The priority of the second task.
 * @returns - -1 if a is lower priority than b.
 *             1 if a is higher priority than b.
 *             0 if a and b are equal priority.
 */
function comparePriority(a, b) {
    if (a.priority < b. priority) {
        return -1;
    } else if (a.priority > b.priority) {
        return 1;
    } else {
        return 0;
    }
}

/**
 * Compare the name of two tasks alphabetically.
 * @param {string} a - The name of the first task. 
 * @param {string} b - The name of the second task.
 * @returns - -1 if a alphabetically comes after b.
 *             1 if a alphabetically comes before b.
 *             0 if a and b are alphabetically equal.
 */
function compareAlphabetical(a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else {
        return 0;
    }
}

/**
 * Display user projects in the nav bar.
 */
function displayUserProjects() {
    document.querySelectorAll("#user-projects > .project").forEach(proj => {
        proj.remove();
    });

    const userProjects = getUserProjects();
    const containerDiv = document.querySelector("#user-projects");

    for (const proj of userProjects) {
        const projDiv = document.createElement("div");
        projDiv.classList.add("project");
        projDiv.dataset.name = proj;

        const projIcon = document.createElement("img");
        projIcon.src = "../img/list-check.svg";
        projDiv.appendChild(projIcon);

        const projName = document.createElement("span");
        projName.textContent = proj;
        projDiv.appendChild(projName);

        const projEdit = document.createElement("button");
        projEdit.classList.add("project-edit");
        const editImg = document.createElement("img");
        editImg.src = "../img/pencil.svg";
        projEdit.appendChild(editImg);
        projDiv.appendChild(projEdit);

        projDiv.addEventListener("click", function() {
            displayTasks(proj, "Due date");
        });

        containerDiv.appendChild(projDiv);
    }
}

/**
 * Update the projects dropdown in the new task form when "Add task" is clicked.
 */
function updateProjDropdown() {
    const projDropdown = document.querySelector("#new-task-project");
    projDropdown.replaceChildren();

    const inbox = document.createElement("option");
    inbox.value = "Inbox";
    inbox.text = "Inbox";
    projDropdown.add(inbox);

    const userProjects = getUserProjects();
    for (const proj of userProjects) {
        const opt = document.createElement("option");
        opt.value = proj;
        opt.text = proj;
        projDropdown.add(opt);
    }
}

/**
 * Reset the content of the new task and new project form.
 */
function resetForms() {
    document.querySelector("#new-task-form").reset();
    document.querySelector("#new-task-form").style.display = "none";
    document.querySelector("#new-project-form").reset();
    document.querySelector("#new-project-form").style.display = "none";
    document.querySelector("#new-modal").style.display = "none";
}

export {
    displayTasks,
    displayUserProjects,
    updateProjDropdown,
    resetForms
}