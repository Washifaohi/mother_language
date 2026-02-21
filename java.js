// Select the quiz form and result div
const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

// Define correct answers for each question
const correctAnswers = {
    q1: "1952",
    q2: "Promote mother languages",
    q3: "Shaheed Minar",
    q4: "UNESCO",
    q5: "For cultural identity",
    q6: "Dhaka",
    q7: "Students of Dhaka University",
    q8: "Bengali",
    q9: "21 February",
    q10: "2000",
    q11: "Shaheed Minar",
    q12: "Students",
    q13: "For linguistic rights",
    q14: "Shaheed Minar",
    q15: "Language competitions"
};

// Handle quiz submission
quizForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    let score = 0;

    // Loop through all correct answers
    for (let question in correctAnswers) {
        const selected = quizForm.elements[question];
        if (selected) {
            for (let i = 0; i < selected.length; i++) {
                if (selected[i].checked && selected[i].value === correctAnswers[question]) {
                    score++;
                }
            }
        }
    }

    // Display result
    resultDiv.innerHTML = `<p>You scored <strong>${score}</strong> out of 15!</p>`;

    // Optional: add feedback based on score
    if (score === 15) {
        resultDiv.innerHTML += `<p>Perfect! You're a language champion 🌏</p>`;
    } else if (score >= 10) {
        resultDiv.innerHTML += `<p>Great job! You know a lot about International Mother Language Day.</p>`;
    } else {
        resultDiv.innerHTML += `<p>Keep learning! Language is the key to culture.</p>`;
    }
});

const tooltip = document.getElementById("tooltip");

/* TOGGLE CHILDREN */
document.querySelectorAll(".family, .branch").forEach(node => {
    node.addEventListener("click", e => {
        e.stopPropagation();
        const child = node.querySelector(".children");
        if (child) {
            child.style.display =
                child.style.display === "none" ? "flex" : "none";
        }
    });
});

/* TOOLTIP */
document.querySelectorAll(".language").forEach(node => {

    node.addEventListener("mouseenter", e => {
        tooltip.style.display = "block";
        tooltip.innerHTML = `
            <strong>${node.dataset.name}</strong><br>
            Family: ${node.dataset.family}<br>
            Branch: ${node.dataset.branch}<br>
            Region: ${node.dataset.region}<br>
            Speakers: ${node.dataset.speakers}
        `;
    });

    node.addEventListener("mousemove", e => {
        tooltip.style.left = e.pageX + 15 + "px";
        tooltip.style.top = e.pageY + 15 + "px";
    });

    node.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
});

/* HIGHLIGHT PATH */
document.querySelectorAll(".node").forEach(node => {
    node.addEventListener("click", e => {
        e.stopPropagation();

        clearHighlight();

        let current = node;

        while (current) {
            current.classList.add("active");
            current = current.parentElement.closest(".node");
        }

        if (node.dataset.name === "Bangla") {
            showBanglaPanel();
        }
    });
});

function clearHighlight() {
    document.querySelectorAll(".node").forEach(n => {
        n.classList.remove("active");
    });
}

/* BANGLA PANEL */
function showBanglaPanel() {
    const panel = document.getElementById("banglaPanel");
    panel.style.display = "block";
    panel.scrollIntoView({ behavior: "smooth" });
}