import { generateTasks } from "./example";

let tasks;
let userProjects;

function firstLoad() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    userProjects = JSON.parse(localStorage.getItem("userProjects"));

    if (tasks === null) {
        console.log("User data not found - generating tasks");
        tasks = generateTasks();
        userProjects = ["School", "Groceries"];
        localStorage.setItem("tasks", JSON.stringify(tasks));
        localStorage.setItem("userProjects", JSON.stringify(userProjects));
    } else {
        console.log("Previous user data found");
    }
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