"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function adicionarNumero(numero1, numero2, deveprintar, frase) {
    let resultado = numero1 + numero2;
    if (deveprintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}
let deveprintar = true;
let frase;
frase = 'O valor é: ';
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), deveprintar, frase));
        }
    });
}
