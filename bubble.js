// Declaração da função bubbleSort
function bubbleSort(array) {
  // Obtém o comprimento do array
  const lista = array.length;

  // Loop externo: percorre os elementos do array
  for (let i = 0; i < lista - 1; i++) {
    // Loop interno: compara e troca elementos
    for (let j = 0; j < lista - 1 - i; j++) {
      // Compara elementos adjacentes
      if (array[j] > array[j + 1]) {
        // Troca os elementos de posição
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  // Retorna o array ordenado
  return array;
}

// Array de exemplo
const array = [2, 5, 10, 0, 8, 1];

// Chamada da função bubbleSort e impressão do resultado
console.log(bubbleSort(array));

//  Para executar este script, utilize o node.js no terminal com este comando: node bubble.js
