import { format, parse } from "date-fns";

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
export function formatHeight(height) {
	if (height === "") {
		return ""; // Handle empty input
	}

	const parts = height.toString().split(".");
	let feet = parts[0];
	let inches = parts[1] || "0";

	if (feet === "") {
		feet = "0";
	}

	// Define an array to map numeric digits to Bengali digits
	const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

	// Convert numeric digits to Bengali digits
	feet = feet
		.split("")
		.map((digit) => bengaliDigits[digit])
		.join("");
	inches = inches
		.split("")
		.map((digit) => bengaliDigits[digit])
		.join("");

	return `${feet}'${inches}"`;
}

export function formatDate(dateStr) {
	// Parse the input date string (assuming it's in the format "9-1-1998")
	const parsedDate = parse(dateStr, "d-M-yyyy", new Date());

	// Format the parsed date as "9th Jan 1998"
	return format(parsedDate, "do MMM yyyy");
}
