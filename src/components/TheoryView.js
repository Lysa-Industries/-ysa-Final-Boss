import React from 'react';

export default function TheoryView({ theory }) {
  return (
    <div className="card theory-box">
      <h3>Budowa zdań twierdzących</h3>
      <p>{theory.affirmative}</p>
      <h3>Pytania i przeczenia</h3>
      <p>{theory.questions} / {theory.negations}</p>
      <h3>Wyjątki</h3>
      <ul>{theory.exceptions.map((ex, i) => <li key={i}>{ex}</li>)}</ul>
      <h3>Przykłady</h3>
      {theory.examples.map((ex, i) => <p key={i}><em>- {ex}</em></p>)}
    </div>
  );
}