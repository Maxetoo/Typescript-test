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
let questionNumber = document.querySelector('.question-number');
let questionIndex = document.querySelector('.current-question');
let currentQuestionText = document.querySelector('h5');
let questionList = document.querySelector('.question-list');
let numberOfQuestion = questionObj.length;
let askedQuestions = 1;
let currentQuestion = 0;
const structureApp = () => {
    const element = questionObj[currentQuestion].option.map((value) => {
        return `<div class="option">${value}</div>`;
    });
    questionList.innerHTML = element.join('');
};
const handlePickAnswer = () => {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach((element) => {
        element.addEventListener('click', () => {
            if (askedQuestions < numberOfQuestion + 1) {
                currentQuestion++;
                askedQuestions++;
            }
            else {
                return alert('QUIZ OVER!');
            }
        });
    });
};
document.addEventListener('DOMContentLoaded', () => {
    structureApp();
    questionNumber.textContent = numberOfQuestion;
    questionIndex.textContent = askedQuestions;
    currentQuestionText.textContent = questionObj[currentQuestion].question;
    handlePickAnswer();
});
