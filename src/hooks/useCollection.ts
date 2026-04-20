import { useState, useEffect } from 'react';
import { CardCollection } from '../data/cards';

const STORAGE_KEY = 'card-collection';

export function useCollection() {
  const [collection, setCollection] = useState<CardCollection>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collection));
  }, [collection]);

  const addCard = (cardId: string) => {
    setCollection(prev => ({
      ...prev,
      [cardId]: (prev[cardId] || 0) + 1,
    }));
  };

  const addCards = (cardIds: string[]) => {
    setCollection(prev => {
      const newCollection = { ...prev };
      cardIds.forEach(id => {
        newCollection[id] = (newCollection[id] || 0) + 1;
      });
      return newCollection;
    });
  };

  const getCardCount = (cardId: string): number => {
    return collection[cardId] || 0;
  };

  const hasCard = (cardId: string): boolean => {
    return getCardCount(cardId) > 0;
  };

  const resetCollection = () => {
    setCollection({});
  };

  return {
    collection,
    addCard,
    addCards,
    getCardCount,
    hasCard,
    resetCollection,
  };
}
