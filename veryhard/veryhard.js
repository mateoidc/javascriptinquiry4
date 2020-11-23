// Given an array and an amount what is the fewest amount of numbers in that array that you need to get to th amount
//  Does it have to equal the amount or can it be >= to the amount
// If it can equal the amount are we returning the amount of numbers it took us there? Or are we returning the numbers that we used

let denominations = [1, 2, 3];
let amount = 4;

function waysToReturnChange(denominations, numOfCoins, amount) {
  if (amount === 0) return 1; // Works

  if (amount < 0) return 0; // No solution exists for negative amount

  if (numOfCoins < 0 && amount > 0) return 0; // Zero coins

  console.log(
    "checking ways to make " +
      amount +
      " with " +
      denominations.slice(numOfCoins)
  );

  return (
    waysToReturnChange(
      denominations,
      numOfCoins,
      amount - denominations[numOfCoins]
    ) + waysToReturnChange(denominations, numOfCoins - 1, amount)
  );
}

function waysToReturnMemoize(amount, denominations) {
  // intializing an array of zeros

  let waysOfDoingNcents = [];
  for (let i = 0; i <= amount; i++) {
    waysOfDoingNcents[i] = 0;
  }
  // there is 1 way to renturn 0 cents
  waysOfDoingNcents[0] = 1;

  for (let j = 0; j < denominations.length; j++) {
    let coin = denominations[j];

    for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
      let higherAmountRemainder = higherAmount - coin;

      waysOfDoingNcents[higherAmount] +=
        waysOfDoingNcents[higherAmountRemainder];
    }
  }

  return waysOfDoingNcents[amount];
}

console.log(
  waysToReturnChange(denominations, denominations.length - 1, amount)
);
console.log(waysToReturnMemoize(amount, denominations));

// https://medium.com/@omergoldberg/algorithms-in-js-making-change-bc5dec257e97 this website broke the problem down for me and it helped me understand.
