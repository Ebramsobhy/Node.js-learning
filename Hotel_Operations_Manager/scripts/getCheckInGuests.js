import { DateTime } from "luxon";

export function getCheckInGuests(targetDateISO, rows) {
    const targetDate = DateTime.fromISO(targetDateISO);
    return rows.filter(columns => {
      const checkIn = DateTime.fromISO(columns[3]);
      return checkIn.hasSame(targetDate, "day");
    });
}  