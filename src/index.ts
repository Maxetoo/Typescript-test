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

let quizContainer: any = document.querySelector('.quiz-container')
let questionNumber: any = document.querySelector('.question-number')
let questionIndex: any = document.querySelector('.current-question')
let currentQuestionText: any = document.querySelector('h5')
let questionList: any = document.querySelector('.question-list')
let option: any
let numberOfQuestion: number = questionObj.length
let askedQuestions: number = 1
let currentQuestion: number = 0
let score: number = 0

document.addEventListener('DOMContentLoaded', () => {
  questionNumber.textContent = numberOfQuestion
  structureApp(currentQuestion)
})

const structureApp = (current: number) => {
  const element = questionObj[current].option.map((value) => {
    return `<div class="option">${value}</div>`
  })
  questionList.innerHTML = element.join('')
  questionIndex.innerHTML = askedQuestions
  currentQuestionText.textContent = questionObj[current].question
  handlePickAnswer(current)
}

const handlePickAnswer = (currentQuestion: number) => {
  const allOptions: any = questionList.querySelectorAll('.option')

  allOptions.forEach((element: any, index: number) => {
    element.addEventListener('click', () => {
      if (index === questionObj[currentQuestion].answer) {
        score++
      }
      if (currentQuestion < numberOfQuestion - 1) {
        currentQuestion++
        askedQuestions++
      } else {
        gameEnded()
      }

      structureApp(currentQuestion)
    })
  })
}

const gameEnded = (): void => {
  const gameOver = `<div class="game-over">
                <h4>Game Over</h4>
                <p>You scored ${score} out of ${numberOfQuestion} questions</p>
                <div class="btn-container">
                    <button type="button" class="retry-btn">RETRY</button>
                </div>
            </div>`
  quizContainer.innerHTML = gameOver
  const btn = quizContainer.querySelector('.retry-btn')
  btn.addEventListener('click', () => {
    window.location.reload()
  })
}

handlePickAnswer(currentQuestion)
