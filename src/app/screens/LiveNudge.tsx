import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../../imports/svg-txvclm8krn';

function TopNav() {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-start w-full pt-4 px-[24px] relative z-10">
      {/* Back Button - Top Left Only */}
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

interface ToggleOption {
  id: string;
  label: string;
  description: string;
  color: string;
  glowColor: string;
  icon: 'haptic' | 'audio' | 'light';
}

interface PopupContent {
  title: string;
  body: string[];
  footer: string;
  color: string;
  icon: 'haptic' | 'audio' | 'light';
}

function FeaturePopup({ 
  content, 
  onClose 
}: { 
  content: PopupContent; 
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const renderVisual = () => {
    if (content.icon === 'haptic') {
      return (
        <div className="relative w-[80px] h-[80px] mx-auto mb-[20px]">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: `${content.color}40` }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-[40px] h-[40px]" fill="none" viewBox="0 0 24 24">
              <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" 
                stroke={content.color} 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
              <circle cx="12" cy="12" r="3" 
                stroke={content.color} 
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      );
    } else if (content.icon === 'audio') {
      return (
        <div className="relative w-[80px] h-[80px] mx-auto mb-[20px] flex items-center justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{
                scaleY: [1, 1.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              className="w-[8px] mx-[2px] rounded-full"
              style={{ 
                backgroundColor: content.color,
                height: `${30 + (i % 2 === 0 ? 10 : 0)}px`
              }}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="relative w-[80px] h-[100px] mx-auto mb-[20px]">
          <div className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700">
            {/* Screen edges lighting up */}
            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-[12px]"
              style={{
                boxShadow: `inset 0 0 20px ${content.color}, 0 0 20px ${content.color}40`
              }}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center px-[5%]"
      style={{
        backgroundColor: 'rgba(10, 14, 26, 0.95)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[340px] rounded-[28px] p-[28px] overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, rgba(17, 24, 39, 0.95), rgba(10, 14, 26, 0.98))',
          border: `1px solid ${content.color}40`,
          boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${content.color}20`
        }}
      >
        {/* Subtle glow pulse */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${content.color}30, transparent 70%)`
          }}
        />

        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-[16px] right-[16px] size-[44px] rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 transition-all z-10 border border-white/10"
        >
          <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative z-10">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            {renderVisual()}
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white text-[22px] font-bold text-center mb-[20px] font-['Inter',sans-serif]"
          >
            {content.title}
          </motion.h3>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-[12px] mb-[24px]"
          >
            {content.body.map((line, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="text-gray-300 text-[14px] leading-relaxed font-['Inter',sans-serif] flex items-start gap-[8px]"
              >
                <span className="text-[10px] mt-[5px]" style={{ color: content.color }}>●</span>
                <span className="flex-1">{line}</span>
              </motion.p>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center pt-[16px] border-t border-white/10"
          >
            <p className="text-[13px] font-semibold font-['Inter',sans-serif]" style={{ color: content.color }}>
              {content.footer}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function WaveBackground({ intensity = 1 }: { intensity?: number }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setTime((t) => t + 0.01 * intensity);
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [intensity]);

  const createWavePath = (offset: number, amplitude: number, frequency: number) => {
    const points = 100;
    const width = 100;
    const height = 100;
    let path = `M 0 ${height / 2}`;
    
    for (let i = 0; i <= points; i++) {
      const x = (i / points) * width;
      const y = height / 2 + Math.sin((i / points) * Math.PI * frequency + time + offset) * amplitude;
      path += ` L ${x} ${y}`;
    }
    
    return path;
  };

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d={createWavePath(0, 8, 4)}
          stroke="url(#gradient1)"
          strokeWidth="0.3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d={createWavePath(Math.PI / 2, 6, 3)}
          stroke="url(#gradient2)"
          strokeWidth="0.3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
        />
        <motion.path
          d={createWavePath(Math.PI, 10, 5)}
          stroke="url(#gradient3)"
          strokeWidth="0.3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
        />
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5eead4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#5eead4" stopOpacity="1" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="1" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f472b6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#f472b6" stopOpacity="1" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ToggleSwitch({ 
  option, 
  isActive, 
  onToggle 
}: { 
  option: ToggleOption; 
  isActive: boolean; 
  onToggle: () => void;
}) {
  const renderIcon = () => {
    if (option.icon === 'haptic') {
      return (
        <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" 
            stroke={isActive ? option.color : '#6b7280'} 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
          <circle cx="12" cy="12" r="3" 
            stroke={isActive ? option.color : '#6b7280'} 
            strokeWidth="2"
            fill="none"
          />
        </svg>
      );
    } else if (option.icon === 'audio') {
      return (
        <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
          <path d="M9 18V5l12-2v13M9 18c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm12-2c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" 
            stroke={isActive ? option.color : '#6b7280'} 
            strokeWidth="2" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    } else {
      return (
        <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" 
            stroke={isActive ? option.color : '#6b7280'} 
            strokeWidth="2"
          />
          <path d="M12 2v2m0 16v2M22 12h-2M4 12H2m17.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41m12.73 0l-1.41-1.41M6.34 6.34L4.93 4.93" 
            stroke={isActive ? option.color : '#6b7280'} 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        </svg>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      onClick={onToggle}
      className="relative w-full rounded-[24px] p-[24px] cursor-pointer transition-all duration-300"
      style={{
        background: isActive 
          ? 'linear-gradient(to bottom, #0B1020, #050B19)'
          : 'rgba(255, 255, 255, 0.05)',
        border: isActive 
          ? `1px solid ${option.color}40` 
          : '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: isActive 
          ? `0 8px 32px ${option.glowColor}` 
          : '0 2px 8px rgba(0,0,0,0.2)'
      }}
    >
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 rounded-[24px]"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${option.glowColor}, transparent 70%)`,
            pointerEvents: 'none'
          }}
        />
      )}
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-[16px] flex-1 min-w-0">
          <div
            className="size-[56px] rounded-[18px] flex items-center justify-center shrink-0 transition-all duration-300"
            style={{
              backgroundColor: isActive ? `${option.color}20` : 'rgba(107, 114, 128, 0.1)',
              border: isActive ? `1px solid ${option.color}40` : '1px solid rgba(107, 114, 128, 0.2)'
            }}
          >
            {renderIcon()}
          </div>
          
          <div className="flex flex-col min-w-0 flex-1">
            <h3 
              className="font-['Inter',sans-serif] font-semibold text-[17px] transition-all duration-300 leading-tight"
              style={{ color: isActive ? option.color : 'white' }}
            >
              {option.label}
            </h3>
            <p className="font-['Inter',sans-serif] text-[13px] text-gray-400 mt-[4px] leading-tight">
              {option.description}
            </p>
          </div>
        </div>
        
        <motion.div
          className="relative w-[56px] h-[32px] rounded-full cursor-pointer shrink-0 ml-[12px]"
          style={{
            backgroundColor: isActive ? option.color : 'rgba(107, 114, 128, 0.3)',
            boxShadow: isActive ? `0 0 16px ${option.glowColor}` : 'none'
          }}
          animate={{
            backgroundColor: isActive ? option.color : 'rgba(107, 114, 128, 0.3)'
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute top-[4px] w-[24px] h-[24px] rounded-full bg-white shadow-lg"
            animate={{
              left: isActive ? '28px' : '4px'
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function BottomNav() {
  const navigate = useNavigate();
  
  return (
    <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[393px] px-[10px] sm:px-[20px] z-50">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 h-[72px] rounded-[47px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-between px-[16px] sm:px-[22px] w-full max-w-[353px] mx-auto">
        
        {/* Home */}
        <button onClick={() => navigate('/dashboard')} className="relative h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-[16px] size-[36px] sm:size-[40.4px] hover:bg-white/15 transition-all">
            <svg className="w-[18px] sm:w-[20.2px] h-[18px] sm:h-[20.2px]" fill="none" viewBox="0 0 20.2 20.2">
              <path d={svgPaths.p16c98900} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68" />
              <path d={svgPaths.pef5fd00} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68" />
            </svg>
          </div>
        </button>
        
        {/* Map */}
        <button onClick={() => navigate('/drift-map')} className="relative h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-[16px] size-[36px] sm:size-[40.4px] hover:bg-white/15 transition-all">
            <svg className="w-[18px] sm:w-[20.2px] h-[18px] sm:h-[20.2px]" fill="none" viewBox="0 0 24.1 24.1">
              <path d={svgPaths.p31e92270} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" />
              <path d="M15.0627 5.78778V20.8503" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" />
              <path d="M9.03775 3.24946V18.312" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" />
            </svg>
          </div>
        </button>

        {/* Pulse (Active) */}
        <button onClick={() => navigate('/live-nudge')} className="relative h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-[#5eead4] to-[#14b8a6] flex items-center justify-center rounded-[20px] shadow-[0_8px_24px_rgba(94,234,212,0.4)] size-[44px] sm:size-[48.2px] -mt-[5px]">
            <svg className="w-[20px] sm:w-[22px] h-[20px] sm:h-[22px]" fill="none" viewBox="0 0 19.6 19.6">
              <path d={svgPaths.p18580200} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.63" />
            </svg>
          </div>
        </button>

        {/* Chart */}
        <button onClick={() => navigate('/insights')} className="relative h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-[16px] size-[35px] sm:size-[39.2px] hover:bg-white/15 transition-all">
            <svg className="w-[17.5px] sm:w-[19.6px] h-[17.5px] sm:h-[19.6px]" fill="none" viewBox="0 0 19.6 19.6">
              <path d={svgPaths.p1a84a300} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64" />
              <path d={svgPaths.p39570400} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export function LiveNudge() {
  const navigate = useNavigate();
  const [activeToggles, setActiveToggles] = useState<Set<string>>(new Set());
  const [popupContent, setPopupContent] = useState<PopupContent | null>(null);

  const options: ToggleOption[] = [
    {
      id: 'haptic',
      label: 'Subtle haptic pulse',
      description: 'Gentle vibration feedback',
      color: '#5eead4',
      glowColor: 'rgba(94, 234, 212, 0.15)',
      icon: 'haptic'
    },
    {
      id: 'audio',
      label: 'Audio tempo tone',
      description: 'Rhythmic sound cues',
      color: '#f472b6',
      glowColor: 'rgba(244, 114, 182, 0.15)',
      icon: 'audio'
    },
    {
      id: 'light',
      label: 'Ambient light cue',
      description: 'Soft visual pulse',
      color: '#FBBF24',
      glowColor: 'rgba(251, 191, 36, 0.15)',
      icon: 'light'
    }
  ];

  const handleToggle = (id: string) => {
    setActiveToggles((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
        // Show popup when activating
        showPopupForToggle(id);
      }
      return newSet;
    });
  };

  const showPopupForToggle = (id: string) => {
    const popupContents: Record<string, PopupContent> = {
      haptic: {
        title: '✅ Haptic Pulse Active',
        body: [
          'Gentle vibrations will guide you when time drift is detected.',
          'Short pulse = 1 minute passed',
          'Double pulse = approaching transition',
          'Intensity increases gradually',
          'Battery impact: Minimal (uses standard haptics)'
        ],
        footer: 'Starts working immediately',
        color: '#5eead4',
        icon: 'haptic'
      },
      audio: {
        title: '✅ Audio Tempo Active',
        body: [
          'Soft rhythmic tones help you feel time passage.',
          'Single chime every 5 minutes during focus',
          'Tempo accelerates when drift detected',
          'Mutes automatically during calls/meetings',
          '40% quieter than standard alarms'
        ],
        footer: 'Plays through earbuds/speaker',
        color: '#f472b6',
        icon: 'audio'
      },
      light: {
        title: '✅ Light Cues Active',
        body: [
          'Screen edges pulse softly to signal time boundaries.',
          'Screen corners glow during transitions',
          'Full-screen tint for 10-second warnings',
          'Adapts to ambient light automatically',
          'Works in Always-On Display mode'
        ],
        footer: 'Visible even when screen is locked',
        color: '#FBBF24',
        icon: 'light'
      }
    };

    setPopupContent(popupContents[id]);
  };

  const intensity = 1 + (activeToggles.size * 0.3);

  return (
    <div 
      className="relative max-w-[441px] mx-auto min-h-screen font-['Inter',sans-serif] overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0B132B 0%, #121E3A 50%, #1C2A4A 100%)',
      }}
    >
      
      {/* Animated Wave Background */}
      <WaveBackground intensity={intensity} />
      
      <TopNav />
      
      {/* Hero Header Section - Centered */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col items-center px-[24px] pt-[32px] pb-[40px] relative z-10"
      >
        {/* Feature Icon */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="size-[64px] rounded-[20px] flex items-center justify-center mb-[24px] relative"
          style={{ 
            backgroundColor: '#5eead420',
            boxShadow: '0 0 32px #5eead430'
          }}
        >
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-[20px]"
            style={{ 
              background: 'linear-gradient(to bottom right, rgba(94, 234, 212, 0.3), rgba(94, 234, 212, 0.1))'
            }}
          />
          <svg className="w-[32px] h-[32px] relative z-10" fill="none" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#5eead4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        
        {/* Page Title */}
        <h1 className="text-white text-[28px] font-bold text-center mb-[12px] leading-tight">
          Live Nudge
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-400 text-[15px] text-center max-w-[280px]">
          Choose your sensory feedback modes
        </p>
      </motion.div>
      
      {/* Main Content Container */}
      <div className="relative z-10 px-[24px] pb-[120px]">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-[32px]"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-[20px] py-[10px] flex items-center gap-[8px]">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.6, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="size-[8px] rounded-full bg-[#6ee7b7]"
            />
            <span className="text-[#6ee7b7] text-[14px] font-semibold">
              {activeToggles.size > 0 ? `${activeToggles.size} mode${activeToggles.size > 1 ? 's' : ''} active` : 'Monitoring'}
            </span>
          </div>
        </motion.div>

        {/* Toggle Options */}
        <div className="flex-1 space-y-[16px]">
          {options.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <ToggleSwitch
                option={option}
                isActive={activeToggles.has(option.id)}
                onToggle={() => handleToggle(option.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-[32px] bg-gradient-to-br from-white/8 to-white/5 backdrop-blur-xl rounded-[24px] p-[20px] border border-white/10"
        >
          <div className="flex items-start gap-[16px]">
            <div className="shrink-0 w-[36px] h-[36px] bg-gradient-to-br from-[#c084fc]/20 to-[#c084fc]/10 rounded-[12px] flex items-center justify-center border border-[#c084fc]/20">
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#c084fc" strokeWidth="2" />
                <path d="M12 16v-4m0-4h.01" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-gray-300 text-[14px] leading-relaxed">
                Nudges adapt in real-time as your focus drifts. They're designed to gently guide you back without interrupting your flow.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <BottomNav />

      {/* Feature Popup */}
      <AnimatePresence>
        {popupContent && (
          <FeaturePopup
            content={popupContent}
            onClose={() => setPopupContent(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}