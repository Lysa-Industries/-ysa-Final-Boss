import React, { useState } from 'react';

export default function TextTask({ task }) {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  const check = () => {
    setFeedback(input.trim().toLowerCase() === task.answer.toLowerCase() ? "correct" : "wrong");
  };

  return (
    <div className="card">
      <p>{task.text.split("____").map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i === 0 && <input className="task-input" onChange={e => setInput(e.target.value)} />}
        </React.Fragment>
      ))}</p>
      <button onClick={check} className="btn-success">Sprawdź</button>
      <button onClick={() => setShowSolution(!showSolution)} className="btn-secondary">Rozwiązanie</button>
      
      {feedback === "correct" && <span style={{ color: "green" }}> ✓</span>}
      {feedback === "wrong" && <span style={{ color: "red" }}> ✗</span>}
      {showSolution && <p style={{ color: "#2563eb", marginTop: "10px" }}>Poprawna odpowiedź: <strong>{task.answer}</strong></p>}
    </div>
  );
}