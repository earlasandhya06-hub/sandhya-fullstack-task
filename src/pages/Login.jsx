import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    function handleLogin() {
        if (loginId === "student" && password === "1234") {
            setMessage("Login Successful!");

            setTimeout(() => {
                navigate("/dashboard");
            }, 1000);
        } else {
            setMessage("Invalid Login ID or Password");
        }
    }

    return (
        <div>
            <h2>Student Login</h2>

            <input
                type="text"
                placeholder="Login ID"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={handleLogin}>
                Login
            </button>

            <br /><br />

            <p>{message}</p>
        </div>
    );
}

export default Login;