import { Clock } from 'lucide-react';

type MascotMood = 'happy' | 'neutral' | 'calm' | 'curious' | 'excited' | 'thinking' | 'confused';

interface ClockMascotProps {
  mood?: MascotMood;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

export function ClockMascot({ mood = 'happy', size = 'medium', color = '#FFB347' }: ClockMascotProps) {
  const sizeMap = {
    small: 48,
    medium: 80,
    large: 120,
  };

  const actualSize = sizeMap[size];
  const clockSize = actualSize * 0.5;

  // Different expressions based on mood
  const getExpression = () => {
    const expressions: Record<MascotMood, { rotation: number; opacity: number }> = {
      happy: { rotation: 45, opacity: 1 },
      neutral: { rotation: 0, opacity: 0.9 },
      calm: { rotation: -15, opacity: 0.95 },
      curious: { rotation: 30, opacity: 1 },
      excited: { rotation: 60, opacity: 1 },
      thinking: { rotation: 15, opacity: 0.85 },
      confused: { rotation: -30, opacity: 0.9 },
    };
    return expressions[mood] || expressions.neutral;
  };

  const expression = getExpression();

  return (
    <div 
      className="relative inline-flex items-center justify-center transition-all duration-300"
      style={{
        width: actualSize,
        height: actualSize,
      }}
    >
      {/* Circular background */}
      <div
        className="absolute inset-0 rounded-full shadow-lg"
        style={{
          backgroundColor: color,
          opacity: 0.2,
        }}
      />
      
      {/* Main clock icon */}
      <div
        className="relative transition-transform duration-500"
        style={{
          transform: `rotate(${expression.rotation}deg)`,
          opacity: expression.opacity,
        }}
      >
        <Clock 
          size={clockSize}
          strokeWidth={2.5}
          style={{ color }}
        />
      </div>

      {/* Mood-specific decorations */}
      {mood === 'happy' && (
        <>
          <div
            className="absolute rounded-full animate-ping"
            style={{
              width: actualSize * 0.3,
              height: actualSize * 0.3,
              backgroundColor: color,
              opacity: 0.3,
              top: '10%',
              right: '10%',
            }}
          />
        </>
      )}

      {mood === 'excited' && (
        <>
          <div
            className="absolute rounded-full animate-bounce"
            style={{
              width: actualSize * 0.2,
              height: actualSize * 0.2,
              backgroundColor: color,
              opacity: 0.4,
              top: '5%',
              left: '15%',
            }}
          />
          <div
            className="absolute rounded-full animate-bounce"
            style={{
              width: actualSize * 0.15,
              height: actualSize * 0.15,
              backgroundColor: color,
              opacity: 0.4,
              bottom: '15%',
              right: '5%',
              animationDelay: '150ms',
            }}
          />
        </>
      )}

      {mood === 'thinking' && (
        <div
          className="absolute rounded-full"
          style={{
            width: actualSize * 0.15,
            height: actualSize * 0.15,
            backgroundColor: color,
            opacity: 0.5,
            top: '10%',
            right: '20%',
          }}
        />
      )}
    </div>
  );
}