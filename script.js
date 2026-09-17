const buildButton = document.getElementById("build-button");
const researchQuestion = document.getElementById("research-question");
const output = document.getElementById("output");

buildButton.addEventListener("click", function () {

    const question = researchQuestion.value;

    if (question.trim() === "") {
        output.innerHTML =
            "<p class='error'>Please enter a research question first.</p>";
        return;
    }

    output.innerHTML = `
        <div class="experiment-plan">

            <h2>Your Experimental Plan</h2>

            <div class="plan-section">
                <h3>Research Question</h3>
                <p>${question}</p>
            </div>

            <div class="plan-section">
                <label for="hypothesis">Hypothesis</label>
                <textarea
                    id="hypothesis"
                    rows="3"
                    placeholder="What do you predict will happen?"
                ></textarea>
            </div>

            <div class="plan-section">
                <label for="groups">Experimental Groups</label>
                <textarea
                    id="groups"
                    rows="4"
                    placeholder="List the experimental groups needed to test your hypothesis."
                ></textarea>
            </div>

            <div class="plan-section">
                <label for="controls">Controls</label>
                <textarea
                    id="controls"
                    rows="4"
                    placeholder="What controls are needed to interpret the experiment?"
                ></textarea>
            </div>

            <div class="plan-section">
                <label for="readouts">Experimental Readouts</label>
                <textarea
                    id="readouts"
                    rows="4"
                    placeholder="What measurements or assays will answer your research question?"
                ></textarea>
            </div>

            <button id="generate-summary" type="button">
                Generate Experiment Summary
            </button>

        </div>
    `;
});
