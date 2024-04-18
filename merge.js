// Declaração da função mergeSort
function mergeSort(array) {
  // Verifica se o array tem apenas um elemento (caso base)
  if (array.length <= 1) {
    return array;
  }

  // Calcula o índice do elemento do meio do array
  const mid = Math.floor(array.length / 2);

  // Divide o array em duas metades: esquerda e direita
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // Função interna para mesclar as duas metades ordenadas
  const merge = (left, right) => {
    // array para armazenar o resultado da mescla
    const result = [];
    // Índices para percorrer as metades esquerda e direita
    let leftIndex = 0;
    let rightIndex = 0;

    // Enquanto houver elementos nas duas metades
    while (leftIndex < left.length && rightIndex < right.length) {
      // Comparação entre os elementos das duas metades
      if (left[leftIndex] < right[rightIndex]) {
        // Adiciona o elemento da metade esquerda ao resultado
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        // Adiciona o elemento da metade direita ao resultado
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    // Concatena os elementos restantes da metade esquerda e direita
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  // Chama recursivamente o mergeSort para ordenar as duas metades
  return merge(mergeSort(left), mergeSort(right));
}

const array = [2, 5, 10, 0, 8, 1];
console.log(mergeSort(array)); // Chamada da função mergeSort e impressão do resultado no console

//  Para executar este script, utilize o node.js no terminal com este comando: node merge.js
