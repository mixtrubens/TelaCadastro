'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)


var form = document.getElementById('formulario');
var field1 = document.getElementById('field1');
var field2 = document.getElementById('field2');
var field3 = document.getElementById('field3');
var field4 = document.getElementById('field4');

form.addEventListener('submit', function(e) {
    // alerta o valor do field1
    alert('Cadastro Realizado');
    document.getElementById("001").innerHTML = field1.value;
    document.getElementById("002").innerHTML = field2.value;
    document.getElementById("003").innerHTML = field3.value;
    document.getElementById("004").innerHTML = field4.value;
    // impede o envio do form
    e.preventDefault();
});
