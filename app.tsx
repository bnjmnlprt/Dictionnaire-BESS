import React, { useState } from 'react';
import TermList from './components/TermList.tsx';
import DefinitionCard from './components/DefinitionCard.tsx';
import termsData from './dictionnaire.json';
import './app.css';

function App() {
  const [selectedTerm, setSelectedTerm] = useState(termsData[0]);

  return (
    <div className="app-container">
      <div className="sidebar">
         <div className="sidebar-header">
            <h2>Dictionnaire</h2>
            <input type="text" placeholder="Rechercher un terme..." />
         </div>
        <TermList
   terms={termsData}
   onSelectTerm={setSelectedTerm}
   selectedTermId={selectedTerm ? selectedTerm.id : null}
/>
      </div>
      <div className="main-content">
        <DefinitionCard term={selectedTerm} />
      </div>
    </div>
  );
}

export default App;
