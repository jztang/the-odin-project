import { taskFactory } from "./task";
import { generateTasks } from "./example";

let tasks;
let userProjects;

/**
 * Get tasks/projects from localStorage; generate example tasks if none exist.
 */
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

/**
 * Get the array of tasks.
 * @returns - The task array.
 */
function getTasks() {
    return tasks;
}

/**
 * Add a new task.
 * @param {string} name - The name of the task.
 * @param {number} priority - The priority level of the task (1-4).
 * @param {string} dueDate - The due date of the task.
 * @param {string} project - The project this task belongs to.
 */
function addTask(name, priority, dueDate, project) {
    const newTask = taskFactory(name, priority, dueDate, project);
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Edit an existing task.
 * @param {string} taskId - The ID of the task to edit.
 * @param {string} name - The new name of the task.
 * @param {number} priority - The new priority of the task.
 * @param {string} dueDate - The new due date of the task.
 * @param {string} project - The new project of the task.
 */
function editTask(taskId, name, priority, dueDate, project) {
    let task;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskId) {
            task = tasks[i];
        }
    }

    task.name = name;
    task.priority = priority;
    task.dueDate = dueDate;
    task.project = project;
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Delete a task.
 * @param {string} id - The ID of the task to be deleted.
 */
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Get the array of user projects.
 * @returns - The user project array.
 */
function getUserProjects() {
    return userProjects;
}

/**
 * Add a new project.
 * @param {string} name - The name of the project. 
 */
function addProject(name) {
    userProjects.push(name);
    localStorage.setItem("userProjects", JSON.stringify(userProjects));
}

/**
 * Edit the name of a project, and move tasks under the old project to the new name.
 * @param {string} curName - The current name of the project.
 * @param {string} editName - The new name for the project.
 */
function editProject(curName, editName) {
    userProjects[userProjects.indexOf(curName)] = editName;

    tasks.forEach(task => {
        if (task.project === curName) {
            task.project = editName;
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("userProjects", JSON.stringify(userProjects));
}

/**
 * Delete a project and its tasks.
 * @param {string} name - The name of the project. 
 */
function deleteProject(name) {
    tasks = tasks.filter(task => task.project !== name);
    userProjects.splice(userProjects.indexOf(name), 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("userProjects", JSON.stringify(userProjects));
}

/**
 * Delete all tasks and projects.
 */
function deleteAll() {
    tasks = [];
    userProjects = [];
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("userProjects", JSON.stringify(userProjects));
}

export {
    firstLoad,
    getTasks,
    addTask,
    editTask,
    deleteTask,
    getUserProjects,
    addProject,
    editProject,
    deleteProject,
    deleteAll
}