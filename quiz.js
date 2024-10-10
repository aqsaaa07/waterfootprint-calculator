function checkAnswers() {
    // Correct answers
    const correctAnswers = {
        question1: "11-15 MIN",
        question2: "5-20 MIN",
        question3: "5-20 MIN",
        question4: "With Hands",
        question5: "With Hands"
    };

    // Get user answers
    const form = document.getElementById('quiz-section');
    const userAnswers = new FormData(form);

    let score = 0;
    let totalQuestions = 5;

    for (let [question, answer] of userAnswers.entries()) {
        if (correctAnswers[question] === answer) {
            score++;
        }
    }

    window.location.href = `result.html?score=${score}&total=${totalQuestions}`;
}