let setaEsquerda = document.getElementsByClassName('seta-esquerda')
let setaDireita = document.getElementsByClassName('seta-direita')
let slide = document.getElementsByClassName('slide')

let ativarSlide = document.getElementsByClassName('slide-ativo')
let i = 1;

function avancarSlide() {
    slide.forEach(function(indice){
    console.log('slide: ' + indice)
}
)
    
 if (i <= slide.length){
     slide[i].classList.add('slide-ativo')
     i++   
 }
 
 
 if (i >= 3){
    setaEsquerda.classList.add('opacidade')
}
}
setaDireita.addEventListener('click', avancarSlide()) 

// function retornarSlide() {
   
//   if (i <= tamanhoDoSlide){
//         console.log(slide[i].classList)
//         slide[i].classList.remove('slide-ativo')
        
//     i--
//     }
// }


