export function getGuestsWithBirthdayDuringStay	(rows) {
    return rows.filter(columns => {
      const birthday = columns[2].slice(5, 10);  // "MM-DD"
      const checkIn = columns[3].slice(5, 10);
      const checkOut = columns[4].slice(5, 10);
  
      if (checkIn <= checkOut) {
        return birthday >= checkIn && birthday <= checkOut;
      } else {
        return birthday >= checkIn || birthday <= checkOut;
      }
    });
}