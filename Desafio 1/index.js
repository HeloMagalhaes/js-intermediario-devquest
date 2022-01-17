let setaEsquerda = document.getElementById('seta-esquerda')
let setaDireita = document.getElementById('seta-direita')
let slide = document.querySelectorAll('.slide')
let ativarSlide = document.getElementsByClassName('slide-ativo')
let i = 1;

function avancarSlide() {
    slide.forEach(item => {
        item.classList.remove('slide-ativo')
    }
    )

    if (i <= slide.length) {
        slide[i].classList.add('slide-ativo')
        i++
        setaEsquerda.classList.remove('opacidade')
    }

    if (i >= 4){
        setaDireita.classList.add('opacidade')
    }
}
setaDireita.addEventListener('click', avancarSlide)

function retornarSlide(){
    slide.forEach(item => {
        item.classList.remove('slide-ativo')
    }
    )
    
   if(i >= slide.length){
        slide[i].classList.add('slide-ativo')
        i-- 
   }
}
setaEsquerda.addEventListener('click', avancarSlide)

