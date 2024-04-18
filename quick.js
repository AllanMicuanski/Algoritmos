// Função para Bubble Sort
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

// Função para Merge Sort
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  const merge = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };
  return merge(mergeSort(left), mergeSort(right));
}

// Função para Quick Sort
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Função para medir o tempo de execução
function medirTempo(funcao, array) {
  const inicio = performance.now();
  funcao(array);
  const fim = performance.now();
  return fim - inicio;
}

// Array de exemplo
const array = [2, 5, 10, 0, 8, 1];

// Medir o tempo de execução do Bubble Sort
const tempoBubble = medirTempo(bubbleSort, array);
console.log('Tempo de execução do Bubble Sort:', tempoBubble, 'milissegundos');

// Medir o tempo de execução do Merge Sort
const tempoMerge = medirTempo(mergeSort, array);
console.log('Tempo de execução do Merge Sort:', tempoMerge, 'milissegundos');

// Medir o tempo de execução do Quick Sort
const tempoQuick = medirTempo(quickSort, array);
console.log('Tempo de execução do Quick Sort:', tempoQuick, 'milissegundos');
