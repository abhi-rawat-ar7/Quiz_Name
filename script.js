document.addEventListener("DOMContentLoaded", () => {
    fetchQuizData();
});

let currentQuestionIndex = 0;
let quizData = [];
let score = 0;
let answered = false; // Prevent multiple clicks on the same question

function fetchQuizData() {
    fetch('http://localhost:3000/quiz')  // Fetch from server
        .then(response => response.json())
        .then(data => {
            // Slice the data to get the first 10 questions
            quizData = data.slice(0, 10);
            displayQuestion();
        })
        .catch(error => console.error("Error loading quiz:", error));
}

function displayQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        // Display final score and custom message if all answers are correct
        let resultMessage = `Quiz Completed!<h3>Final Score: ${score} / ${quizData.length}</h3>`;
        if (score === quizData.length) {
            resultMessage += `<h3>Congrats, you are a genius!</h3>`;
        }
        document.getElementById("quiz-container").innerHTML = resultMessage;
        return;
    }

    answered = false; // Reset answer status for new question

    const questionData = quizData[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.innerText = option;
        button.onclick = () => checkAnswer(index, questionData.answer);
        optionsContainer.appendChild(button);
    });

    document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selectedIndex, correctAnswer) {
    if (answered) return; // Prevent multiple selections
    answered = true;

    const options = document.querySelectorAll(".option");
    options.forEach((btn, index) => {
        btn.disabled = true; // Disable buttons after selection
        if (btn.innerText === correctAnswer) {
            btn.style.backgroundColor = "green"; // Highlight correct answer
        } else if (btn === options[selectedIndex]) {
            btn.style.backgroundColor = "red"; // Highlight wrong answer
        }
    });

    if (options[selectedIndex].innerText === correctAnswer) {
        score++;  // ✅ Score updates correctly
        document.getElementById("score").innerText = `Score: ${score}`;
    }

    document.getElementById("next-btn").style.display = "block";
}

document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    displayQuestion();
});
