import { useState } from "react";

function Profile() {
    const [message, setMessage] = useState("");

    function handleUpdate() {
        setMessage("Profile Updated Successfully!");
    }

    return (
        <div>
            <h2>Student Profile</h2>

            <p>Name: Sandhya</p>
            <p>Email: sandhya@example.com</p>
            <p>Course: Computer Science</p>
            <p>Skills: React, Java, Python</p>

            <button onClick={handleUpdate}>
                Update Profile
            </button>

            <p>{message}</p>
        </div>
    );
}

export default Profile;