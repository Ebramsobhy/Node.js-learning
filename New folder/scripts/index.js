import { parseCSV, getCheckInGuests, 
         getGuestsWithBirthdayDuringStay, 
         sortGuestsByCheckInDate, printGuestsTable} from "./hotelFunctions.js";

const rows = parseCSV("./data/MOCK_DATA.csv");
const date = "2025-07-05";

// Get guests who check in on the target date
const guests = getCheckInGuests(date, rows);
printGuestsTable(guests, `Guests who check-in on ${date}`);

// Get guests who have birthdays during their stay in Hotel
const birthdayGuests = getGuestsWithBirthdayDuringStay(rows);
printGuestsTable(birthdayGuests, "🎂 🎉 Guests with birthdays during their stay");

// Sort all guests by their check-in date (ascending)
const sortedGuests = sortGuestsByCheckInDate(rows);
printGuestsTable(sortedGuests, "Guests Sorted by Check-in Date");