import { useState, useMemo } from 'react';
import { Card as CardType, CARDS, RARITY_CONFIG, RARITY_ORDER, Rarity } from '../data/cards';
import { Card } from './Card';

interface CollectionProps {
  collection: Record<string, number>;
  getCardCount: (cardId: string) => number;
}

type SortOption = 'name' | 'rarity' | 'count';

export function Collection({ collection, getCardCount }: CollectionProps) {
  const [filter, setFilter] = useState<Rarity | 'all'>('all');
  const [sort, setSort] = useState<SortOption>('rarity');

  const filteredAndSortedCards = useMemo(() => {
    let cards = [...CARDS];

    if (filter !== 'all') {
      cards = cards.filter(card => card.rarity === filter);
    }

    cards.sort((a, b) => {
      switch (sort) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rarity':
          return RARITY_ORDER.indexOf(b.rarity) - RARITY_ORDER.indexOf(a.rarity);
        case 'count':
          return getCardCount(b.id) - getCardCount(a.id);
        default:
          return 0;
      }
    });

    return cards;
  }, [filter, sort, collection, getCardCount]);

  const totalCards = Object.values(collection).reduce((sum, count) => sum + count, 0);
  const uniqueCards = Object.keys(collection).filter(id => collection[id] > 0).length;

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              My Collection
            </h2>
            <p className="text-blue-300/70 mt-2 text-lg">
              <span className="font-bold text-cyan-400">{uniqueCards}</span> unique cards • <span className="font-bold text-cyan-400">{totalCards}</span> total cards
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as Rarity | 'all')}
              className="bg-slate-800/50 text-white px-4 py-2 rounded-xl border border-slate-600 focus:border-cyan-500 focus:outline-none transition-all"
            >
              <option value="all">All Rarities</option>
              {RARITY_ORDER.map(rarity => (
                <option key={rarity} value={rarity}>
                  {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
                </option>
              ))}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="bg-slate-800/50 text-white px-4 py-2 rounded-xl border border-slate-600 focus:border-cyan-500 focus:outline-none transition-all"
            >
              <option value="rarity">Sort by Rarity</option>
              <option value="name">Sort by Name</option>
              <option value="count">Sort by Count</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {RARITY_ORDER.map(rarity => {
            const count = CARDS.filter(c => c.rarity === rarity && getCardCount(c.id) > 0).length;
            const total = CARDS.filter(c => c.rarity === rarity).length;
            return (
              <button
                key={rarity}
                onClick={() => setFilter(filter === rarity ? 'all' : rarity)}
                className={`px-5 py-2 rounded-xl font-bold uppercase text-sm transition-all duration-300 ${
                  filter === rarity
                    ? 'ring-2 ring-offset-2 ring-offset-slate-900 scale-105'
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
                style={{
                  backgroundColor: RARITY_CONFIG[rarity].color,
                  color: rarity === 'common' ? '#000' : '#fff',
                  boxShadow: filter === rarity ? `0 0 25px ${RARITY_CONFIG[rarity].glowColor}` : 'none',
                }}
              >
                {rarity.charAt(0).toUpperCase() + rarity.slice(1)} ({count}/{total})
              </button>
            );
          })}
        </div>
      </div>

      {filteredAndSortedCards.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-blue-300/60 text-lg">No cards in this collection yet.</p>
          <p className="text-blue-300/50">Spin packs to unlock cards!</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredAndSortedCards.map(card => (
            <Card
              key={card.id}
              card={card}
              isLocked={getCardCount(card.id) === 0}
              count={getCardCount(card.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
