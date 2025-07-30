import React from 'react';

const DefinitionCard = ({ term }) => {
  // Si aucun terme n'est sélectionné, on affiche un message
  if (!term) {
    return <div>Sélectionnez un terme dans la liste.</div>;
  }

  // Sinon, on affiche les détails du terme reçu
  return (
    <div>
      <h1>{term.terme}</h1>
      <h3>Définition Sommaire</h3>
      <p>{term.definition_sommaire}</p>
      <h3>Analyse Détaillée</h3>
      <p>{term.analyse_detaillee}</p>
    </div>
  );
};

export default DefinitionCard;
