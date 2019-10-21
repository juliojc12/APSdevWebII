const numeroCandidato = document.querySelector('.w3-input')
const candidato1 = document.querySelector('.candidato1')
const candidato2 = document.querySelector('.candidato2')
const candidato3 = document.querySelector('.candidato3')
const none = document.querySelector('.candidatoNone')
const btnCandidato = document.querySelector('.w3-btn')


btnCandidato.addEventListener('click', event =>{
    if (numeroCandidato.value != '157' && numeroCandidato.value != '171' && numeroCandidato.value != '204' && numeroCandidato.value != '') {
        none.style.display = "block"
        candidato1.style.display = "none"
        candidato2.style.display = "none"
        candidato3.style.display = "none"
        numeroCandidato.value = ''
    }
   
    if(numeroCandidato.value === '157'){
        candidato1.style.display = "block"
        candidato2.style.display = "none"
        candidato3.style.display = "none"
        none.style.display = "none"
        numeroCandidato.value = ''
    }
        
    if (numeroCandidato.value === '171'){
        candidato1.style.display = "none"
        candidato2.style.display = "block"
        candidato3.style.display = "none"
        none.style.display = "none"
        numeroCandidato.value = ''
    } 
    if (numeroCandidato.value === '204'){
        candidato1.style.display = "none"
        candidato2.style.display = "none"
        candidato3.style.display = "block"
        none.style.display = "none"
        numeroCandidato.value = ''
    }

})
