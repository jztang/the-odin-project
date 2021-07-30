import { generateTasks } from "./example";

let tasks;
let userProjects;

function firstLoad() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks === null) tasks = generateTasks();

    userProjects = JSON.parse(localStorage.getItem("userProjects"));
    if (userProjects === null) userProjects = ["School", "Groceries"];
}

function getTasks() {
    return tasks;
}

function getUserProjects() {
    return userProjects;
}

export {
    firstLoad,
    getTasks,
    getUserProjects,
}