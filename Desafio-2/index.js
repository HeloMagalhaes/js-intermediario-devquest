let acordeonPerguntas = document.querySelectorAll('.acordeon-pergunta');
let numeroDaPergunta = acordeonPerguntas.length
let i =0

// quando eu apertar mostre a resposta
function mostrarResposta(){
    if(i< numeroDaPergunta){
        acordeonPerguntas[i].classList.toggle('active')
    }
}

numeroDaPergunta.addEventListener('click', mostrarResposta)
//quando eu apertar em outra pergunta, volte a ocultar as outraas respostas







// acordeonPerguntas.forEach(acordeonPergunta => {
//     acordeonPergunta.addEventListener('click', event =>{
//         if(acordeonPergunta.classList.contains('active') == true){
//             acordeonPergunta.classList.remove('active');
//         }
//         acordeonPergunta.classList.toggle('active');
//     });
// })
