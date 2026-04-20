import { useState } from 'react';
import { Card as CardType, openPack } from '../data/cards';
import { Card } from './Card';
import { Sparkles } from 'lucide-react';

interface PackOpenerProps {
  onCardsObtained: (cards: CardType[]) => void;
}

export function PackOpener({ onCardsObtained }: PackOpenerProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [revealedCards, setRevealedCards] = useState<CardType[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [packElement, setPackElement] = useState<HTMLDivElement | null>(null);

  const handleOpenPack = () => {
    setIsOpening(true);
    setRevealedCards([]);
    setShowResults(false);

    const cards = openPack();
    setRevealedCards(cards);

    setTimeout(() => {
      setShowResults(true);
      setIsOpening(false);
      onCardsObtained(cards);
    }, 2800);
  };

  const handleClose = () => {
    setShowResults(false);
    setRevealedCards([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      {!showResults ? (
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-5xl font-black mb-2 bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Ready to Spin?
            </h2>
            <p className="text-lg text-blue-300/70">Each spin grants you 3 exciting cards</p>
          </div>

          <div
            ref={setPackElement}
            className="relative w-32 h-40 mx-auto mb-8"
          >
            <div
              className={`
                absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl
                shadow-2xl border-4 border-cyan-300/50 flex items-center justify-center
                ${isOpening ? 'animate-spin-pack' : 'hover:scale-110 transition-transform duration-300'}
              `}
            >
              <div className="text-4xl">✨</div>
            </div>
            {isOpening && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-xl opacity-50 animate-pulse" />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-300 rounded-full animate-bounce animation-delay-2000" />
              </>
            )}
          </div>

          <button
            onClick={handleOpenPack}
            disabled={isOpening}
            className={`
              relative px-16 py-5 text-2xl font-black text-white rounded-2xl
              bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500
              hover:from-cyan-400 hover:via-blue-500 hover:to-cyan-400
              disabled:opacity-50 disabled:cursor-not-allowed
              transform transition-all duration-300 hover:scale-110 hover:-translate-y-1
              shadow-2xl hover:shadow-cyan-500/50 disabled:hover:scale-100 disabled:hover:translate-y-0
              border-2 border-cyan-300/50 overflow-hidden group
            `}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              {isOpening ? (
                <>
                  <svg className="animate-spin h-7 w-7" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Spinning...
                </>
              ) : (
                <>
                  <Sparkles className="w-6 h-6" />
                  SPIN PACK
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </button>

          <p className="text-sm text-blue-400/60">✨ 3 cards per spin ✨</p>
        </div>
      ) : (
        <div className="fixed inset-0 bg-gradient-to-br from-black/90 via-slate-900/85 to-black/90 backdrop-blur-xl flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full mx-4">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 rounded-3xl p-10 border-2 border-cyan-500/30">
              <h2 className="text-4xl font-black text-center mb-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Amazing Pull!
              </h2>
              <p className="text-center text-cyan-400/70 mb-8">Check out what you got</p>

              <div className="flex flex-wrap justify-center gap-8 mb-10">
                {revealedCards.map((card, index) => (
                  <div
                    key={`${card.id}-${index}`}
                    className="animate-pop-in"
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    <Card card={card} isRevealing />
                  </div>
                ))}
              </div>

              <button
                onClick={handleClose}
                className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 border-2 border-purple-400/50"
              >
                Spin Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
