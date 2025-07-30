import React from 'react';
import termsData from '../dictionnaire.json';

const TermList = ({ onSelectTerm, selectedTermId }) => {
  return (
    <ul>
      {termsData.map((term) => (
        <li key={term.id}>
          <button
            className={selectedTermId === term.id ? 'selected' : ''}
            onClick={() => onSelectTerm(term)}
          >
            {term.terme}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TermList;
