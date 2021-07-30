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

function getRelativeDate(taskDueDate) {
    if (taskDueDate === "") return "";
    const today = new Date();
    const diff = differenceInCalendarDays(parseISO(taskDueDate), today);

    if (diff < -1) {
        return format(parseISO(taskDueDate), "MMM d");
    } else if (diff === -1) {
        return "Yesterday";
    } else if (diff === 0) {
        return "Today";
    } else if (diff === 1) {
        return "Tomorrow";
    } else if (diff > 1 && diff <= 7) {
        return format(parseISO(taskDueDate), "EEEE");
    } else if (diff > 7 && diff < 365) {
        return format(parseISO(taskDueDate), "MMM d");
    } else {
        return format(parseISO(taskDueDate), "MMM d y");
    }
}

export {
    getDateFromToday,
    getRelativeDate,
}