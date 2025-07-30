import React from 'react';
import { TermDefinition } from '../types';

interface TermListProps {
  terms: TermDefinition[];
  selectedTermId: string | null;
  onSelectTerm: (id: string) => void;
}

const TermList: React.FC<TermListProps> = ({ terms, selectedTermId, onSelectTerm }) => {
  return (
    <nav aria-label="Termes du dictionnaire">
      <ul className="space-y-1">
        {terms.map((term) => (
          <li key={term.id}>
            <button
              onClick={() => onSelectTerm(term.id)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-helexia-blue ${
                selectedTermId === term.id
                  ? 'bg-helexia-blue text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="block truncate font-semibold">{term.title}</span>
              {term.acronym && <span className={`block text-xs ${selectedTermId === term.id ? 'text-blue-200' : 'text-gray-500'}`}>{term.acronym}</span>}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TermList;
