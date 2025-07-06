# 🏨 Hotel Operations Manager

This is a simple Node.js CLI project that processes hotel guest data from a CSV file and displays:

- ✅ Guests checking in on a specific date  
- 🎂 Guests who have birthdays during their stay  
- 📅 All guests sorted by their check-in date  

---

## 📁 Project Structure

```
├── data/
│ └── MOCK_DATA.csv # The guest data file
│
├── scripts/
│ ├── index.js # Main entry point
│ ├── hotelFunctions.js # Master exporter for all functions
│
│ ├── parseCSV.js # Parses CSV into JS data
│ ├── getCheckInGuests.js # Filters guests by check-in date
│ ├── birthdayDuringStay.js # Finds guests with birthdays during their stay
│ ├── sortGuestsByCheckInDate.js # Sorts guests by check-in date
│ └── printFunctionsData.js # Prints guest data in tables
```

---
## 📦 Technologies Used

- `Node.js`  
- [`luxon`](https://moment.github.io/luxon/) — for date manipulation  
- [`cli-table3`](https://www.npmjs.com/package/cli-table3) — for printing formatted tables in the terminal  
---
## ▶️ How to Run
1. Place your `MOCK_DATA.csv` file in the **root directory** of the project (the same folder where the script file is located).
2. Make sure you have Node.js installed on your system.
3. Install dependencies (if not already installed):
   ```bash
   npm install luxon cli-table3
4. Run the script using Node.js
   ```bash
   node index.js
---
### 📂 Output Example
📋 Guests who check-in on 2025-07-05:

┌──────────────────────┬──────────┬───────────────┬───────────────┬───────────────┐
│ Name                 │ Room     │ Gender        │ Check-in      │ Check-out     │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Charlie Adams        │ 101      │ Male          │ 2025-07-05    │ 2025-07-10    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Emily White          │ 105      │ Female        │ 2025-07-05    │ 2025-07-09    │
└──────────────────────┴──────────┴───────────────┴───────────────┴───────────────┘

📋 🎂 🎉 Guests with birthdays during their stay:

┌──────────────────────┬──────────┬───────────────┬───────────────┬───────────────┐
│ Name                 │ Room     │ Gender        │ Check-in      │ Check-out     │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Alice Smith          │ 101      │ Female        │ 2025-07-01    │ 2025-07-08    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Bob Johnson          │ 102      │ Male          │ 2025-07-03    │ 2025-07-07    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Sara Lee             │ 103      │ Female        │ 2025-07-04    │ 2025-07-06    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Frank Martin         │ 101      │ Male          │ 2025-07-06    │ 2025-07-12    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Oscar Clark          │ 102      │ Male          │ 2025-07-03    │ 2025-07-10    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Grace Hill           │ 104      │ Female        │ 2025-07-02    │ 2025-07-05    │
└──────────────────────┴──────────┴───────────────┴───────────────┴───────────────┘

📋 Guests Sorted by Check-in Date:

┌──────────────────────┬──────────┬───────────────┬───────────────┬───────────────┐
│ Name                 │ Room     │ Gender        │ Check-in      │ Check-out     │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Alice Smith          │ 101      │ Female        │ 2025-07-01    │ 2025-07-08    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Nina Brown           │ 106      │ Female        │ 2025-07-01    │ 2025-07-07    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Daniel Green         │ 104      │ Male          │ 2025-07-02    │ 2025-07-05    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Grace Hill           │ 104      │ Female        │ 2025-07-02    │ 2025-07-05    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Bob Johnson          │ 102      │ Male          │ 2025-07-03    │ 2025-07-07    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Oscar Clark          │ 102      │ Male          │ 2025-07-03    │ 2025-07-10    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Sara Lee             │ 103      │ Female        │ 2025-07-04    │ 2025-07-06    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Charlie Adams        │ 101      │ Male          │ 2025-07-05    │ 2025-07-10    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Emily White          │ 105      │ Female        │ 2025-07-05    │ 2025-07-09    │
├──────────────────────┼──────────┼───────────────┼───────────────┼───────────────┤
│ Frank Martin         │ 101      │ Male          │ 2025-07-06    │ 2025-07-12    │
└──────────────────────┴──────────┴───────────────┴───────────────┴───────────────┘