import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import imgChatGptImageMar82026094521Pm1 from "../../assets/e5a941d94a63350cd9819dd699b6bd17bbd0c54e.png";
import { useUser } from '../contexts/UserContext';

export function Landing() {
  const navigate = useNavigate();
  const { setUserName, setUserAvatar } = useUser();

  const handleGuestContinue = () => {
    setUserName('Guest User');
    setUserAvatar('#B8A8D8');
    navigate('/avatar-selection');
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

      {/* Title */}
      <h1 className="font-['Inter',sans-serif] font-bold text-white text-[32px] text-center mb-[12px]">
        Time feels different
      </h1>

      {/* Subtitle */}
      <p className="font-['Inter',sans-serif] text-gray-400 text-[18px] text-center mb-[32px]">
        Let's discover how it feels for you
      </p>

      {/* Main content - Illustration */}
      <div className="flex-1 flex items-center justify-center mb-[32px] relative overflow-hidden">
        {/* Gradient Circle Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <svg width="400" height="400" fill="none" viewBox="0 0 400 400">
            <ellipse cx="200" cy="200" rx="200" ry="200" fill="url(#paint0_linear_dark)" />
            <defs>
              <linearGradient id="paint0_linear_dark" x1="50" y1="50" x2="350" y2="350" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5eead4" stopOpacity="0.3" />
                <stop offset="1" stopColor="#14b8a6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 3D Character */}
        <div className="relative w-full max-w-[300px] opacity-80">
          <img 
            alt="ChronoWeave character" 
            className="w-full h-auto object-contain" 
            src={imgChatGptImageMar82026094521Pm1} 
          />
        </div>
      </div>

      {/* Primary Button - Sign Up */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.01 }}
        onClick={() => navigate('/signup')}
        className="w-full h-[56px] rounded-full text-white flex items-center justify-center text-[16px] font-semibold transition-all duration-200 mb-[16px]"
        style={{
          background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
          border: '1px solid rgba(94, 234, 212, 0.15)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
        }}
      >
        <span className="flex items-center gap-[10px]">
          <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8.5 3a4 4 0 100 8 4 4 0 000-8zM20 8v6M23 11h-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Sign Up
        </span>
      </motion.button>

      {/* Secondary Button - Log In */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.01 }}
        onClick={() => navigate('/login')}
        className="w-full h-[56px] rounded-full text-white font-semibold text-[16px] flex items-center justify-center transition-all duration-200 mb-[16px]"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        <span className="flex items-center gap-[10px]">
          <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Log In
        </span>
      </motion.button>

      {/* Text link - Continue as Guest */}
      <button
        onClick={handleGuestContinue}
        className="w-full h-[48px]"
      >
        <p className="font-['Inter',sans-serif] text-[16px] text-gray-400 text-center hover:text-[#58C7BD] transition-colors">
          Continue as Guest
        </p>
      </button>

      {/* Bottom spacing */}
      <div className="h-[32px]" />
    </div>
  );
}