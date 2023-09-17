const form = document.getElementById('form-agenda');
const inputContato = document.getElementById('nome-contato');
const inputTel = document.getElementById('numero-telefone');
let linhas = [];
let numerosTelefone = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaLista();
})

function formataTelefone(telefone) {
    if (telefone.length >= 10) {
        const ddd = telefone.substring(0, 2);
        const numero = telefone.substring(2);
        return `(${ddd}) ${numero}`;
    } else {
        return telefone;
    }
}

function adicionaLinha (){
    const numeroTelefoneFormatado = formataTelefone(inputTel.value);

    if (numerosTelefone.includes(numeroTelefoneFormatado)) {
        alert(`O número de telefone: ${numeroTelefoneFormatado} já foi inserido`);
    } else {
        let linha = '<tr>';

        linha += `<td>${inputContato.value}</td>`;
        linha += `<td>${numeroTelefoneFormatado}</td>`;
        linha += '</tr>';
    
        linhas.push(linha);
        numerosTelefone.push(numeroTelefoneFormatado);
    
        inputContato.value = '';
        inputTel.value = '';
    }
}

function atualizaLista () {
    const corpoLista = document.querySelector('tbody');
    corpoLista.innerHTML = linhas.join('');
}
