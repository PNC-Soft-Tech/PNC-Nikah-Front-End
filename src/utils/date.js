export function getDateMonthYear(dateString) {
  const date = new Date(dateString);

  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1; // Months are zero-based, so add 1
  const day = date.getUTCDate();

  return `${day}-${month}-${year}`;
}
