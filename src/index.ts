interface QuestionObj {
  id: number
  question: string
  option: string[]
  answer: number
}

const questionObj: QuestionObj[] = [
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
]

let questionNumber: any = document.querySelector('.question-number')
let questionIndex: any = document.querySelector('.current-question')
let currentQuestionText: any = document.querySelector('h5')
let questionList: any = document.querySelector('.question-list')

let numberOfQuestion: number = questionObj.length
let askedQuestions: number = 1
let currentQuestion: number = 0

const structureApp = () => {
  const element = questionObj[currentQuestion].option.map((value) => {
    return `<div class="option">${value}</div>`
  })
  questionList.innerHTML = element.join('')
}

const handlePickAnswer = () => {
  const allOptions = document.querySelectorAll('.option')
  allOptions.forEach((element: any) => {
    element.addEventListener('click', () => {
      if (askedQuestions < numberOfQuestion + 1) {
        currentQuestion++
        askedQuestions++
      } else {
        return alert('QUIZ OVER!')
      }
    })
  })
}

document.addEventListener('DOMContentLoaded', (): void => {
  structureApp()
  questionNumber.textContent = numberOfQuestion
  questionIndex.textContent = askedQuestions
  currentQuestionText.textContent = questionObj[currentQuestion].question
  handlePickAnswer()
})
