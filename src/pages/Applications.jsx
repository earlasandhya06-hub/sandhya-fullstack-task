import { useState } from "react";

function Applications() {
    const [message, setMessage] = useState("");

    function handleView() {
        setMessage("Application details displayed successfully!");
    }

    return (
        <div>
            <h2>My Applications</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>TCS</td>
                        <td>Software Developer</td>
                        <td>Under Review</td>
                    </tr>

                    <tr>
                        <td>Infosys</td>
                        <td>React Developer</td>
                        <td>Selected</td>
                    </tr>
                </tbody>
            </table>

            <br />

            <button onClick={handleView}>
                View Application
            </button>

            <p>{message}</p>
        </div>
    );
}

export default Applications;