import {DateTime} from 'luxon'
import * as fs from 'fs'

function processLine(line, referenceDate) {
    if (!line.trim()) return null;
    const ln = line.trim().split(',');

    const fullDate = DateTime.fromFormat(`${ln[4]} ${ln[5]}`, 'MM/dd/yyyy t', { zone: ln[9] });
    if (!fullDate.isValid) return null;

    const locale = `${ln[8]}-${ln[6]}`;
    const localDateStr = fullDate.setLocale(locale).toLocaleString(DateTime.DATETIME_FULL);

    const age = Math.round(referenceDate.diff(fullDate, 'years').years);
    const gender = ln[1] === 'male' ? 'his' : 'her';

    return `${ln[0]} - ${ln[2]} is born in ${ln[7]} on ${localDateStr}
${gender} age in October 2025 will be almost ${age} years 
${gender} contact information: ${ln[3]}
-------------`;
}

let rawData = fs.readFileSync('./MOCK_DATA.csv', { encoding: 'utf8' });
const lines = rawData.split('\n');
const referenceDate = DateTime.fromISO('2025-10-01T00:00:00');
let new_data = '';

lines.forEach(line => {
    const paragraph = processLine(line, referenceDate);
    if (paragraph) {
      new_data += paragraph + '\n';
    }
  });

  try {
    fs.writeFileSync('./new_data.txt', new_data, { encoding: 'utf8' });
    console.log('New file written successfully');
  } catch (e) {
    console.error(e);
  }