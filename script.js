const startBtn = document.querySelector('.start-btn');
const popUp = document.querySelector('.popup');
const exitBtn = document.querySelector('.exit-btn');
const main= document.querySelector('.main');
const conBtn = document.querySelector('.conti-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');


startBtn.onclick =() => {
    popUp.classList.add('active');
    main.classList.add('active');
}
exitBtn.onclick =() => {
    popUp.classList.remove('active');
    main.classList.remove('active');

}

conBtn.onclick = () => {
    quizSection.classList.add('active');
    popUp.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0)
}

let questionCount = 0;
const nextBtn = document.querySelector('.next-btn');
nextBtn.onclick = () => {
    questionCount++;
    showQuestions(questionCount);


}

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textcontent = `${questions[index].numb}. ${questions[index].question}`;
}