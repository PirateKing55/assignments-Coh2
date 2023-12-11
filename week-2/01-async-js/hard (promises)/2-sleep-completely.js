/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  const start = Date.now();
  let end;
  do {
    end = Date.now();
  } while (end - start <= milliseconds);
  return new Promise((resolve) => {
    resolve();
  });
}

sleep(2345);
console.log("hi");

module.exports = sleep;
