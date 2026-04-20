import { Card as CardType, RARITY_CONFIG } from '../data/cards';

interface CardProps {
  card: CardType;
  isRevealing?: boolean;
  isLocked?: boolean;
  count?: number;
  onClick?: () => void;
}

export function Card({ card, isRevealing = false, isLocked = false, count, onClick }: CardProps) {
  const config = RARITY_CONFIG[card.rarity];

  return (
    <div
      onClick={onClick}
      className={`
        relative w-48 h-72 rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-500 transform group
        ${isRevealing ? 'animate-card-reveal' : ''}
        ${isLocked ? 'opacity-50 grayscale' : 'hover:scale-110 hover:-translate-y-2'}
      `}
      style={{
        boxShadow: isLocked
          ? 'none'
          : `0 0 40px ${config.glowColor}, 0 20px 40px ${config.glowColor}`,
        border: `3px solid ${config.color}`,
      }}
    >
      {isLocked ? (
        <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
          <div className="text-center">
            <svg
              className="w-16 h-16 mx-auto text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <p className="mt-2 text-slate-500 text-sm font-semibold">Locked</p>
          </div>
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = `
                <div class="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex items-center justify-center">
                  <div class="text-center p-4">
                    <div class="text-5xl mb-2" style="color: ${config.color}">?</div>
                    <p class="text-white font-bold text-sm">${card.name}</p>
                  </div>
                </div>
              `;
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white font-bold text-sm truncate drop-shadow-lg">{card.name}</p>
            <p
              className="text-xs uppercase font-black tracking-wider drop-shadow-lg"
              style={{ color: config.color }}
            >
              {card.rarity}
            </p>
          </div>
          {count !== undefined && count > 0 && (
            <div
              className="absolute top-3 right-3 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg backdrop-blur-sm"
              style={{
                backgroundColor: config.glowColor,
                border: `2px solid ${config.color}`,
              }}
            >
              x{count}
            </div>
          )}
          <div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:via-white/60 transition-all duration-300"
            style={{
              background: `linear-gradient(to right, transparent, ${config.color}40, transparent)`,
            }}
          />
        </>
      )}
    </div>
  );
}
