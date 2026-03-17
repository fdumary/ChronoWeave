import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/b75c9e5c2c4c798228e6af43c03a109927a042e0.png';

export function AnimatedIntro() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log('AnimatedIntro mounted - animation starting');
    // Smooth progress from 0 to 100 over 20 seconds
    const startTime = Date.now();
    const duration = 20000; // 20 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => navigate('/landing'), 500);
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [navigate]);

  const handleSkip = () => {
    navigate('/landing');
  };

  return (
    <div 
      className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: '#0f172a',
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: 'rgba(94, 234, 212, 0.3)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Skip Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={handleSkip}
        className="absolute top-8 right-6 z-50 px-4 py-2 rounded-full text-sm font-medium"
        style={{
          color: 'rgba(148, 163, 184, 0.8)',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        Skip
      </motion.button>

      {/* Main Animation Container */}
      <div className="w-full max-w-[375px] px-8 flex flex-col items-center justify-center relative">
        
        {/* Central Visual - Continuous transformation */}
        <div className="relative w-full h-[280px] mb-8 flex items-center justify-center">
          
          {/* PROBLEM (0-6s): Chaotic, distorted clock */}
          <motion.div
            className="absolute"
            animate={{
              opacity: progress < 30 ? 1 : 0,
              scale: progress < 30 ? 1 : 0.8,
            }}
            transition={{ duration: 0.8 }}
          >
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              {/* Distorted clock face */}
              <motion.ellipse
                cx="100"
                cy="100"
                rx="75"
                ry="75"
                stroke="#dc2626"
                strokeWidth="3"
                fill="rgba(220, 38, 38, 0.1)"
                animate={{
                  rx: [75, 85, 70, 75],
                  ry: [75, 70, 85, 75],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Chaotic hour markers */}
              {[...Array(12)].map((_, i) => {
                const baseAngle = (i * 30 - 90) * (Math.PI / 180);
                return (
                  <motion.line
                    key={i}
                    x1={100 + 65 * Math.cos(baseAngle)}
                    y1={100 + 65 * Math.sin(baseAngle)}
                    x2={100 + 70 * Math.cos(baseAngle)}
                    y2={100 + 70 * Math.sin(baseAngle)}
                    stroke="#dc2626"
                    strokeWidth="2"
                    opacity="0.6"
                    animate={{
                      x1: 100 + (65 + Math.sin(i) * 10) * Math.cos(baseAngle),
                      y1: 100 + (65 + Math.sin(i) * 10) * Math.sin(baseAngle),
                    }}
                    transition={{
                      duration: 1.5 + i * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                );
              })}

              {/* Confused spinning hands */}
              <motion.line
                x1="100"
                y1="100"
                x2="100"
                y2="50"
                stroke="#dc2626"
                strokeWidth="3"
                strokeLinecap="round"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: '100px 100px' }}
              />
              <motion.line
                x1="100"
                y1="100"
                x2="130"
                y2="100"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: '100px 100px' }}
              />
            </svg>

            {/* Question marks floating around */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`q${i}`}
                className="absolute text-3xl font-bold text-red-400"
                style={{
                  left: `${30 + i * 30}%`,
                  top: `${20 + (i % 2) * 60}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                ?
              </motion.div>
            ))}
          </motion.div>

          {/* TRANSITION (6-8s): Breaking apart and reforming */}
          <motion.div
            className="absolute"
            animate={{
              opacity: progress >= 30 && progress < 40 ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Particles scattering and reforming */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45) * (Math.PI / 180);
              return (
                <motion.div
                  key={`particle${i}`}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #dc2626 0%, #5eead4 100%)',
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [0, 60 * Math.cos(angle), 0],
                    y: [0, 60 * Math.sin(angle), 0],
                    scale: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              );
            })}
          </motion.div>

          {/* SOLUTION (8-14s): ChronoWeave logo forming with weave pattern */}
          <motion.div
            className="absolute flex items-center justify-center"
            animate={{
              opacity: progress >= 40 && progress < 70 ? 1 : 0,
              scale: progress >= 40 && progress < 70 ? 1 : 0.8,
            }}
            transition={{ duration: 0.8 }}
          >
            {/* Glowing ring behind logo */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: '220px',
                height: '220px',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* ChronoWeave Logo with animations */}
            <motion.img 
              src={logoImage}
              alt="ChronoWeave"
              className="relative"
              style={{
                width: '180px',
                height: '180px',
                mixBlendMode: 'screen',
              }}
              initial={{ 
                scale: 0,
                rotate: -180,
                opacity: 0 
              }}
              animate={{ 
                scale: progress >= 40 ? 1 : 0,
                rotate: progress >= 40 ? 0 : -180,
                opacity: progress >= 40 ? 1 : 0,
              }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut"
              }}
            />

            {/* Pulsing circles around logo */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`pulse${i}`}
                className="absolute rounded-full border-2"
                style={{
                  width: '200px',
                  height: '200px',
                  borderColor: 'rgba(168, 85, 247, 0.3)',
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: progress >= 42 ? [0.9, 1.3, 1.3] : 0.9,
                  opacity: progress >= 42 ? [0.5, 0, 0] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Rotating particles */}
            {[...Array(6)].map((_, i) => {
              const angle = (i * 60) * (Math.PI / 180);
              const radius = 110;
              return (
                <motion.div
                  key={`orbit${i}`}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
                    boxShadow: '0 0 10px rgba(167, 139, 250, 0.6)',
                  }}
                  initial={{ 
                    x: radius * Math.cos(angle), 
                    y: radius * Math.sin(angle),
                    opacity: 0 
                  }}
                  animate={{
                    x: progress >= 43 ? radius * Math.cos(angle + (progress - 43) * 0.1) : radius * Math.cos(angle),
                    y: progress >= 43 ? radius * Math.sin(angle + (progress - 43) * 0.1) : radius * Math.sin(angle),
                    opacity: progress >= 43 ? [0.4, 0.8, 0.4] : 0,
                    scale: progress >= 43 ? [1, 1.3, 1] : 1,
                  }}
                  transition={{
                    opacity: { duration: 2, repeat: Infinity, delay: i * 0.2 },
                    scale: { duration: 2, repeat: Infinity, delay: i * 0.2 },
                  }}
                />
              );
            })}
          </motion.div>

          {/* HOW IT WORKS (14-20s): Interface preview - tracking, calibration, insights */}
          <motion.div
            className="absolute"
            animate={{
              opacity: progress >= 70 ? 1 : 0,
              scale: progress >= 70 ? 1 : 0.9,
            }}
            transition={{ duration: 0.8 }}
          >
            {/* Mini app preview */}
            <div className="relative">
              {/* Phone frame */}
              <div 
                className="w-[180px] h-[240px] rounded-3xl p-4 flex flex-col items-center justify-center gap-3"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(94, 234, 212, 0.2)',
                }}
              >
                {/* Tracking icon */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: progress >= 70 ? 1 : 0, y: progress >= 70 ? 0 : 10 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(94, 234, 212, 0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#5eead4" strokeWidth="2" />
                      <path d="M12 6v6l4 2" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-xs text-teal-300 font-medium">Track</span>
                </motion.div>

                {/* Calibrate icon */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: progress >= 75 ? 1 : 0, y: progress >= 75 ? 0 : 10 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(94, 234, 212, 0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-xs text-teal-300 font-medium">Calibrate</span>
                </motion.div>

                {/* Insights icon */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: progress >= 80 ? 1 : 0, y: progress >= 80 ? 0 : 10 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(94, 234, 212, 0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3v18h18" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 12l4-4 4 4 5-5" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs text-teal-300 font-medium">Understand</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Text - Changes based on progress */}
        <div className="text-center min-h-[120px] flex flex-col items-center justify-start">
          {/* PROBLEM TEXT (0-6s) */}
          <motion.div
            animate={{
              opacity: progress < 30 ? 1 : 0,
              y: progress < 30 ? 0 : -20,
            }}
            transition={{ duration: 0.6 }}
            className="absolute"
          >
            <h1 className="text-2xl font-bold text-white mb-3 font-['Inter',sans-serif]">
              Time feels broken
            </h1>
            <p className="text-base text-gray-400 font-['Inter',sans-serif]">
              5 minutes can feel like an hour,<br />or disappear in seconds
            </p>
          </motion.div>

          {/* SOLUTION TEXT (8-14s) */}
          <motion.div
            animate={{
              opacity: progress >= 40 && progress < 70 ? 1 : 0,
              y: progress >= 40 && progress < 70 ? 0 : 20,
            }}
            transition={{ duration: 0.6 }}
            className="absolute"
          >
            <h1 className="text-3xl font-bold text-white mb-3 font-['Inter',sans-serif]">
              ChronoWeave
            </h1>
            <p className="text-base text-gray-400 font-['Inter',sans-serif]">
              Understand your unique<br />relationship with time
            </p>
          </motion.div>

          {/* HOW IT WORKS TEXT (14-20s) */}
          <motion.div
            animate={{
              opacity: progress >= 70 ? 1 : 0,
              y: progress >= 70 ? 0 : 20,
            }}
            transition={{ duration: 0.6 }}
            className="absolute"
          >
            <h1 className="text-2xl font-bold text-white mb-3 font-['Inter',sans-serif]">
              Your personal time guide
            </h1>
            <p className="text-base text-gray-400 font-['Inter',sans-serif]">
              Track. Calibrate. Understand.<br />Built for ADHD minds.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #5eead4 0%, #0d9488 100%)',
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}