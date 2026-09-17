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
document.addEventListener("click", function (event) {

    if (event.target.id === "generate-summary") {

        const hypothesis = document.getElementById("hypothesis").value;
        const groups = document.getElementById("groups").value;
        const controls = document.getElementById("controls").value;
        const readouts = document.getElementById("readouts").value;

        if (
            hypothesis.trim() === "" ||
            groups.trim() === "" ||
            controls.trim() === "" ||
            readouts.trim() === ""
        ) {
            alert("Please complete all sections before generating your summary.");
            return;
        }

        const question = researchQuestion.value;

        output.innerHTML = `
            <div class="experiment-plan">

                <h2>Experiment Summary</h2>

                <div class="summary-section">
                    <h3>Research Question</h3>
                    <p>${question}</p>
                </div>

                <div class="summary-section">
                    <h3>Hypothesis</h3>
                    <p>${hypothesis}</p>
                </div>

                <div class="summary-section">
                    <h3>Experimental Groups</h3>
                    <p>${groups}</p>
                </div>

                <div class="summary-section">
                    <h3>Controls</h3>
                    <p>${controls}</p>
                </div>

                <div class="summary-section">
                    <h3>Experimental Readouts</h3>
                    <p>${readouts}</p>
                </div>

                <button id="start-over" type="button">
                    Start New Experiment
                </button>

            </div>
        `;
    }

});
