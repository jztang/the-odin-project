import { v4 as uuidv4 } from "uuid";

/**
 * Factory function for generating task objects.
 * @param {string} name - The name of the task.
 * @param {number} priority - The priority level of the task (1-4).
 * @param {string} dueDate - The due date of the task.
 * @param {string} project - The project this task belongs to.
 * @returns - A task object.
 */
const taskFactory = (name, priority, dueDate, project) => {
    const id = uuidv4();
    return { id, name, priority, dueDate, project };
};

export {
    taskFactory,
}