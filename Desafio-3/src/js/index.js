const input = document.querySelectorAll('input')
const textarea = document.getElementById('textarea')
const enviar = document.getElementById('button')
const mensagemDeValidacao = document.getElementsByClassName('validacao')

input[0].addEventListener("blur", function (element) {
    const value = element.target.value;
    if (value == "") {
        mensagemDeValidacao[0].style.opacity = '100%';
        element.target.style.border = '1px solid red';
    } else {
        mensagemDeValidacao[0].style.opacity = '0';
        element.target.style.border = '1px solid green';
    }
});

input[1].addEventListener("blur", function (element) {
    const value = element.target.value;
    if (value == "") {
        mensagemDeValidacao[1].style.opacity = '100%';
        element.target.style.border = '1px solid red';
    } else {
        mensagemDeValidacao[1].style.opacity = '0';
        element.target.style.border = '1px solid green';
    }
});

input[2].addEventListener("blur", function (element) {
    const value = element.target.value;
    if (value == "") {
        mensagemDeValidacao[2].style.opacity = '100%';
        element.target.style.border = '1px solid red';
    } else {
        mensagemDeValidacao[2].style.opacity = '0';
        element.target.style.border = '1px solid green';
    }
});

textarea.addEventListener("blur", function (element) {
    const value = element.target.value;
    if (value == "") {
        mensagemDeValidacao[0].style.opacity = '100%';
        element.target.style.border = '1px solid red';
    } else {
        element.target.style.border = '1px solid green';
    }
});




