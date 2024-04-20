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

// Arrays de exemplos

const array5 = [4, 2, 1, 5, 3];

const array50 = [
  39, 14, 45, 16, 4, 18, 42, 3, 32, 5, 23, 17, 30, 12, 15, 21, 26, 34, 11, 25,
  6, 9, 35, 48, 20, 41, 7, 28, 22, 2, 19, 40, 49, 37, 44, 50, 24, 10, 36, 31,
  13, 47, 8, 33, 27, 43, 46, 1, 29, 38,
];

const array500 = [
  9, 3, 6, 1, 8, 2, 7, 5, 4, 10, 15, 12, 11, 18, 13, 16, 20, 17, 14, 19, 22, 25,
  28, 21, 24, 27, 23, 26, 29, 30, 35, 32, 31, 38, 33, 36, 40, 37, 34, 39, 42,
  45, 48, 41, 44, 47, 43, 46, 49, 50, 55, 52, 51, 58, 53, 56, 60, 57, 54, 59,
  62, 65, 68, 61, 64, 67, 63, 66, 69, 70, 75, 72, 71, 78, 73, 76, 80, 77, 74,
  79, 82, 85, 88, 81, 84, 87, 83, 86, 89, 90, 95, 92, 91, 98, 93, 96, 100, 97,
  94, 99, 102, 105, 108, 101, 104, 107, 103, 106, 109, 110, 115, 112, 111, 118,
  113, 116, 120, 117, 114, 119, 122, 125, 128, 121, 124, 127, 123, 126, 129,
  130, 135, 132, 131, 138, 133, 136, 140, 137, 134, 139, 142, 145, 148, 141,
  144, 147, 143, 146, 149, 150, 155, 152, 151, 158, 153, 156, 160, 157, 154,
  159, 162, 165, 168, 161, 164, 167, 163, 166, 169, 170, 175, 172, 171, 178,
  173, 176, 180, 177, 174, 179, 182, 185, 188, 181, 184, 187, 183, 186, 189,
  190, 195, 192, 191, 198, 193, 196, 200, 197, 194, 199, 202, 205, 208, 201,
  204, 207, 203, 206, 209, 210, 215, 212, 211, 218, 213, 216, 220, 217, 214,
  219, 222, 225, 228, 221, 224, 227, 223, 226, 229, 230, 235, 232, 231, 238,
  233, 236, 240, 237, 234, 239, 242, 245, 248, 241, 244, 247, 243, 246, 249,
  250, 255, 252, 251, 258, 253, 256, 260, 257, 254, 259, 262, 265, 268, 261,
  264, 267, 263, 266, 269, 270, 275, 272, 271, 278, 273, 276, 280, 277, 274,
  279, 282, 285, 288, 281, 284, 287, 283, 286, 289, 290, 295, 292, 291, 298,
  293, 296, 300, 297, 294, 299, 302, 305, 308, 301, 304, 307, 303, 306, 309,
  310, 315, 312, 311, 318, 313, 316, 320, 317, 314, 319, 322, 325, 328, 321,
  324, 327, 323, 326, 329, 330, 335, 332, 331, 338, 333, 336, 340, 337, 334,
  339, 342, 345, 348, 341, 344, 347, 343, 346, 349, 350, 355, 352, 351, 358,
  353,
];

// Medir o tempo de execução do Bubble Sort
const bubble5 = medirTempo(bubbleSort, array5);
console.log(
  'Tempo de execução array com 5 números do Bubble Sort:',
  bubble5,
  'milissegundos',
);

// Medir o tempo de execução do Merge Sort
const merge5 = medirTempo(mergeSort, array5);
console.log(
  'Tempo de execução array com 5 números do Merge Sort:',
  merge5,
  'milissegundos',
);

// Medir o tempo de execução do Quick Sort
const quick5 = medirTempo(quickSort, array5);
console.log(
  'Tempo de execução array com 5 números do Quick Sort:',
  quick5,
  'milissegundos',
);

// Medir o tempo de execução do Bubble Sort
const bubble50 = medirTempo(bubbleSort, array50);
console.log(
  'Tempo de execução array com 50 númerosdo Bubble Sort:',
  bubble50,
  'milissegundos',
);

// Medir o tempo de execução do Merge Sort
const merge50 = medirTempo(mergeSort, array50);
console.log(
  'Tempo de execução array com 50 númerosdo Merge Sort:',
  merge50,
  'milissegundos',
);

// Medir o tempo de execução do Quick Sort
const quick50 = medirTempo(quickSort, array50);
console.log(
  'Tempo de execução array com 50 númerosdo Quick Sort:',
  quick50,
  'milissegundos',
);

// Medir o tempo de execução do Bubble Sort
const bubble500 = medirTempo(bubbleSort, array500);
console.log(
  'Tempo de execução array com 500 números do Bubble Sort:',
  bubble500,
  'milissegundos',
);

// Medir o tempo de execução do Merge Sort
const merge500 = medirTempo(mergeSort, array500);
console.log(
  'Tempo de execução array com 500 números do Merge Sort:',
  merge500,
  'milissegundos',
);

// Medir o tempo de execução do Quick Sort
const quick500 = medirTempo(quickSort, array500);
console.log(
  'Tempo de execução array com 500 números do Quick Sort:',
  quick500,
  'milissegundos',
);

// Função para encontrar o algoritmo com o menor tempo de execução
function menorTempo(bubble, merge, quick) {
  return bubble < merge && bubble < quick
    ? 'Bubble Sort'
    : merge < bubble && merge < quick
    ? 'Merge Sort'
    : 'Quick Sort';
}

// Encontrar o algoritmo com o menor tempo de execução para cada categoria
const menor5 = menorTempo(bubble5, merge5, quick5);
const menor50 = menorTempo(bubble50, merge50, quick50);
const menor500 = menorTempo(bubble500, merge500, quick500);

// Mostrar no console os resultados
console.log('Melhor algoritmo para array com 5 números:', menor5);
console.log('Melhor algoritmo para array com 50 números:', menor50);
console.log('Melhor algoritmo para array com 500 números:', menor500);
