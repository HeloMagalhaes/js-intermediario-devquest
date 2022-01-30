let setaEsquerda = document.getElementById('seta-esquerda')
let setaDireita = document.getElementById('seta-direita')
let slide = document.querySelectorAll('.slide')
let ativarSlide = document.getElementsByClassName('slide-ativo')
let i = 1;

function avancarSlide() {
    slide.forEach(item => {
        if (i !== 4) {
            item.classList.remove('slide-ativo')
        }
    }
    )

    if (i <= slide.length) {
        slide[i].classList.add('slide-ativo')
        i++
        setaEsquerda.classList.remove('opacidade')
    }

    if (i === 4) {
        setaDireita.classList.add('opacidade')
    }
}
setaDireita.addEventListener('click', avancarSlide)

function retornarSlide() {
    slide.forEach(item => {
        if (i !== 0) {
            item.classList.remove('slide-ativo')
        }
    }
    )

    if (i <= slide.length) {
        i--
        slide[i].classList.add('slide-ativo')
    }
    if (i <= 4) {
        setaDireita.classList.remove('opacidade')
    }
    if (i === 0) {
        setaEsquerda.classList.add('opacidade')
    }
}
setaEsquerda.addEventListener('click', retornarSlide)

