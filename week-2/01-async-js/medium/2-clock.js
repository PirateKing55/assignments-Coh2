// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock() {
  let ampm = "AM";
  const d = new Date();
  let h = d.getHours();
  if (h > 12) {
    h -= 12;
    ampm = "PM";
  }
  const m = d.getMinutes();
  const s = d.getSeconds();

  console.log(`${h}:${m}:${s} ${ampm}`);
}

setInterval(clock, 1000);
