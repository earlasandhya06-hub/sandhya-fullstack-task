import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Jobs from "./pages/Jobs";
import Applications from "./pages/Applications";
import Interviews from "./pages/Interviews";
import Notifications from "./pages/Notifications";

function App() {
    return (
        <BrowserRouter>

            <h1>Student Placement Dashboard</h1>

            <nav>
                <Link to="/">Login</Link>{" | "}
                <Link to="/registration">Registration</Link>{" | "}
                <Link to="/dashboard">Dashboard</Link>{" | "}
                <Link to="/profile">Profile</Link>{" | "}
                <Link to="/jobs">Jobs</Link>{" | "}
                <Link to="/applications">Applications</Link>{" | "}
                <Link to="/interviews">Interviews</Link>{" | "}
                <Link to="/notifications">Notifications</Link>
            </nav>

            <hr />

            <Routes>

                <Route path="/" element={<Login />} />

                <Route
                    path="/registration"
                    element={<Registration />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/profile"
                    element={<Profile />}
                />

                <Route
                    path="/jobs"
                    element={<Jobs />}
                />

                <Route
                    path="/applications"
                    element={<Applications />}
                />

                <Route
                    path="/interviews"
                    element={<Interviews />}
                />

                <Route
                    path="/notifications"
                    element={<Notifications />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;