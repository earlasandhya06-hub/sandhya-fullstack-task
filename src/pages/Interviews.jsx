import { useState } from "react";

function Interviews() {
    const [message, setMessage] = useState("");

    function handleConfirm(company) {
        setMessage("Interview confirmed for " + company);
    }

    return (
        <div>
            <h2>Interview Schedule</h2>

            <h3>TCS</h3>
            <p>Date: 15 October 2026</p>
            <p>Time: 10:00 AM</p>

            <button onClick={() => handleConfirm("TCS")}>
                Confirm Interview
            </button>

            <hr />

            <h3>Infosys</h3>
            <p>Date: 18 October 2026</p>
            <p>Time: 2:00 PM</p>

            <button onClick={() => handleConfirm("Infosys")}>
                Confirm Interview
            </button>

            <br /><br />

            <p>{message}</p>
        </div>
    );
}

export default Interviews;