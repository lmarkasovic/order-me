function addDays(currentDate: Date) {
  const date = new Date(currentDate);
  date.setDate(date.getDate() + 1);
  return date;
}

export function getDates(startDate: Date, endDate: Date) {
  const dates: Date[] = [];
  let currentDate: Date = startDate;
  while (currentDate <= endDate) {
    const dayOfWeek = new Date(currentDate).getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      dates.push(currentDate);
    }
    currentDate = addDays(currentDate);
  }
  return dates;
}
