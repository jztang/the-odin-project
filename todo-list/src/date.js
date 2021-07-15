import { add, sub, format } from "date-fns";

/**
 * Get the date, numDays relative to today.
 * @param {number} numDays - Number of days relative to today.
 * @returns - ISO 8601 formatted string of the date.
 */
function getDateFromToday(numDays) {
    const today = new Date();
    let date;

    if (numDays > 0) { // Get date in the future
        date = add(today, {days: numDays});
    } else if (numDays == 0) { // Get today 
        date = today;
    } else { // Get date in the past
        date = sub(today, {days: Math.abs(numDays)});
    }

    const formattedDate = format(date, "yyyy-MM-dd");

    return formattedDate;
}

export {
    getDateFromToday,
}