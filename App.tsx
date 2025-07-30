import React, { useState, useMemo, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import TermList from './components/TermList';
import DefinitionCard from './components/DefinitionCard';
import { DICTIONARY_DATA } from './constants';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTermId, setSelectedTermId] = useState<string | null>(DICTIONARY_DATA.length > 0 ? DICTIONARY_DATA[0].id : null);

  const filteredTerms = useMemo(() => {
    const lowercasedFilter = searchTerm.toLowerCase().trim();
    if (!lowercasedFilter) {
      return DICTIONARY_DATA;
    }
    return DICTIONARY_DATA.filter(term =>
      term.title.toLowerCase().includes(lowercasedFilter) ||
      (term.acronym && term.acronym.toLowerCase().includes(lowercasedFilter)) ||
      term.summary.toLowerCase().includes(lowercasedFilter)
    );
  }, [searchTerm]);

  useEffect(() => {
    const isSelectedTermInList = filteredTerms.some(t => t.id === selectedTermId);
    if (filteredTerms.length > 0 && !isSelectedTermInList) {
      setSelectedTermId(filteredTerms[0].id);
    } else if (filteredTerms.length === 0) {
      setSelectedTermId(null);
    }
  }, [filteredTerms, selectedTermId]);

  const selectedTerm = useMemo(() => {
    if (!selectedTermId) return null;
    return DICTIONARY_DATA.find(term => term.id === selectedTermId) || null;
  }, [selectedTermId]);
  
  const handleSelectTerm = (id: string) => {
    setSelectedTermId(id);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-4">
                    <img src="https://www.helexia.com/wp-content/uploads/2021/09/logo-helexia.svg" alt="Helexia Logo" className="h-8 w-auto"/>
                    <h1 className="text-xl font-bold text-helexia-blue tracking-tight">Dictionnaire de l'Énergie</h1>
                </div>
            </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <aside className="lg:col-span-1 flex flex-col space-y-4 sticky top-24">
            <div className="bg-white shadow-lg rounded-xl p-4">
              <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
            </div>
            <div className="bg-white shadow-lg rounded-xl flex-grow overflow-y-auto" style={{ maxHeight: 'calc(100vh - 15rem)' }}>
              {filteredTerms.length > 0 ? (
                 <div className="p-2">
                   <TermList
                      terms={filteredTerms}
                      selectedTermId={selectedTermId}
                      onSelectTerm={handleSelectTerm}
                   />
                 </div>
              ) : (
                <div className="text-center py-10 text-gray-500">
                  <p>Aucun terme trouvé.</p>
                </div>
              )}
            </div>
          </aside>

          <section className="lg:col-span-2">
            <DefinitionCard term={selectedTerm} />
          </section>

        </div>
      </main>
    </div>
  );
}

export default App;
