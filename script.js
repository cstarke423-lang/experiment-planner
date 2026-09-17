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
    <h3>Endpoints & Readouts</h3>
    <p class="helper-text">
        Define what you will measure and how you will measure it.
    </p>

    <label for="primary-endpoint">Primary Endpoint</label>
    <textarea
        id="primary-endpoint"
        rows="3"
        placeholder="What is the main outcome that will determine whether your hypothesis is supported?"
    ></textarea>

    <label for="secondary-endpoints">Secondary Endpoints</label>
    <textarea
        id="secondary-endpoints"
        rows="3"
        placeholder="Optional: What additional outcomes will you evaluate?"
    ></textarea>

    <label for="readouts">Assays / Readouts</label>
    <textarea
        id="readouts"
        rows="3"
        placeholder="What assays or methods will be used to measure these outcomes?"
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

        groupCount = document.querySelectorAll(".group-card").length + 1;

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
const controls = document.getElementById("controls").value;
const primaryEndpoint = document.getElementById("primary-endpoint").value;
const secondaryEndpoints = document.getElementById("secondary-endpoints").value;
const readouts = document.getElementById("readouts").value;

const groupCards = document.querySelectorAll(".group-card");
const groups = [];

groupCards.forEach(function (card) {

    const name = card.querySelector(".group-name").value;
    const treatment = card.querySelector(".group-treatment").value;
    const size = card.querySelector(".group-size").value;
    const timepoint = card.querySelector(".group-timepoint").value;

    groups.push({
        name: name,
        treatment: treatment,
        size: size,
        timepoint: timepoint
    });

});


    const question = researchQuestion.value;
        
    const designChecks = [
    {
        label: "Research question defined",
        complete: question.trim() !== ""
    },
    {
        label: "Hypothesis defined",
        complete: hypothesis.trim() !== ""
    },
    {
        label: "At least 2 experimental groups included",
        complete: groups.length >= 2
    },
    {
        label: "Sample size specified for every group",
        complete: groups.every(function (group) {
            return group.size.trim() !== "";
        })
    },
    {
        label: "Controls defined",
        complete: controls.trim() !== ""
    },
    {
        label: "Primary endpoint identified",
        complete: primaryEndpoint.trim() !== ""
    },
    {
        label: "Assay / readout identified",
        complete: readouts.trim() !== ""
    }
];

let completedChecks = 0;
let designCheckHTML = "";

designChecks.forEach(function (check) {

    if (check.complete) {
        completedChecks++;

        designCheckHTML += `
            <div class="check-item complete">
                <span>✓</span>
                <span>${check.label}</span>
            </div>
        `;
    } else {
        designCheckHTML += `
            <div class="check-item incomplete">
                <span>⚠</span>
                <span>${check.label}</span>
            </div>
        `;
    }

});
        let groupsHTML = "";

groups.forEach(function (group, index) {

    groupsHTML += `
        <div class="summary-group">
            <h4>Group ${index + 1}: ${group.name}</h4>
            <p><strong>Treatment / Condition:</strong> ${group.treatment}</p>
            <p><strong>Sample Size:</strong> n = ${group.size}</p>
            <p><strong>Timepoint:</strong> ${group.timepoint}</p>
        </div>
    `;

});

        output.innerHTML = `
            <div class="experiment-plan">

                <h2>Experiment Summary</h2>

                <div class="design-check">

                <h3>Design Check</h3>
            
                <p class="helper-text">
                    Review the completeness of your experimental plan.
                </p>
            
                ${designCheckHTML}
            
                <p class="check-score">
                    ${completedChecks} of ${designChecks.length} planning components complete
                </p>
            
                </div>

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
                    ${groupsHTML}
                </div>

                <div class="summary-section">
                    <h3>Controls</h3>
                    <p>${controls}</p>
                </div>

                <div class="summary-section">
                    <h3>Primary Endpoint</h3>
                    <p>${primaryEndpoint}</p>
                </div>

                <div class="summary-section">
                    <h3>Secondary Endpoints</h3>
                    <p>${secondaryEndpoints || "None specified"}</p>
                </div>

                <div class="summary-section">
                    <h3>Assays / Readouts</h3>
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
