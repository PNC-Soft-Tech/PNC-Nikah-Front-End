export function getDateMonthYear(dateString) {
	const date = new Date(dateString);

	const year = date.getUTCFullYear();
	const month = date.getUTCMonth() + 1; // Months are zero-based, so add 1
	const day = date.getUTCDate();

	return `${day}-${month}-${year}`;
}

export function getYearMonthDate(dateString) {
	const date = new Date(dateString);

	const year = date.getUTCFullYear();
	const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Add leading zero if needed
	const day = String(date.getUTCDate()).padStart(2, "0"); // Add leading zero if needed
	return `${year}-${month}-${day}`;
}
