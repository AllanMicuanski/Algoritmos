function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[Math.floor(array.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length; i++) {
    if (i === Math.floor(array.length / 2)) {
      continue;
    }
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

const array = [2, 5, 10, 0, 8, 1];
console.log(quickSort(array));
