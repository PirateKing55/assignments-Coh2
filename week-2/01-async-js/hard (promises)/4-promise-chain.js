/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

async function calculateTime(t1, t2, t3) {
  const start = Date.now();

  await wait(t1);
  await wait(t2);
  await wait(t3);

  const end = Date.now();

  const totalTime = end - start;
  console.log(totalTime);
  return totalTime;
}

calculateTime(1, 2, 3);

module.exports = calculateTime;
