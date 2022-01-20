const input = document.querySelectorAll('input')
const textarea = document.querySelectorAll('textarea')
const enviar = document.getElementById('button')
const mensagemDeValidacao = document.getElementsByClassName('validacao')

const inputName = input[0].value;
const inputEmail = input[1].value;
const inputTelefone = input[2].value;
const textareaValue = textarea.value;



input[0].addEventListener("blur", function () {
    if (inputName == "") {
        mensagemDeValidacao[0].style.opacity = '100%';
        input[0].style.border = '1px solid red';
    } else {
        input[0].style.border = '1px solid green';
    }
});

input[1].addEventListener('blur', function () {
    if (inputEmail == "") {
        mensagemDeValidacao[1].style.opacity = '100%';
        input[1].style.border = '1px solid red';

    } else {
        input[1].style.border = '1px solid green';
    }
})

input[2].addEventListener('blur', function () {
    if (inputTelefone == "") {
        mensagemDeValidacao[2].style.opacity = '100%';
        input[2].style.border = '1px solid red';

    } else {
        input[2].style.border = '1px solid green';
    }

})

textarea.addEventListener('blur', function () {
    if (textareaValue == '') {
        mensagemDeValidacao[3].style.opacity = '100%';
        textarea.style.border = '1px solid red';

    } else {
        textarea.style.border = '1px solid green'
    }
})




