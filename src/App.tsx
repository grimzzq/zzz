import { useState } from 'react';
import { Card as CardType } from './data/cards';
import { useCollection } from './hooks/useCollection';
import { PackOpener } from './components/PackOpener';
import { Collection } from './components/Collection';
import { Package, Library } from 'lucide-react';

type View = 'pack' | 'collection';

function App() {
  const [view, setView] = useState<View>('pack');
  const { collection, addCards, getCardCount } = useCollection();

  const handleCardsObtained = (cards: CardType[]) => {
    addCards(cards.map(c => c.id));
  };

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 -z-10" />
      <div className="fixed inset-0 opacity-30 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Spin a NisNis!
              </h1>
              <p className="text-sm text-blue-300/70 mt-1">Collect legendary cards</p>
            </div>
            <nav className="flex gap-3">
              <button
                onClick={() => setView('pack')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  view === 'pack'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700'
                }`}
              >
                <Package className="w-5 h-5" />
                Spin Pack
              </button>
              <button
                onClick={() => setView('collection')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  view === 'collection'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700'
                }`}
              >
                <Library className="w-5 h-5" />
                Collection
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {view === 'pack' ? (
          <PackOpener onCardsObtained={handleCardsObtained} />
        ) : (
          <Collection collection={collection} getCardCount={getCardCount} />
        )}
      </main>
    </div>
  );
}

export default App;
