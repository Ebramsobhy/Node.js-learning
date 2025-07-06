import { DateTime } from "luxon";
import Table from "cli-table3";

export function printGuestsTable(guests, title) {
  console.log(`\n📋 ${title}:\n`);

  if (guests.length === 0) {
    console.log("❌ No guests found.");
    return;
  }

  const table = new Table({
    head: ["Name", "Room", "Gender", "Check-in", "Check-out"],
    colWidths: [22, 10, 15, 15, 15],
  });

  guests.forEach((guest) => {
    const name = guest[1];
    const room = guest[5];
    const gender = guest[6];
    const checkIn = DateTime.fromISO(guest[3]).toFormat("yyyy-MM-dd");
    const checkOut = DateTime.fromISO(guest[4]).toFormat("yyyy-MM-dd");
    table.push([name, room, gender, checkIn, checkOut]);
  });

  console.log(table.toString());
}