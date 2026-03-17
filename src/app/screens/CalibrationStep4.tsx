import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { CalibrationProgressBar } from '../components/CalibrationProgressBar';
import { ArrowLeft } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

type RhythmSpeed = 'fast' | 'slow' | 'steady';

export function CalibrationStep4() {
  const navigate = useNavigate();
  const { calibrationResults, setCalibrationResults } = useUser();
  const [selectedRhythm, setSelectedRhythm] = useState<RhythmSpeed | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  const correctAnswer: RhythmSpeed = 'fast';

  const rhythmConfigs = {
    fast: { duration: 0.4, label: 'Fast' },
    slow: { duration: 1.2, label: 'Slow' },
    steady: { duration: 0.8, label: 'Steady' },
  };

  const handleSelect = (rhythm: RhythmSpeed) => {
    setSelectedRhythm(rhythm);
    setTimeout(() => {
      setShowResult(true);
    }, 600);
  };

  const isCorrect = selectedRhythm === correctAnswer;

  return (
    <div 
      className="h-full flex flex-col px-[24px]" 
      style={{
        background: 'linear-gradient(to bottom, #0B1020 0%, #141A35 50%, #1F2950 100%)'
      }}
    >
      {/* HEADER - Top 20% */}
      <div className="pt-[48px] pb-[32px]">
        {/* Back Button & Skip */}
        <div className="flex justify-between items-center mb-[24px]">
          <button
            onClick={() => navigate('/calibration-step-3')}
            className="text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="font-['Inter',sans-serif] font-medium text-white/70 hover:text-white transition-colors"
            style={{ fontSize: '16px' }}
          >
            Skip
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-[24px]">
          <CalibrationProgressBar currentStep={4} />
        </div>

        {/* Step Number */}
        <p 
          className="font-['Inter',sans-serif] font-semibold text-[#6EE7D2] text-center mb-[8px] text-[14px]"
        >
          Step 4/5
        </p>

        {/* Title */}
        <h1 
          className="font-['Inter',sans-serif] font-bold text-white text-center text-[28px] leading-tight mb-[8px]"
        >
          {!showResult ? 'Spot the rhythm' : 'Test Complete'}
        </h1>
      </div>

      {!showResult ? (
        <>
          {/* INSTRUCTIONS - Middle 30% */}
          <div className="mb-[64px]">
            <p 
              className="font-['Inter',sans-serif] text-gray-300 text-center text-[15px]"
            >
              Tap the sequence that feels fastest
            </p>
          </div>

          {/* MAIN ACTION - Middle 40% */}
          <div className="flex-1 flex items-center justify-center py-[48px]">
            <div className="space-y-[16px] w-full">
              {(Object.entries(rhythmConfigs) as [RhythmSpeed, typeof rhythmConfigs.fast][]).map(([rhythm, config]) => (
                <button
                  key={rhythm}
                  onClick={() => handleSelect(rhythm)}
                  disabled={selectedRhythm !== null}
                  className={`w-full rounded-[20px] p-[24px] transition-all duration-200 ${
                    selectedRhythm === rhythm
                      ? 'scale-95'
                      : 'hover:bg-white/10'
                  } ${selectedRhythm && selectedRhythm !== rhythm ? 'opacity-50' : ''}`}
                  style={{
                    background: selectedRhythm === rhythm 
                      ? 'rgba(110, 231, 210, 0.1)'
                      : 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: selectedRhythm === rhythm 
                      ? '1px solid #6EE7D2'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: selectedRhythm === rhythm 
                      ? '0 0 24px rgba(110, 231, 210, 0.4)'
                      : 'none',
                  }}
                >
                  {/* Pulsing Dots */}
                  <div className="flex gap-[12px] justify-center">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        className="rounded-full"
                        initial={{ scale: 0.6, opacity: 0.4 }}
                        animate={{ 
                          scale: [0.6, 1, 0.6], 
                          opacity: [0.4, 1, 0.4] 
                        }}
                        transition={{
                          duration: config.duration,
                          repeat: Infinity,
                          delay: index * (config.duration / 3),
                          ease: 'easeInOut',
                        }}
                        style={{ 
                          width: '16px',
                          height: '16px',
                          backgroundColor: '#6EE7D2' 
                        }}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* FOOTER - Bottom 10% */}
          <div className="pb-[32px]">
            <p 
              className="font-['Inter',sans-serif] text-gray-400 text-center text-[13px]"
            >
              Watch the pulsing dots carefully
            </p>
          </div>
        </>
      ) : (
        <>
          {/* INSTRUCTIONS - Middle 30% */}
          <div className="mb-[32px]">
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-['Inter',sans-serif] text-gray-300 text-center text-[15px]"
            >
              {isCorrect ? 'Correct! Fast rhythm detected' : 'Good try! That was the steady rhythm'}
            </motion.p>
          </div>

          {/* MAIN ACTION - Middle 40% */}
          <div className="flex-1 flex items-center justify-center py-[48px]">
            <div 
              className="w-full rounded-[24px] p-[32px] flex flex-col items-center"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className={`rounded-full flex items-center justify-center mb-[16px]`}
                style={{
                  width: '96px',
                  height: '96px',
                  backgroundColor: isCorrect ? 'rgba(34, 197, 94, 0.2)' : 'rgba(234, 179, 8, 0.2)',
                }}
              >
                <span style={{ fontSize: '48px' }}>
                  {isCorrect ? '✓' : '→'}
                </span>
              </motion.div>
              <p 
                className="font-['Inter',sans-serif] text-gray-300 text-center text-[15px]"
              >
                {isCorrect 
                  ? 'Your rhythm detection is excellent!' 
                  : 'This helps us understand your time perception'}
              </p>
            </div>
          </div>

          {/* FOOTER - Bottom 10% */}
          <div className="pb-[32px]">
            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.01 }}
              onClick={() => {
                // Save Test 3 result
                setCalibrationResults({
                  ...calibrationResults,
                  test3Correct: isCorrect
                });
                navigate('/calibration-step-5');
              }}
              className="w-full h-[56px] rounded-full text-white flex items-center justify-center text-[16px] font-semibold transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                border: '1px solid rgba(94, 234, 212, 0.15)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
              }}
            >
              <span className="flex items-center gap-[10px]">
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Final Test
              </span>
            </motion.button>
          </div>
        </>
      )}
    </div>
  );
}