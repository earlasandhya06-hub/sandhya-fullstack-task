import { useState } from "react";

function Jobs() {
    const [message, setMessage] = useState("");

    function handleApply(company) {
        setMessage("Application submitted successfully for " + company);
    }

    return (
        <div>
            <h2>Job Openings</h2>

            <h3>TCS</h3>
            <p>Position: Software Developer</p>
            <button onClick={() => handleApply("TCS")}>
                Apply
            </button>

            <hr />

            <h3>Infosys</h3>
            <p>Position: React Developer</p>
            <button onClick={() => handleApply("Infosys")}>
                Apply
            </button>

            <hr />

            <h3>Wipro</h3>
            <p>Position: Java Developer</p>
            <button onClick={() => handleApply("Wipro")}>
                Apply
            </button>

            <br /><br />

            <p>{message}</p>
        </div>
    );
}

export default Jobs;