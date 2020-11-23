const arr1 = [4, 5, 6, 7, 0, 1, 2];
const arr2 = [4, 5, 6, 7, 0, 1, 2];

function search(array, target) {
  let output;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return (output = array.indexOf(target));
    } else if (array[i] == !target) {
      return (output = -1);
    }
  }
}

console.log(search(arr1, 0));
console.log(search(arr2, 9));
