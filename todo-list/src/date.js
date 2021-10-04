import { add, sub, format, parseISO, differenceInCalendarDays } from "date-fns";

/**
 * Get the date, numDays relative to today.
 * @param {number} numDays - Number of days relative to today.
 * @returns - ISO 8601 formatted string of the date.
 */
function getDateFromToday(numDays) {
    const today = new Date();
    let date;

    if (numDays > 0) {         // Get date in the future
        date = add(today, {days: numDays});
    } else if (numDays == 0) { // Get today 
        date = today;
    } else {                   // Get date in the past
        date = sub(today, {days: Math.abs(numDays)});
    }

    const formattedDate = format(date, "yyyy-MM-dd");
    return formattedDate;
}

/**
 * Get the number of days between today and date.
 * @param {string} date - The date to be compared to today.
 * @returns - The number of days between today and date.
 */
function getDiffFromToday(date) {
    const today = new Date();
    const diff = differenceInCalendarDays(parseISO(date), today);
    return diff;
}

/**
 * Checks if the task is due today.
 * @param {string} taskDueDate - The task's due date.
 * @returns - true if the task is due today.
 *            false if the task is not due today.
 */
function dueToday(taskDueDate) {
    const diff = getDiffFromToday(taskDueDate);
    return diff <= 0;
}

/**
 * Checks if the task is due this week.
 * @param {string} taskDueDate - The task's due date.
 * @returns - true if the task is due within 7 days.
 *            false if the task is not due within 7 days.
 */
function dueThisWeek(taskDueDate) {
    const diff = getDiffFromToday(taskDueDate);
    return diff <= 7;
}

/**
 * Get the relative due date of the task.
 * @param {string} taskDueDate - The task's due date.
 * @returns - The relative due date of the task.
 */
function getRelativeDate(taskDueDate) {
    if (taskDueDate === "") return "";   // No due date
    const diff = getDiffFromToday(taskDueDate);

    if (diff < -1) {                     // Due in the past
        return format(parseISO(taskDueDate), "MMM d");
    } else if (diff === -1) {            // Due yesterday
        return "Yesterday";
    } else if (diff === 0) {             // Due today
        return "Today";
    } else if (diff === 1) {             // Due tomorrow
        return "Tomorrow";
    } else if (diff > 1 && diff <= 7) {  // Due this week
        return format(parseISO(taskDueDate), "EEEE");
    } else if (diff > 7 && diff < 365) { // Due this year
        return format(parseISO(taskDueDate), "MMM d");
    } else {                             // Due in more than a year
        return format(parseISO(taskDueDate), "MMM d y");
    }
}

/**
 * Checks if the task is late.
 * @param {string} taskDueDate - The due date of the task.
 * @returns - true if the task's due date is before today.
 *            false otherwise.
 */
function isLate(taskDueDate) {
    const diff = getDiffFromToday(taskDueDate);

    if (diff < 0) return true;
    else return false;
}

export {
    getDateFromToday,
    dueToday,
    dueThisWeek,
    getRelativeDate,
    isLate,
}