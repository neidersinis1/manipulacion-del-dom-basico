const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultad = document.querySelector('#resultado1');
const form =document.querySelector('#form');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    resultad.innerText ="Resultado: " + sumaInputs;
}




