/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let spents = [];

  for (let transaction of transactions) {
    if (spents.length != 0) {
      let categoryExists = false;

      for (let spent of spents) {
        if (spent.category === transaction.category) {
          spent.totalSpent += transaction.price;
          categoryExists = true;
          break;
        }
      }
      if (!categoryExists) {
        spents.push({
          category: transaction.category,
          totalSpent: transaction.price,
        });
      }
    } else {
      spents.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    }
  }

  return spents;
}

module.exports = calculateTotalSpentByCategory;
