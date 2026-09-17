const buildButton = document.getElementById("build-button");
const researchQuestion = document.getElementById("research-question");
const output = document.getElementById("output");

buildButton.addEventListener("click", function () {

    const question = researchQuestion.value;

    if (question.trim() === "") {
        output.innerHTML = "<p>Please enter a research question first.</p>";
        return;
    }

    output.innerHTML = `
        <h2>Your Experimental Plan</h2>

        <div class="plan-section">
            <h3>Research Question</h3>
            <p>${question}</p>
        </div>

        <div class="plan-section">
            <h3>Next Steps</h3>
            <p>
                Great start. Next, we'll define your hypothesis,
                experimental groups, controls, and readouts.
            </p>
        </div>
    `;
});
