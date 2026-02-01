import React, { useState } from 'react';

export default function ChoiceTask({ task }) {
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState(null);

  const handleCheck = () => {
    setFeedback(selected === task.correct ? "correct" : "wrong");
  };

  return (
    <div className="card">
      <p><strong>{task.question}</strong></p>
      {task.options.map(opt => (
        <label key={opt} style={{ display: "block", margin: "8px 0" }}>
          <input type="radio" name={`choice-${task.id}`} onChange={() => setSelected(opt)} /> {opt}
        </label>
      ))}
      <button onClick={handleCheck} className="btn-primary">Zatwierdź</button>
      {feedback === "correct" && <span style={{ color: "green", marginLeft: "10px" }}>✓ Brawo!</span>}
      {feedback === "wrong" && <span style={{ color: "red", marginLeft: "10px" }}>✗ Spróbuj jeszcze raz.</span>}
    </div>
  );
}