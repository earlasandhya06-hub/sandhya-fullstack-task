import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <h2>Student Placement Dashboard</h2>

            <h3>Total Jobs Applied</h3>
            <p>5</p>

            <h3>Applications Under Review</h3>
            <p>3</p>

            <h3>Interviews Scheduled</h3>
            <p>2</p>

            <h3>Students Selected</h3>
            <p>1</p>

            <hr />

            <Link to="/jobs">
                <button>View Jobs</button>
            </Link>

            <br /><br />

            <Link to="/applications">
                <button>My Applications</button>
            </Link>

            <br /><br />

            <Link to="/interviews">
                <button>Interview Schedule</button>
            </Link>

            <br /><br />

            <Link to="/notifications">
                <button>Notifications</button>
            </Link>
        </div>
    );
}

export default Dashboard;