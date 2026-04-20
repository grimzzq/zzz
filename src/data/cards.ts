export type Rarity = 'common' | 'rare' | 'epic' | 'legendary' | 'secret';

export interface Card {
  id: string;
  name: string;
  rarity: Rarity;
  image: string;
}

export interface CardCollection {
  [cardId: string]: number;
}

export const RARITY_CONFIG: Record<Rarity, { color: string; glowColor: string; probability: number }> = {
  common: { color: '#9CA3AF', glowColor: 'rgba(156, 163, 175, 0.5)', probability: 0.60 },
  rare: { color: '#3B82F6', glowColor: 'rgba(59, 130, 246, 0.5)', probability: 0.25 },
  epic: { color: '#8B5CF6', glowColor: 'rgba(139, 92, 246, 0.5)', probability: 0.10 },
  legendary: { color: '#F59E0B', glowColor: 'rgba(245, 158, 11, 0.5)', probability: 0.04 },
  secret: { color: '#EF4444', glowColor: 'rgba(239, 68, 68, 0.5)', probability: 0.01 },
};

export const RARITY_ORDER: Rarity[] = ['common', 'rare', 'epic', 'legendary', 'secret'];

export const CARDS: Card[] = [
  // Common cards (25)
  { id: 'common-1', name: 'Placeholder 1', rarity: 'common', image: '/cards/common/1.png' },
  { id: 'common-2', name: 'Placeholder 2', rarity: 'common', image: '/cards/common/2.png' },
  { id: 'common-3', name: 'Placeholder 3', rarity: 'common', image: '/cards/common/3.png' },
  { id: 'common-4', name: 'Placeholder 4', rarity: 'common', image: '/cards/common/4.png' },
  { id: 'common-5', name: 'Placeholder 5', rarity: 'common', image: '/cards/common/5.png' },
  { id: 'common-6', name: 'Placeholder 6', rarity: 'common', image: '/cards/common/6.png' },
  { id: 'common-7', name: 'Placeholder 7', rarity: 'common', image: '/cards/common/7.png' },
  { id: 'common-8', name: 'Placeholder 8', rarity: 'common', image: '/cards/common/8.png' },
  { id: 'common-9', name: 'Placeholder 9', rarity: 'common', image: '/cards/common/9.png' },
  { id: 'common-10', name: 'Placeholder 10', rarity: 'common', image: '/cards/common/10.png' },
  { id: 'common-11', name: 'Placeholder 11', rarity: 'common', image: '/cards/common/11.png' },
  { id: 'common-12', name: 'Placeholder 12', rarity: 'common', image: '/cards/common/12.png' },
  { id: 'common-13', name: 'Placeholder 13', rarity: 'common', image: '/cards/common/13.png' },
  { id: 'common-14', name: 'Placeholder 14', rarity: 'common', image: '/cards/common/14.png' },
  { id: 'common-15', name: 'Placeholder 15', rarity: 'common', image: '/cards/common/15.png' },
  { id: 'common-16', name: 'Placeholder 16', rarity: 'common', image: '/cards/common/16.png' },
  { id: 'common-17', name: 'Placeholder 17', rarity: 'common', image: '/cards/common/17.png' },
  { id: 'common-18', name: 'Placeholder 18', rarity: 'common', image: '/cards/common/18.png' },
  { id: 'common-19', name: 'Placeholder 19', rarity: 'common', image: '/cards/common/19.png' },
  { id: 'common-20', name: 'Placeholder 20', rarity: 'common', image: '/cards/common/20.png' },
  { id: 'common-21', name: 'Placeholder 21', rarity: 'common', image: '/cards/common/21.png' },
  { id: 'common-22', name: 'Placeholder 22', rarity: 'common', image: '/cards/common/22.png' },
  { id: 'common-23', name: 'Placeholder 23', rarity: 'common', image: '/cards/common/23.png' },
  { id: 'common-24', name: 'Placeholder 24', rarity: 'common', image: '/cards/common/24.png' },
  { id: 'common-25', name: 'Placeholder 25', rarity: 'common', image: '/cards/common/25.png' },

  // Rare cards (20)
  { id: 'rare-1', name: 'Placeholder 1', rarity: 'rare', image: '/cards/rare/1.png' },
  { id: 'rare-2', name: 'Placeholder 2', rarity: 'rare', image: '/cards/rare/2.png' },
  { id: 'rare-3', name: 'Placeholder 3', rarity: 'rare', image: '/cards/rare/3.png' },
  { id: 'rare-4', name: 'Placeholder 4', rarity: 'rare', image: '/cards/rare/4.png' },
  { id: 'rare-5', name: 'Placeholder 5', rarity: 'rare', image: '/cards/rare/5.png' },
  { id: 'rare-6', name: 'Placeholder 6', rarity: 'rare', image: '/cards/rare/6.png' },
  { id: 'rare-7', name: 'Placeholder 7', rarity: 'rare', image: '/cards/rare/7.png' },
  { id: 'rare-8', name: 'Placeholder 8', rarity: 'rare', image: '/cards/rare/8.png' },
  { id: 'rare-9', name: 'Placeholder 9', rarity: 'rare', image: '/cards/rare/9.png' },
  { id: 'rare-10', name: 'Placeholder 10', rarity: 'rare', image: '/cards/rare/10.png' },
  { id: 'rare-11', name: 'Placeholder 11', rarity: 'rare', image: '/cards/rare/11.png' },
  { id: 'rare-12', name: 'Placeholder 12', rarity: 'rare', image: '/cards/rare/12.png' },
  { id: 'rare-13', name: 'Placeholder 13', rarity: 'rare', image: '/cards/rare/13.png' },
  { id: 'rare-14', name: 'Placeholder 14', rarity: 'rare', image: '/cards/rare/14.png' },
  { id: 'rare-15', name: 'Placeholder 15', rarity: 'rare', image: '/cards/rare/15.png' },
  { id: 'rare-16', name: 'Placeholder 16', rarity: 'rare', image: '/cards/rare/16.png' },
  { id: 'rare-17', name: 'Placeholder 17', rarity: 'rare', image: '/cards/rare/17.png' },
  { id: 'rare-18', name: 'Placeholder 18', rarity: 'rare', image: '/cards/rare/18.png' },
  { id: 'rare-19', name: 'Placeholder 19', rarity: 'rare', image: '/cards/rare/19.png' },
  { id: 'rare-20', name: 'Placeholder 20', rarity: 'rare', image: '/cards/rare/20.png' },

  // Epic cards (15)
  { id: 'epic-1', name: 'Placeholder 1', rarity: 'epic', image: '/cards/epic/1.png' },
  { id: 'epic-2', name: 'Placeholder 2', rarity: 'epic', image: '/cards/epic/2.png' },
  { id: 'epic-3', name: 'Placeholder 3', rarity: 'epic', image: '/cards/epic/3.png' },
  { id: 'epic-4', name: 'Placeholder 4', rarity: 'epic', image: '/cards/epic/4.png' },
  { id: 'epic-5', name: 'Placeholder 5', rarity: 'epic', image: '/cards/epic/5.png' },
  { id: 'epic-6', name: 'Placeholder 6', rarity: 'epic', image: '/cards/epic/6.png' },
  { id: 'epic-7', name: 'Placeholder 7', rarity: 'epic', image: '/cards/epic/7.png' },
  { id: 'epic-8', name: 'Placeholder 8', rarity: 'epic', image: '/cards/epic/8.png' },
  { id: 'epic-9', name: 'Placeholder 9', rarity: 'epic', image: '/cards/epic/9.png' },
  { id: 'epic-10', name: 'Placeholder 10', rarity: 'epic', image: '/cards/epic/10.png' },
  { id: 'epic-11', name: 'Placeholder 11', rarity: 'epic', image: '/cards/epic/11.png' },
  { id: 'epic-12', name: 'Placeholder 12', rarity: 'epic', image: '/cards/epic/12.png' },
  { id: 'epic-13', name: 'Placeholder 13', rarity: 'epic', image: '/cards/epic/13.png' },
  { id: 'epic-14', name: 'Placeholder 14', rarity: 'epic', image: '/cards/epic/14.png' },
  { id: 'epic-15', name: 'Placeholder 15', rarity: 'epic', image: '/cards/epic/15.png' },

  // Legendary cards (10)
  { id: 'legendary-1', name: 'Placeholder 1', rarity: 'legendary', image: '/cards/legendary/1.png' },
  { id: 'legendary-2', name: 'Placeholder 2', rarity: 'legendary', image: '/cards/legendary/2.png' },
  { id: 'legendary-3', name: 'Placeholder 3', rarity: 'legendary', image: '/cards/legendary/3.png' },
  { id: 'legendary-4', name: 'Placeholder 4', rarity: 'legendary', image: '/cards/legendary/4.png' },
  { id: 'legendary-5', name: 'Placeholder 5', rarity: 'legendary', image: '/cards/legendary/5.png' },
  { id: 'legendary-6', name: 'Placeholder 6', rarity: 'legendary', image: '/cards/legendary/6.png' },
  { id: 'legendary-7', name: 'Placeholder 7', rarity: 'legendary', image: '/cards/legendary/7.png' },
  { id: 'legendary-8', name: 'Placeholder 8', rarity: 'legendary', image: '/cards/legendary/8.png' },
  { id: 'legendary-9', name: 'Placeholder 9', rarity: 'legendary', image: '/cards/legendary/9.png' },
  { id: 'legendary-10', name: 'Placeholder 10', rarity: 'legendary', image: '/cards/legendary/10.png' },

  // Secret cards (5)
  { id: 'secret-1', name: 'Placeholder 1', rarity: 'secret', image: '/cards/secret/1.png' },
  { id: 'secret-2', name: 'Placeholder 2', rarity: 'secret', image: '/cards/secret/2.png' },
  { id: 'secret-3', name: 'Placeholder 3', rarity: 'secret', image: '/cards/secret/3.png' },
  { id: 'secret-4', name: 'Placeholder 4', rarity: 'secret', image: '/cards/secret/4.png' },
  { id: 'secret-5', name: 'Placeholder 5', rarity: 'secret', image: '/cards/secret/5.png' },
];

export function getCardsByRarity(rarity: Rarity): Card[] {
  return CARDS.filter(card => card.rarity === rarity);
}

export function getRandomRarity(): Rarity {
  const random = Math.random();
  let cumulative = 0;

  for (const rarity of RARITY_ORDER) {
    cumulative += RARITY_CONFIG[rarity].probability;
    if (random < cumulative) {
      return rarity;
    }
  }

  return 'common';
}

export function getRandomCard(rarity: Rarity): Card {
  const cardsOfRarity = getCardsByRarity(rarity);

  if (cardsOfRarity.length === 0) {
    const availableRarities = RARITY_ORDER.filter(r => getCardsByRarity(r).length > 0);
    const fallbackRarity = availableRarities[0] || 'common';
    const fallbackCards = getCardsByRarity(fallbackRarity);
    return fallbackCards[Math.floor(Math.random() * fallbackCards.length)];
  }

  return cardsOfRarity[Math.floor(Math.random() * cardsOfRarity.length)];
}

export function openPack(): Card[] {
  const cards: Card[] = [];
  for (let i = 0; i < 3; i++) {
    const rarity = getRandomRarity();
    const card = getRandomCard(rarity);
    cards.push(card);
  }
  return cards;
}
