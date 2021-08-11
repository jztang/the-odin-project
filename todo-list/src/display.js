import { getTasks, getUserProjects } from "./storageManager";
import { getRelativeDate, isLate } from "./date";

function displayTasks(sort) {
    let tasks;
    if (sort === "Due date") {
        tasks = getTasks().sort(compareDueDate);
    }

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

function compareDueDate(a, b) {
    if (a.dueDate < b.dueDate && a.dueDate !== "") {
        return -1;
    } else if (a.dueDate > b.dueDate || a.dueDate === "") {
        return 1;
    } else {
        return 0;
    }
}

function displayUserProjects() {
    const userProjects = getUserProjects();
    const containerDiv = document.querySelector("#user-projects");

    for (const proj of userProjects) {
        const projDiv = document.createElement("div");
        projDiv.classList.add("project");

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

        containerDiv.appendChild(projDiv);
    }
}

export {
    displayTasks,
    displayUserProjects,
}