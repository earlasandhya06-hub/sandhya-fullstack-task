import Student from "./Student";
import Marks from "./Marks";
import Login from "./Login";

function App() {
  return (
    <div>
      <h1>Student Management System</h1>

      <Student
        name="Sandhya"
        rollNo="101"
        course="Computer Science"
      />

      <Marks
        subject="React"
        marks={85}
      />

      <Login />
    </div>
  );
}

export default App;