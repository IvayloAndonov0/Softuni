function Requiredreading(pages, pagesPerHour, days) {
  let totalHours = pages / pagesPerHour;
  let hoursPerDay = totalHours / days;
  console.log(`${hoursPerDay}`);
}
Requiredreading(212, 20, 2);
