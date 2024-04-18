Algoritmos de Ordenação em JavaScript
=====================================

Este repositório contém implementações em JavaScript de três algoritmos de ordenação populares: Bubble Sort, Merge Sort e Quick Sort. Além disso, incluí uma função para medir o tempo de execução de cada algoritmo para diferentes tamanhos de array.

Como Utilizar
-------------

Para testar os algoritmos de ordenação, você precisará do Node.js instalado em sua máquina.

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Navegue até o Diretório:**

   ```bash
   cd nome-do-repositorio
   ```

3. **Executar os Testes:**

   Para testar os algoritmos de ordenação, você pode executar os arquivos no terminal usando o Node.js. Por exemplo, para testar o Bubble Sort:

   ```bash
   node index.js bubble
   ```

   Substitua `bubble` por `merge` ou `quick` ou por `compara` para testar os outros algoritmos.

Algoritmos Implementados
------------------------

### Bubble Sort

O Bubble Sort é um algoritmo simples de ordenação que percorre repetidamente a lista, compara elementos adjacentes e os troca se estiverem na ordem errada. Esse processo continua até que nenhum swap seja necessário, indicando que a lista está ordenada.

### Merge Sort

O Merge Sort é um algoritmo de ordenação baseado na técnica de dividir para conquistar. Ele divide a lista não ordenada em n sub-listas, cada uma contendo um único elemento, e então mescla essas sub-listas repetidamente para produzir novas sub-listas ordenadas até que haja apenas uma sub-lista restante.

### Quick Sort

O Quick Sort é outro algoritmo de ordenação baseado na técnica de dividir para conquistar. Ele seleciona um elemento como pivô e particiona a lista ao redor do pivô, de modo que os elementos menores que o pivô estejam à esquerda e os maiores estejam à direita. O processo é então aplicado recursivamente às sub-listas resultantes.

Medição de Desempenho
----------------------

Para medir o desempenho de cada algoritmo de ordenação, esta implementação inclui uma função que calcula o tempo de execução para 3 arrays diferentes uma com 5 outra com 50 e por fim com 500. Os resultados podem ser encontrados no arquivo.
