const form = document.getElementById("formulario")
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome');
    const inputNumeroContato = document.getElementById('numero');


    let linha = '<tr>';
    linha +=`<td> ${inputNomeContato.value} </td>`;
    linha +=`<td> ${inputNumeroContato.value} </td>`; 
    linha += `</tr>`;
    
    linhas += linha;

    const agendatabela = document.querySelector('tbody');
    agendatabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';

});


