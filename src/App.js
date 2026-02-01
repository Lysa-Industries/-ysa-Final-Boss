import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import TheoryView from './components/TheoryView';
import ChoiceTask from './components/Tasks/ChoiceTask';
import TextTask from './components/Tasks/TextTask';
import './index.css';

export default function App() {
  const [activeTopic, setActiveTopic] = useState(null);
  const [currentTab, setCurrentTab] = useState("theory");

  return (
    <div className="app-container">
      <Sidebar onSelectTopic={(topic) => { setActiveTopic(topic); setCurrentTab("theory"); }} />
      
      <main className="content">
        {activeTopic ? (
          <>
            <div className="tab-menu">
              <button onClick={() => setCurrentTab("theory")} className={currentTab === "theory" ? "active" : ""}>Teoria</button>
              <button onClick={() => setCurrentTab("choice")} className={currentTab === "choice" ? "active" : ""}>Zadania wyboru</button>
              <button onClick={() => setCurrentTab("text")} className={currentTab === "text" ? "active" : ""}>Zadania tekstowe</button>
            </div>

            <div className="view-container">
              {currentTab === "theory" && <TheoryView theory={activeTopic.theory} />}
              {currentTab === "choice" && activeTopic.choiceTasks.map(t => <ChoiceTask key={t.id} task={t} />)}
              {currentTab === "text" && activeTopic.textTasks.map(t => <TextTask key={t.id} task={t} />)}
            </div>
          </>
        ) : (
          <h1>Wybierz temat z menu po lewej stronie.</h1>
        )}
      </main>
    </div>
  );
}