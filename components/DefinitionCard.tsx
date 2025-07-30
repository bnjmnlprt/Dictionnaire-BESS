import React from 'react';
import { TermDefinition } from '../types';
import BookOpenIcon from './icons/BookOpenIcon';

interface DefinitionCardProps {
  term: TermDefinition | null;
}

const DefinitionCard: React.FC<DefinitionCardProps> = ({ term }) => {
  if (!term) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500 bg-white shadow-lg rounded-xl p-8">
        <BookOpenIcon className="w-16 h-16 mb-4 text-gray-400" />
        <p className="text-lg text-center">Sélectionnez un terme dans la liste pour voir sa définition.</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 lg:p-8 overflow-y-auto h-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-helexia-blue">{term.title}</h1>
        {term.acronym && <p className="text-xl font-semibold text-helexia-green">{term.acronym}</p>}
      </div>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-helexia-green pb-2 mb-3">Définition Sommaire</h2>
          <p className="text-gray-700 leading-relaxed">{term.summary}</p>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-helexia-green pb-2 mb-3">Analyse Détaillée</h2>
          <p className="text-gray-700 leading-relaxed">{term.detailed}</p>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-gray-800 border-b-2 border-helexia-green pb-2 mb-3">Pour Helexia</h2>
          <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-helexia-blue">{term.helexia}</p>
        </div>
      </div>
    </div>
  );
};

export default DefinitionCard;
