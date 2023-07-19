const questions = [{
    'que': "which of the following is markup languge?",
    'a': "HTML",
    'b': "CSS",
    'c': "JAvascript",
    'd': "PHP",
    'correct': "a"
},
{
    'que': "what year was javascript launched?",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "None of the above",
    'correct': "b",
},
{
    'que': 'what does css stands for?',
    'a': 'Hypertext markup language',
    'b': 'Cascading style sheet',
    'c': "jason",
    'd': "terminals",
    'correct': "b",
},
]
let index = [0]
let total = questions.length;
let right = 0;
wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestions = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans == data.correct) {
        right++
    } else {
        wrong++
    }
    index++
    loadQuestions()
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style ="text-align:center" >
        <h3> Thankyou for playing the quiz </h3>
            <h2> ${right} / ${total} </h2>
            `
}
loadQuestions();