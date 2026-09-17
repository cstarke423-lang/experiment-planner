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
    <h3>Experimental Groups</h3>
    <p class="helper-text">
        Add each group included in your experimental design.
    </p>

    <div id="groups-container">

        <div class="group-card">

            <h4>Group 1</h4>

            <label>Group Name</label>
            <input
                type="text"
                class="group-name"
                placeholder="e.g., Untreated control"
            >

            <label>Treatment / Condition</label>
            <input
                type="text"
                class="group-treatment"
                placeholder="e.g., No treatment"
            >

            <label>Sample Size (n)</label>
            <input
                type="number"
                class="group-size"
                min="1"
                placeholder="e.g., 3"
            >

            <label>Timepoint</label>
            <input
                type="text"
                class="group-timepoint"
                placeholder="e.g., 72 hours"
            >

        </div>

    </div>

    <button id="add-group" type="button" class="secondary-button">
        + Add Experimental Group
    </button>

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
    let groupCount = 1;

    const addGroupButton = document.getElementById("add-group");
    const groupsContainer = document.getElementById("groups-container");

    addGroupButton.addEventListener("click", function () {

        groupCount++;

        const newGroup = document.createElement("div");
        newGroup.classList.add("group-card");

        newGroup.innerHTML = `
            <h4>Group ${groupCount}</h4>

            <label>Group Name</label>
            <input
                type="text"
                class="group-name"
                placeholder="e.g., Treatment X"
            >

            <label>Treatment / Condition</label>
            <input
                type="text"
                class="group-treatment"
                placeholder="e.g., 10 µg/mL Treatment X"
            >

            <label>Sample Size (n)</label>
            <input
                type="number"
                class="group-size"
                min="1"
                placeholder="e.g., 3"
            >

            <label>Timepoint</label>
            <input
                type="text"
                class="group-timepoint"
                placeholder="e.g., 72 hours"
            >

            <button type="button" class="remove-group">
                Remove Group
            </button>
        `;

        groupsContainer.appendChild(newGroup);
    });
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

document.addEventListener("click", function (event) {

    if (event.target.id === "start-over") {

        researchQuestion.value = "";
        output.innerHTML = "";

        researchQuestion.focus();
    }

});

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("remove-group")) {

        event.target.closest(".group-card").remove();

        const groupCards = document.querySelectorAll(".group-card");

        groupCards.forEach(function (card, index) {
            card.querySelector("h4").textContent = `Group ${index + 1}`;
        });
    }

});
