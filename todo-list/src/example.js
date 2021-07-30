import { taskFactory } from "./task";
import { getDateFromToday } from "./date";

/**
 * Generates an example list of tasks for easy testing of the website's functions.
 * @returns - An array of example tasks.
 */
function generateTasks() {
    let tasks = [];

    // Inbox (default project)
    tasks.push(taskFactory("Clean room", 3, getDateFromToday(-4), "Inbox"));
    tasks.push(taskFactory("Laundry", 2, getDateFromToday(0), "Inbox"));
    tasks.push(taskFactory("Taxes", 1, getDateFromToday(4), "Inbox"));
    tasks.push(taskFactory("Vacation", 2, getDateFromToday(400), "Inbox"));

    // School (user project)
    tasks.push(taskFactory("Study for exam", 4, getDateFromToday(10), "School"));
    tasks.push(taskFactory("Math problems", 2, getDateFromToday(-1), "School"));
    tasks.push(taskFactory("History reading", 3, getDateFromToday(1), "School"));
    tasks.push(taskFactory("Final presentation", 1, getDateFromToday(40), "School"));

    // Groceries (user project)
    tasks.push(taskFactory("Milk", 4, "", "Groceries"));
    tasks.push(taskFactory("Eggs", 4, "", "Groceries"));
    tasks.push(taskFactory("Cheese", 4, "", "Groceries"));

    return tasks;
}

export {
    generateTasks,
}