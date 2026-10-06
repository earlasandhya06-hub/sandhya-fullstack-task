import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    function handleRegister() {
        if (name && email && phone && course) {
            setMessage("Registration Successful!");

            setTimeout(() => {
                navigate("/");
            }, 1000);
        } else {
            setMessage("Please fill all fields");
        }
    }

    return (
        <div>
            <h2>Student Registration</h2>

            <input
                type="text"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
            />

            <br /><br />

            <button onClick={handleRegister}>
                Register
            </button>

            <br /><br />

            <p>{message}</p>
        </div>
    );
}

export default Registration;