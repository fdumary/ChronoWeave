type MascotMood = 'happy' | 'neutral' | 'calm' | 'curious' | 'excited' | 'thinking';

interface StarMascotProps {
  mood?: MascotMood;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

export function StarMascot({ mood = 'happy', size = 'medium', color = '#FFB347' }: StarMascotProps) {
  const sizeMap = {
    small: 60,
    medium: 100,
    large: 140,
  };

  const actualSize = sizeMap[size];

  const getEyes = () => {
    switch (mood) {
      case 'happy':
        return (
          <>
            <ellipse cx={actualSize * 0.35} cy={actualSize * 0.4} rx={5} ry={7} fill="#000" />
            <ellipse cx={actualSize * 0.65} cy={actualSize * 0.4} rx={5} ry={7} fill="#000" />
            <circle cx={actualSize * 0.37} cy={actualSize * 0.38} r={2} fill="#fff" />
            <circle cx={actualSize * 0.67} cy={actualSize * 0.38} r={2} fill="#fff" />
          </>
        );
      case 'calm':
        return (
          <>
            <line x1={actualSize * 0.3} y1={actualSize * 0.4} x2={actualSize * 0.4} y2={actualSize * 0.4} stroke="#000" strokeWidth="2" strokeLinecap="round" />
            <line x1={actualSize * 0.6} y1={actualSize * 0.4} x2={actualSize * 0.7} y2={actualSize * 0.4} stroke="#000" strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case 'thinking':
        return (
          <>
            <line x1={actualSize * 0.3} y1={actualSize * 0.38} x2={actualSize * 0.4} y2={actualSize * 0.42} stroke="#000" strokeWidth="2" strokeLinecap="round" />
            <line x1={actualSize * 0.6} y1={actualSize * 0.38} x2={actualSize * 0.7} y2={actualSize * 0.42} stroke="#000" strokeWidth="2" strokeLinecap="round" />
          </>
        );
      default:
        return (
          <>
            <circle cx={actualSize * 0.35} cy={actualSize * 0.4} r={4} fill="#000" />
            <circle cx={actualSize * 0.65} cy={actualSize * 0.4} r={4} fill="#000" />
            <circle cx={actualSize * 0.37} cy={actualSize * 0.38} r={1.5} fill="#fff" />
            <circle cx={actualSize * 0.67} cy={actualSize * 0.38} r={1.5} fill="#fff" />
          </>
        );
    }
  };

  const getMouth = () => {
    switch (mood) {
      case 'happy':
      case 'excited':
        return <path d={`M ${actualSize * 0.35} ${actualSize * 0.55} Q ${actualSize * 0.5} ${actualSize * 0.65}, ${actualSize * 0.65} ${actualSize * 0.55}`} stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />;
      case 'neutral':
        return <line x1={actualSize * 0.35} y1={actualSize * 0.6} x2={actualSize * 0.65} y2={actualSize * 0.6} stroke="#000" strokeWidth="2" strokeLinecap="round" />;
      case 'calm':
        return <path d={`M ${actualSize * 0.35} ${actualSize * 0.58} Q ${actualSize * 0.5} ${actualSize * 0.62}, ${actualSize * 0.65} ${actualSize * 0.58}`} stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />;
      default:
        return <path d={`M ${actualSize * 0.35} ${actualSize * 0.55} Q ${actualSize * 0.5} ${actualSize * 0.63}, ${actualSize * 0.65} ${actualSize * 0.55}`} stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />;
    }
  };

  return (
    <svg width={actualSize} height={actualSize} viewBox={`0 0 ${actualSize} ${actualSize}`}>
      {/* Star shape body */}
      <path
        d={`
          M ${actualSize / 2} ${actualSize * 0.1}
          L ${actualSize * 0.62} ${actualSize * 0.38}
          L ${actualSize * 0.95} ${actualSize * 0.38}
          L ${actualSize * 0.7} ${actualSize * 0.58}
          L ${actualSize * 0.8} ${actualSize * 0.9}
          L ${actualSize / 2} ${actualSize * 0.72}
          L ${actualSize * 0.2} ${actualSize * 0.9}
          L ${actualSize * 0.3} ${actualSize * 0.58}
          L ${actualSize * 0.05} ${actualSize * 0.38}
          L ${actualSize * 0.38} ${actualSize * 0.38}
          Z
        `}
        fill={color}
      />
      
      {/* Arms */}
      <g>
        <ellipse cx={actualSize * 0.15} cy={actualSize * 0.5} rx={8} ry={12} fill="#fff" opacity="0.7" />
        <ellipse cx={actualSize * 0.85} cy={actualSize * 0.5} rx={8} ry={12} fill="#fff" opacity="0.7" />
      </g>

      {/* Face */}
      {getEyes()}
      {getMouth()}
    </svg>
  );
}
