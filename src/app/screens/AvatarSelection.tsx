import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useUser } from '../contexts/UserContext';
import { OnboardingCard } from '../components/OnboardingCard';
import svgPaths from '../../imports/svg-4zduh6fkaq';

export function AvatarSelection() {
  const navigate = useNavigate();
  const { setUserAvatar } = useUser();
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  // Reduced to 6 avatars for 3×2 grid
  const avatarOptions = [
    { id: 'lavender', color: '#B8A8D8', name: 'Lavender', emoji: '🌸' },
    { id: 'mint', color: '#B8E6D5', name: 'Mint', emoji: '🌿' },
    { id: 'sky', color: '#89CFF0', name: 'Sky Blue', emoji: '☁️' },
    { id: 'peach', color: '#FFB347', name: 'Peach', emoji: '🍑' },
    { id: 'coral', color: '#FF8C69', name: 'Coral', emoji: '🦋' },
    { id: 'sunset', color: '#FFCBA4', name: 'Sunset', emoji: '🌅' },
  ];

  const handleContinue = () => {
    if (selectedAvatar) {
      const avatar = avatarOptions.find(a => a.color === selectedAvatar);
      if (avatar) {
        setUserAvatar(JSON.stringify({ color: avatar.color, emoji: avatar.emoji }));
      }
      navigate('/time-feeling');
    }
  };

  return (
    <div 
      className="h-full flex flex-col px-[24px]"
      style={{
        background: '#1C2A4A',
      }}
    >
      {/* Top spacing */}
      <div className="h-[48px]" />
      
      <div className="w-full max-w-[393px] mx-auto flex flex-col">
        {/* Title */}
        <h1 className="font-['Inter',sans-serif] font-bold text-white text-[32px] text-center mb-[12px]">
          Choose your avatar
        </h1>

        {/* Subtitle */}
        <p className="font-['Inter',sans-serif] text-gray-400 text-[18px] text-center mb-[32px]">
          Pick a companion for your journey
        </p>

        {/* Content Card */}
        <OnboardingCard>
          {/* 3 columns × 2 rows grid */}
          <div className="grid grid-cols-3 gap-[16px] justify-items-center">
            {avatarOptions.map((avatar) => (
              <button
                key={avatar.id}
                onClick={() => setSelectedAvatar(avatar.color)}
                className={`relative rounded-[20px] transition-all duration-200 hover:scale-110 active:scale-95 flex items-center justify-center`}
                style={{ 
                  width: '72px',
                  height: '72px',
                  backgroundColor: avatar.color,
                  boxShadow: selectedAvatar === avatar.color 
                    ? `0 0 24px ${avatar.color}` 
                    : 'none',
                  border: selectedAvatar === avatar.color 
                    ? '3px solid rgba(255, 255, 255, 0.5)'
                    : '3px solid transparent',
                }}
              >
                {/* Emoji as avatar illustration */}
                <span style={{ fontSize: '36px' }}>
                  {avatar.emoji}
                </span>

                {selectedAvatar === avatar.color && (
                  <div className="absolute bg-white flex items-center justify-center rounded-full top-[-6px] right-[-6px]"
                    style={{
                      width: '28px',
                      height: '28px',
                    }}
                  >
                    <div className="relative" style={{ width: '16px', height: '16px' }}>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9807 21.9807">
                        <g>
                          <path d={svgPaths.p672c244} stroke="#58C7BD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.74759" />
                        </g>
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </OnboardingCard>

        {/* Primary Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={selectedAvatar ? { scale: 1.01 } : {}}
          onClick={handleContinue}
          disabled={!selectedAvatar}
          className={`w-full h-[56px] rounded-full text-white flex items-center justify-center text-[16px] font-semibold transition-all duration-200 mt-[32px] mb-[16px] ${
            !selectedAvatar ? 'cursor-not-allowed opacity-50' : ''
          }`}
          style={
            selectedAvatar
              ? {
                  background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                  border: '1px solid rgba(94, 234, 212, 0.15)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
                }
              : {
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                }
          }
        >
          <span className="flex items-center gap-[10px]">
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Continue
          </span>
        </motion.button>

        {/* Secondary action - Skip link */}
        <button
          onClick={() => {
            setUserAvatar(JSON.stringify({ color: '#B8A8D8', emoji: '🌸' }));
            navigate('/time-feeling');
          }}
          className="w-full h-[48px]"
        >
          <p className="font-['Inter',sans-serif] text-[16px] text-gray-400 text-center hover:text-[#58C7BD] transition-colors">
            Skip for now
          </p>
        </button>
      </div>
    </div>
  );
}