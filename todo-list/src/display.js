import { getTasks } from "./storageManager";

function displayTasks() {
    const tasks = getTasks();
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
        taskDueDate.textContent = task.dueDate;
        taskDiv.appendChild(taskDueDate);

        const taskEdit = document.createElement("button");
        taskEdit.classList.add("task-edit");
        const editImg = document.createElement("img");
        editImg.src= "../img/pencil.svg";
        taskEdit.appendChild(editImg);
        taskDiv.appendChild(taskEdit);

        containerDiv.appendChild(taskDiv);
    }
}

export {
    displayTasks,
}