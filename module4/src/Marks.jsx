import { useState } from "react";

function Marks(props) {
  const [marks, setMarks] = useState(props.marks);

  return (
    <div>
      <h2>Student Marks</h2>

      <p>Subject: {props.subject}</p>
      <p>Marks: {marks}</p>

      <button onClick={() => setMarks(marks + 1)}>
        Add Mark
      </button>

      <button onClick={() => setMarks(marks - 1)}>
        Remove Mark
      </button>
    </div>
  );
}

export default Marks;