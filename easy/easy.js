const arr1 = [1, 4, 7];
const arr2 = [4, 7, 12, 14];

function average(array) {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    num += array[i] / array.length;
  }
  return num;
}

console.log(average(arr1));
console.log(average(arr2));
