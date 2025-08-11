/* Função que exibe o valor no visor da calculadora
   e trata a entrada de operadores para evitar erros de sintaxe.
   Se o último caractere for um operador e o novo valor também for um operador,
   ele substitui o último operador pelo novo valor.
   Caso contrário, adiciona o novo valor ao visor. 
*/
function aparecerNoVisor(valor) {
    const visor = document.getElementById('visor'); // Obtém o elemento visor da calculadora
    const operadores = ['+', '-', '*', '/']; // Define os operadores válidos
    const texto = visor.value; // Verifica o texto atual do visor

    if (operadores.includes(texto.slice(-1)) && operadores.includes(valor)) { // Se o último caractere for um operado e o novo valor também for, ele entra na condição
        visor.value = texto.slice(0, -1); // Remove o último caractere (operador)
    }

    visor.value += valor; // Adiciona o valor no visor
}

/* Função que avalia e calcula expressões matemáticas, utilizando a função eval.
   Se ocorrer um erro na avaliação, exibe "Erro" no visor.
   A função também limpa o visor antes de calcular o resultado.
*/
function calcularResultado() {
    const visor = document.getElementById('visor'); // Obtém o elemento visor da calculadora
    try { // Tenta avaliar a expressão no visor
        visor.value = eval(visor.value); // Avalia a expressão matemática
    } catch (error) { // Se ocorrer um erro na avaliação
        visor.value = 'Erro'; // Exibe "Erro" no visor
    }
}

/* Função que limpa o visor da calculadora, removendo todo o texto exibido.
   É chamada quando o usuário deseja reiniciar a calculadora.
*/
function limparVisor() {
    const visor = document.getElementById('visor'); // Obtém o elemento visor da calculadora
    visor.value = ''; // Limpa o visor, removendo todo o texto exibido
}