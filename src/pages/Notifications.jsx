import { useState } from "react";

function Notifications() {
    const [message, setMessage] = useState("");

    function handleRead() {
        setMessage("All notifications marked as read!");
    }

    return (
        <div>
            <h2>Notifications</h2>

            <p>Interview scheduled with TCS.</p>
            <p>Infosys application is under review.</p>
            <p>New placement opportunity available.</p>

            <button onClick={handleRead}>
                Mark as Read
            </button>

            <p>{message}</p>
        </div>
    );
}

export default Notifications;