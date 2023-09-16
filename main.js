const form = document.getElementById('form-agenda');
const inputContato = document.getElementById('nome-contato');
const inputDDD = document.getElementById('ddd-telefone')
const inputNumero = document.getElementById('numero-telefone');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
})

function adicionaLinha () {
    const telefoneCompleto = inputDDD + ' ' + inputNumero;

    if (contato.includes(inputContato.value)) {
        alert(`O contato: ${inputContato.value} ja foi inserido!`);
    } else {        
            let linha = '<tr>';
            linha += `<td>${inputContato.value}</td>`;
            linha += `<td>${telefoneCompleto.value}</td>`;
            linha += `</tr>`;
            
            linhas += linha
        }

        inputNomeAtividade.value='';
        inputNotaAtividade.value='';
}