const input = document.querySelectorAll('input')
const textarea = document.getElementById('textarea')
const enviar = document.getElementById('button')
const mensagemDeValidacao = document.getElementsByClassName('validacao')
const submitButton = document.getElementById('enviar')

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
        mensagemDeValidacao[3].style.opacity = '100%';
        element.target.style.border = '1px solid red';
    } else {
        element.target.style.border = '1px solid green';
    }
});

submitButton.addEventListener("click", function () {
    if (input[0].value === "") {
        mensagemDeValidacao[0].style.opacity = '100%';
        input[0].style.border = '1px solid red';
    }
    if (input[1].value === "") {
        mensagemDeValidacao[1].style.opacity = '100%';
        input[1].style.border = '1px solid red';
    }
    if (input[2].value === "") {
        mensagemDeValidacao[2].style.opacity = '100%';
        input[2].style.border = '1px solid red';
    }
    if (textarea.value === "") {
        mensagemDeValidacao[3].style.opacity = '100%';
        textarea.style.border = '1px solid red';
    }
}
)



