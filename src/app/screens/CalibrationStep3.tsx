import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { CalibrationProgressBar } from '../components/CalibrationProgressBar';
import { ArrowLeft } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

export function CalibrationStep3() {
  const navigate = useNavigate();
  const { calibrationResults, setCalibrationResults } = useUser();
  const [isRunning, setIsRunning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTimeRef = useRef<number>(0);
  const timerRef = useRef<number | null>(null);

  const handleStart = () => {
    setIsRunning(true);
    setShowResult(false);
    startTimeRef.current = Date.now();
    
    timerRef.current = window.setInterval(() => {
      const elapsed = ((Date.now() - startTimeRef.current) / 1000);
      setElapsedTime(elapsed);
    }, 100);
  };

  const handleStop = () => {
    setIsRunning(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    const finalTime = ((Date.now() - startTimeRef.current) / 1000);
    setElapsedTime(finalTime);
    setShowResult(true);
  };

  const getDifference = () => {
    const diff = Math.abs(elapsedTime - 30);
    return diff.toFixed(1);
  };

  const getResultMessage = () => {
    const diff = Math.abs(elapsedTime - 30);
    if (diff < 2) return 'Excellent timing!';
    if (diff < 5) return 'Great sense of duration!';
    if (elapsedTime < 30) return 'Time felt quicker';
    return 'Time felt slower';
  };

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
            onClick={() => navigate('/calibration-step-2')}
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
          <CalibrationProgressBar currentStep={3} />
        </div>

        {/* Step Number */}
        <p 
          className="font-['Inter',sans-serif] font-semibold text-[#6EE7D2] text-center mb-[8px] text-[14px]"
        >
          Step 3/5
        </p>

        {/* Title */}
        <h1 
          className="font-['Inter',sans-serif] font-bold text-white text-center text-[28px] leading-tight mb-[8px]"
        >
          {!showResult ? 'Reproduce 30 seconds' : 'Test Complete'}
        </h1>
      </div>

      {!showResult ? (
        <>
          {/* INSTRUCTIONS - Middle 30% */}
          <div className="mb-[64px]">
            <p 
              className="font-['Inter',sans-serif] text-gray-300 text-center text-[15px]"
            >
              {!isRunning ? 'Tap Start, then Stop after 30 seconds' : 'Tap Stop when you feel 30 seconds'}
            </p>
          </div>

          {/* MAIN ACTION - Middle 40% */}
          <div className="flex-1 flex items-center justify-center py-[48px]">
            <div className="relative">
              {/* Expanding Ring Animation */}
              {isRunning && (
                <motion.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full border-4 border-[#4FD1C5]"
                />
              )}
              
              {/* Button Glow */}
              <div 
                className="absolute inset-0 rounded-full blur-[24px] opacity-20 pointer-events-none"
                style={{ backgroundColor: isRunning ? '#f472b6' : '#4FD1C5' }}
              />
              
              <button
                onClick={isRunning ? handleStop : handleStart}
                className={`relative rounded-full transition-all duration-200 ${
                  isRunning ? 'scale-95' : 'hover:scale-105 active:scale-95'
                }`}
                style={{
                  width: '220px',
                  height: '220px',
                  background: isRunning 
                    ? 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)'
                    : 'linear-gradient(135deg, #58C7BD 0%, #3DAFA6 100%)',
                  boxShadow: isRunning
                    ? '0 16px 40px rgba(244, 114, 182, 0.5)'
                    : '0 26px 53px rgba(79, 209, 197, 0.4)'
                }}
              >
                <p 
                  className="font-['Inter',sans-serif] font-bold text-white text-center"
                  style={{
                    fontSize: '20px',
                    letterSpacing: '0',
                  }}
                >
                  {isRunning ? 'Stop' : 'Start'}
                </p>
              </button>
            </div>
          </div>

          {/* FOOTER - Bottom 10% */}
          <div className="pb-[32px]">
            {isRunning && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-['Inter',sans-serif] text-gray-400 text-center text-[13px]"
              >
                Count silently in your head...
              </motion.p>
            )}
          </div>
        </>
      ) : (
        <>
          {/* INSTRUCTIONS - Middle 30% */}
          <div className="mb-[32px]">
            <p 
              className="font-['Inter',sans-serif] text-gray-300 text-center text-[15px]"
            >
              {getResultMessage()}
            </p>
          </div>

          {/* MAIN ACTION - Middle 40% */}
          <div className="flex-1 flex items-center justify-center py-[48px]">
            <div 
              className="w-full rounded-[24px] p-[24px]"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Your estimate */}
              <div className="flex items-center justify-between mb-[24px]">
                <p 
                  className="font-['Inter',sans-serif] text-gray-300 text-[15px]"
                >
                  You felt:
                </p>
                <p 
                  className="font-['Inter',sans-serif] font-bold text-[#6ee7b7] text-[24px]"
                >
                  {elapsedTime.toFixed(1)}s
                </p>
              </div>

              {/* Target time */}
              <div className="flex items-center justify-between mb-[24px]">
                <p 
                  className="font-['Inter',sans-serif] text-gray-300 text-[15px]"
                >
                  Target:
                </p>
                <p 
                  className="font-['Inter',sans-serif] font-bold text-white text-[24px]"
                >
                  30.0s
                </p>
              </div>

              {/* Difference */}
              <div className="flex items-center justify-between pt-[24px] border-t border-white/20">
                <p 
                  className="font-['Inter',sans-serif] text-gray-300 text-[15px]"
                >
                  Difference:
                </p>
                <p 
                  className="font-['Inter',sans-serif] font-bold text-[#c084fc] text-[24px]"
                >
                  {getDifference()}s
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER - Bottom 10% */}
          <div className="pb-[32px]">
            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.01 }}
              onClick={() => {
                // Save Test 2 result
                setCalibrationResults({
                  ...calibrationResults,
                  test2Time: elapsedTime
                });
                navigate('/calibration-step-4');
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
                Next Test
              </span>
            </motion.button>
          </div>
        </>
      )}
    </div>
  );
}