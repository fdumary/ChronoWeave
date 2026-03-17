import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import svgPaths from '../../imports/svg-qe6d3ztraq';

function TopNav() {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-start w-full pt-4 px-[24px] relative z-10">
      {/* Back/Settings Button - Top Left Only */}
      <div 
        onClick={() => navigate('/dashboard')} 
        className="size-[40px] rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity relative flex items-center justify-center"
        style={{
          backgroundColor: '#1E2747',
        }}
      >
        <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export function TimeFeelingSelection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    {
      id: 'flies',
      label: 'Time flies',
      description: 'Hours disappear quickly.',
      color: '#c084fc',
      icon: 'lightning',
    },
    {
      id: 'drags',
      label: 'Time drags',
      description: 'Minutes feel long.',
      color: '#5eead4',
      icon: 'turtle',
    },
    {
      id: 'lost',
      label: 'I lose track of time',
      description: 'You forget to check the clock.',
      color: '#f472b6',
      icon: 'cloud',
    },
  ];

  const handleContinue = () => {
    if (selected) {
      navigate('/calibration-welcome');
    }
  };

  const renderIcon = (iconType: string, color: string) => {
    if (iconType === 'lightning') {
      return (
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7145 35.7145">
          <g>
            <path d={svgPaths.pf123a00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.97621" />
          </g>
        </svg>
      );
    } else if (iconType === 'turtle') {
      return (
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7145 35.7145">
          <g>
            <path d={svgPaths.p3240d900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.97621" />
            <path d={svgPaths.p2520f400} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.97621" />
            <path d={svgPaths.p6dcba80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.97621" />
            <path d={svgPaths.p13e23f80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.97621" />
          </g>
        </svg>
      );
    } else if (iconType === 'cloud') {
      return (
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7145 35.7145">
          <g>
            <path d={svgPaths.p33ece580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.97621" />
          </g>
        </svg>
      );
    }
  };

  return (
    <div 
      className="relative max-w-[441px] mx-auto min-h-screen font-['Inter',sans-serif] overflow-x-hidden pb-10"
      style={{
        background: 'linear-gradient(to bottom, #0B132B 0%, #121E3A 50%, #1C2A4A 100%)',
      }}
    >
      
      <TopNav />
      
      {/* Hero Header Section - Centered */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col items-center px-[24px] pt-[32px] pb-[40px] relative z-10"
      >
        {/* Feature Icon */}
        <div 
          className="size-[64px] rounded-[20px] flex items-center justify-center mb-[24px]"
          style={{ 
            backgroundColor: '#5eead420',
            boxShadow: '0 0 32px #5eead430'
          }}
        >
          <svg className="w-[32px] h-[32px]" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="#5eead4" strokeWidth="2" />
            <path d="M12 6v6l4 2" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        
        {/* Page Title */}
        <h1 className="text-white text-[28px] font-bold text-center mb-[12px] leading-tight">
          How does time feel to you?
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-400 text-[15px] text-center max-w-[280px]">
          There's no wrong answer — pick what feels closest
        </p>
      </motion.div>
      
      {/* Main Content Container */}
      <div className="px-[24px] pb-[100px] relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[300px] overflow-hidden opacity-30">
          <div className="absolute top-[40px] right-[20px] w-[200px] h-[200px] bg-gradient-to-br from-[#5eead4]/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-[100px] left-[30px] w-[150px] h-[150px] bg-gradient-to-br from-[#c084fc]/20 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Options */}
        <div className="space-y-[16px] mb-[48px] relative z-10">
          {options.map((option, index) => {
            const isSelected = selected === option.id;
            const isFaded = selected && selected !== option.id;
            
            return (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: isFaded ? 1 : 1.02 }}
                whileTap={{ scale: isFaded ? 1 : 0.98 }}
                onClick={() => setSelected(option.id)}
                className={`w-full rounded-[24px] p-[20px] transition-all duration-300 ${
                  isSelected ? 'shadow-[0_8px_24px_rgba(0,0,0,0.3)]' : ''
                }`}
                style={{
                  background: isSelected 
                    ? 'linear-gradient(to bottom, #0B1020, #050B19)'
                    : 'rgba(255, 255, 255, 0.05)',
                  border: isSelected 
                    ? `1px solid ${option.color}40` 
                    : '1px solid rgba(255,255,255,0.1)',
                  opacity: isFaded ? 0.4 : 1,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div 
                  className="flex items-center gap-[20px] transition-all duration-300" 
                  style={{ 
                    transform: isSelected ? 'scale(1.02)' : 'scale(1)'
                  }}
                >
                  <div
                    className="rounded-[20px] size-[64px] flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{ 
                      backgroundColor: isSelected ? `${option.color}20` : `${option.color}15`,
                      border: isSelected ? `1px solid ${option.color}30` : 'none'
                    }}
                  >
                    <div className="relative size-[32px]">
                      {renderIcon(option.icon, option.color)}
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center text-left flex-1">
                    <p
                      className="font-['Inter',sans-serif] font-semibold transition-all duration-300"
                      style={{ 
                        color: isSelected ? option.color : 'white',
                        fontSize: isSelected ? '20px' : '18px',
                        lineHeight: '28px'
                      }}
                    >
                      {option.label}
                    </p>
                    {!selected && (
                      <p className="font-['Inter',sans-serif] text-[14px] leading-[20px] text-gray-400 mt-1 transition-opacity duration-300">
                        {option.description}
                      </p>
                    )}
                  </div>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', bounce: 0.5 }}
                      className="size-[24px] rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: option.color }}
                    >
                      <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Continue Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileTap={{ scale: selected ? 0.98 : 1 }}
          whileHover={{ scale: selected ? 1.01 : 1 }}
          onClick={handleContinue}
          disabled={!selected}
          className={`w-full h-[56px] rounded-full transition-all duration-300 mb-[32px] relative z-10 flex items-center justify-center text-[16px] font-semibold ${
            selected ? '' : 'cursor-not-allowed'
          }`}
          style={{
            background: selected 
              ? 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)'
              : 'rgba(255,255,255,0.1)',
            border: selected 
              ? '1px solid rgba(94, 234, 212, 0.15)'
              : '1px solid rgba(255,255,255,0.1)',
            boxShadow: selected 
              ? '0 2px 8px rgba(0, 0, 0, 0.4)'
              : 'none',
            color: selected ? 'white' : '#6b7280',
          }}
        >
          <span className="flex items-center gap-[10px]">
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Continue
          </span>
        </motion.button>

        {/* Go to Dashboard Link */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          onClick={() => navigate('/dashboard')}
          className="w-full text-center hover:opacity-80 transition-opacity relative z-10"
        >
          <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[21px] text-gray-400">
            Go to Dashboard
          </p>
        </motion.button>
      </div>
    </div>
  );
}