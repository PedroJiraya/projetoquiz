
//initial Data
let currentQuestion = 0;
let correctAnswers = 0

//Functions
showQuestion()
function showQuestion (){
    if(questions[currentQuestion]){
        let q = questions[currentQuestion]
        let pct = (currentQuestion / questions.length ) * 100

        document.querySelector('.scoreArea').style.display = 'none'
        document.querySelector('.questionArea').style.display = 'block'
        document.querySelector('.question').innerHTML = q.question
        document.querySelector('.options').innerHTML = '';
        document.querySelector('.progress--bar').style.width = `${pct}%`
        for (i in q.options){
            document.querySelector('.options').innerHTML += `<div data-op="${i}"class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`
        }
        document.querySelectorAll('.options .option').forEach(item=>{
            item.addEventListener('click', optionClickEvent)
        })

    }else{
        
        finishQuiz()
    }
}

function optionClickEvent(e){
    let clickedOption = parseInt(e.target.getAttribute('data-op'))
    if (questions[currentQuestion].answer === clickedOption){
        correctAnswers ++
    }
    currentQuestion ++
    showQuestion()

}

function finishQuiz(){
    document.querySelector('.progress--bar').style.width = '100%'
    document.querySelector('.scorePct').innerHTML = `Acertou ${(correctAnswers / questions.length) * 100}%`
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`
    document.querySelector('.scoreArea').style.display = 'block'
    document.querySelector('.questionArea').style.display = 'none'
}

function reiniciar (){
    currentQuestion = 0;
    showQuestion()
}