import { DateTime } from "luxon";

export function sortGuestsByCheckInDate(rows) {
    return [...rows].sort((a, b) => {
      const checkInA = DateTime.fromISO(a[3]);
      const checkInB = DateTime.fromISO(b[3]);
      return checkInA - checkInB; 
    });
}