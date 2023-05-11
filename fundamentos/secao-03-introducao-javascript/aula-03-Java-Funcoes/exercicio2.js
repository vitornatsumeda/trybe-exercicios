let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function adicionaClientes (client) {
//     if(typeof client === 'string') {
//         clientesTrybeBank.push(client);
//         return 'O cliente foi adicionado com sucesso!'
//     } else {
//         return 'Erro no parametro'; 
//     }
// } console.log(adicionaClientes('Carlos')); 
// console.log(clientesTrybeBank);

//--------------------------------------------------------------------------------------------------

// function removeClientes (client) {
//     if(typeof client === 'string') {
//         let clientencontrado = false;
//         for (index = 0; index < clientesTrybeBank.length; index += 1) {
//             if (client === clientesTrybeBank[index]){
//                 clientesTrybeBank.splice(index, 1);
//                 clientencontrado = true;
//                 return 'O cliente foi removido com sucesso!'
//             }
//         }
//         if (clientencontrado = false) {
//             return "Cliente nao encontrado"
//         }        
//     } else {
//         return 'Erro no parametro'; 
//     }
// } console.log(removeClientes('John')); 
// console.log(clientesTrybeBank);

//--------------------------------------------------------------------------------------------------
// Refatorando o codigo anterior

function verificaCliente(client) {
    if (typeof client !=='string'){
        return  "O parametro nao é string";
    } else { 
        return true
    }
}


function clienteIndex(client) {
    for (let index = 0; index < client.length; index += 1){
    if (client === clientesTrybeBank[index]) {
        return index;
    } else { 
        return true
    }
}
}

function removeCliente (client) {
    let validacao = verificaCliente(client);
    if (validacao !== true){
        return validacao
    }
    let index = clienteIndex(client);
    if (client === false) {
        return "Cliente nao encontrado"
    }
    clientesTrybeBank.splice(index, 1);
    return "Cliente excluido com sucesso!"
}
console.log(removeCliente('John')); 
console.log(clientesTrybeBank);