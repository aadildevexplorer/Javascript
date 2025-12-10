let newDate = new Date();
// 👉 Creates full date object with year, month, date, time, timezone, everything
console.log(newDate);

console.log(newDate.getTime());
// 👉 Returns timestamp (ms) since 1 Jan 1970
// 👉 Use: OTP expiry, cookie expiry, timer, sorting by time, unique ID logic

const id = crypto.randomUUID();
// 👉 Creates unique ID
// 👉 Use: database IDs, random keys, object IDs, frontend keys
console.log(id);

console.log(newDate.getFullYear());
// 👉 Returns year (example: 2025)
// 👉 Use: user age calculate, year filtering, date validations

console.log(newDate.getHours());
// 👉 Returns hour (0–23)
// 👉 Use: greeting (good morning), scheduling, time-based UI

console.log(newDate.getMonth());
// 👉 Returns month index (0 = Jan, 10 = Nov)
// 👉 Use: month check, calendar, reports

console.log(newDate.getDay());
// 👉 Returns weekday (0 = Sunday, 6 = Saturday)
// 👉 Use: weekends check, attendance logic, reminders

console.log(newDate.getTimezoneOffset());
// 👉 Returns difference between UTC & local time in minutes
// 👉 India = -330 → (5.5 hours ahead of UTC)
// 👉 Use: global apps me time handling

console.log(newDate.getMinutes());
// 👉 Returns minutes (0–59)
// 👉 Use: clock UI, timers

console.log(newDate.getUTCMonth());
// 👉 Returns month in UTC timezone
// 👉 Use: server timezone issues fix karne me

console.log(newDate.setFullYear(2026));
// 👉 Updates year to 2026
// 👉 Returns NEW timestamp (ms)
// 👉 Use: subscription expiry +1 year, date modification

console.log(newDate);
// 👉 Shows complete updated date object

console.log(newDate.toString());
// 👉 Full readable date (with weekday + timezone)
// 👉 Use: log, debug, backend console output

console.log(newDate.toLocaleString());
// 👉 Localized India format date + time
// 👉 Use: UI me visible date/time, receipts, invoices

console.log(newDate.toLocaleDateString());
// 👉 Only date (India format)
// 👉 Use: date picker, forms, UI display

const date = Date.now();
// 👉 Fast way to get current timestamp (no Date object)
// 👉 Use: performance testing, timers
console.log(date);

console.log(newDate);
// 👉 Shows updated date object again

console.log(newDate.toLocaleTimeString());
// 👉 Only time (AM/PM format)
// 👉 Use: clocks, chat time, messages timestamp

console.log(newDate.getMonth());
// 👉 Again month index (0–11)
// 👉 10 ka matlab = November

// Repeat display for clarity
console.log(newDate);
console.log(newDate.toString());
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleDateString());

const time = new Date();
// 👉 New time object

console.log(newDate.getTime());
// 👉 Timestamp of current object newDate
