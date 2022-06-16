"use strict";
const questionObj = [
    {
        id: 0,
        question: 'WHAT IS MY NAME?',
        option: ['Maxwell', 'Emily', 'Seyi', 'Emma'],
        answer: 0,
    },
    {
        id: 1,
        question: 'ANOTHER NAME FOR FOOTBALL IS?',
        option: ['Tennis', 'Baseball', 'Ruby', 'Soccer'],
        answer: 3,
    },
    {
        id: 2,
        question: 'MY FAVOURITE COLOR IS?',
        option: ['Green', 'Blue', 'Purple', 'Black'],
        answer: 1,
    },
    {
        id: 3,
        question: "WORLD'S RICHEST MAN IS?",
        option: ['Maxwell', 'Elon', 'Jeff', 'Warren'],
        answer: 1,
    },
];
let quizContainer = document.querySelector('.quiz-container');
let questionNumber = document.querySelector('.question-number');
let questionIndex = document.querySelector('.current-question');
let currentQuestionText = document.querySelector('h5');
let questionList = document.querySelector('.question-list');
let option;
let numberOfQuestion = questionObj.length;
let askedQuestions = 1;
let currentQuestion = 0;
let score = 0;
document.addEventListener('DOMContentLoaded', () => {
    questionNumber.textContent = numberOfQuestion;
    structureApp(currentQuestion);
});
const structureApp = (current) => {
    const element = questionObj[current].option.map((value) => {
        return `<div class="option">${value}</div>`;
    });
    questionList.innerHTML = element.join('');
    questionIndex.innerHTML = askedQuestions;
    currentQuestionText.textContent = questionObj[current].question;
    handlePickAnswer(current);
};
const handlePickAnswer = (currentQuestion) => {
    const allOptions = questionList.querySelectorAll('.option');
    allOptions.forEach((element, index) => {
        element.addEventListener('click', () => {
            if (index === questionObj[currentQuestion].answer) {
                score++;
            }
            if (currentQuestion < numberOfQuestion - 1) {
                currentQuestion++;
                askedQuestions++;
            }
            else {
                gameEnded();
            }
            structureApp(currentQuestion);
        });
    });
};
const gameEnded = () => {
    const gameOver = `<div class="game-over">
                <h4>Game Over</h4>
                <p>You scored ${score} out of ${numberOfQuestion} questions</p>
                <div class="btn-container">
                    <button type="button" class="retry-btn">RETRY</button>
                </div>
            </div>`;
    quizContainer.innerHTML = gameOver;
    const btn = quizContainer.querySelector('.retry-btn');
    btn.addEventListener('click', () => {
        window.location.reload();
    });
};
handlePickAnswer(currentQuestion);
