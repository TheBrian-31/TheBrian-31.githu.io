/**
 * Formats a date string into a specific format.
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} The formatted date string.
 */
export function formatDateFull(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return formattedDate;
}

export function formatDateJustTime(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return formattedDate;
}

/**
 * Formats a date string without time.
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} The formatted date string in the format "YYYY-MM-DD".
 */
export function formatDateWOTime(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return formattedDate;
}