function bubbleSort(array) {
  const lista = array.length;

  for (let i = 0; i < lista - 1; i++) {
    for (let j = 0; j < lista - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

const array = [2, 5, 10, 0, 8, 1];

console.log(bubbleSort(array));
