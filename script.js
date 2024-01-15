const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionElement = document.getElementById('questionContainer')
startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click')

function startGame() {
    startBtn.classList.add('hide')
    questionElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    nextBtn.classList.remove('hide')
}


const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            {text: 'Berlin', correct: false},
            {text: 'London', correct: false},
            {text: 'Madrid', correct: false},
            {text: 'Paris', correct: true}
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            {text: 'Venus', correct: false},
            {text: 'Mars', correct: true},
            {text: 'Jupiter', correct: false},
            {text: 'Saturn', correct: false}

        ]
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        answers: [
            {text: 'Charles Dickens', correct: false},
            {text: 'William Shakespeare', correct: true},
            {text: 'Jane Austen', correct: false},
            {text: 'Mark Twain', correct: false}

        ]
    },
    {
        question: 'What is the largest mammal in the world?',
        answers: [
            {text: 'African Elephant', correct: false},
            {text: 'Blue Whale', correct: true},
            {text: 'Giraffe', correct: false},
            {text: 'Hippopotamus', correct: false}

        ]
    },
    {
        question: 'Which element is represented by the symbol "O" in the periodic table?',
        answers: [
            {text: 'Gold', correct: false},
            {text: 'Oxygen', correct: true},
            {text: 'Osmium', correct: false},
            {text: 'Iron', correct: false}

        ]
    },
    {
        question: 'In which year did the Titanic sink?',
        answers: [
            {text: '1912', correct: true},
            {text: '1920', correct: false},
            {text: '1905', correct: false},
            {text: '1918', correct: false}

        ]
    },
    {
        question: 'What is the capital of Japan?',
        answers: [
            {text: 'Seoul', correct: false},
            {text: 'Beijing', correct: false},
            {text: 'Tokyo', correct: true},
            {text: 'Bangkok', correct: false}

        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            {text: 'Vincent Van Gogh', correct: false},
            {text: 'Pablo Picasso', correct: false},
            {text: 'Leonardo da Vinci', correct: true},
            {text: 'Michelangelo', correct: false}

        ]
    },
    {
        question: ' Which is the longest river in the world?',
        answers: [
            {text: 'Nile', correct: false},
            {text: 'Amazon', correct: true},
            {text: 'Yangtze', correct: false},
            {text: 'Mississippi', correct: false}

        ]
    },
    {
        question: 'In computer science, what does "AI" stand for?',
        answers: [
            {text: 'Automated Intelligence', correct: false},
            {text: 'Artificial Intelligence', correct: true},
            {text: 'Advanced Implementation', correct: false},
            {text: 'Analog Input', correct: false}

        ]
    }
]