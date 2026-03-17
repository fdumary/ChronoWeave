import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { CalibrationProgressBar } from '../components/CalibrationProgressBar';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useUser } from '../contexts/UserContext';

export function CalibrationTest1() {
  const navigate = useNavigate();
  const { calibrationResults, setCalibrationResults } = useUser();
  const [isHolding, setIsHolding] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTimeRef = useRef<number>(0);
  const timerRef = useRef<number | null>(null);

  const handleMouseDown = () => {
    setIsHolding(true);
    setShowResult(false);
    startTimeRef.current = Date.now();
  };

  const handleMouseUp = () => {
    setIsHolding(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    const finalTime = ((Date.now() - startTimeRef.current) / 1000);
    setElapsedTime(finalTime);
    setShowResult(true);
  };

  const getDifference = () => {
    const diff = Math.abs(elapsedTime - 10);
    return diff.toFixed(1);
  };

  const getResultMessage = () => {
    const diff = Math.abs(elapsedTime - 10);
    if (diff < 1) return 'Perfect timing!';
    if (diff < 2) return 'Very close!';
    if (elapsedTime < 10) return 'A bit quick';
    return 'A bit slow';
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
            onClick={() => navigate('/calibration-welcome')}
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
          <CalibrationProgressBar currentStep={2} />
        </div>

        {/* Step Number */}
        <p 
          className="font-['Inter',sans-serif] font-semibold text-[#6EE7D2] text-center mb-[8px] text-[14px]"
        >
          Step 2/5
        </p>

        {/* Title */}
        <h1 
          className="font-['Inter',sans-serif] font-bold text-white text-center text-[28px] leading-tight mb-[8px]"
        >
          {!showResult ? 'Hold for 10 seconds' : 'Test Complete'}
        </h1>
      </div>

      {!showResult ? (
        <>
          {/* INSTRUCTIONS - Middle 30% */}
          <div className="mb-[64px]">
            <p 
              className="font-['Inter',sans-serif] text-gray-300 text-center text-[15px]"
            >
              Release when you feel 10 seconds pass
            </p>
          </div>

          {/* MAIN ACTION - Middle 40% */}
          <div className="flex-1 flex items-center justify-center py-[48px]">
            <div className="relative">
              {/* Button Glow */}
              <div 
                className="absolute inset-0 rounded-full blur-[24px] opacity-20 pointer-events-none"
                style={{ backgroundColor: '#4FD1C5' }}
              />
              
              <button
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
                className={`relative rounded-full transition-all duration-200 ${
                  isHolding ? 'scale-95' : 'hover:scale-105 active:scale-95'
                }`}
                style={{
                  width: '220px',
                  height: '220px',
                  background: 'linear-gradient(135deg, #58C7BD 0%, #3DAFA6 100%)',
                  boxShadow: isHolding 
                    ? '0 16px 40px rgba(79, 209, 197, 0.5)' 
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
                  {isHolding ? 'Holding...' : 'Press & Hold'}
                </p>
              </button>
            </div>
          </div>

          {/* FOOTER - Bottom 10% */}
          <div className="pb-[32px]">
            <p 
              className="font-['Inter',sans-serif] text-gray-400 text-center text-[13px]"
            >
              Release when you feel 10 seconds have passed
            </p>
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
                  You held for:
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
                  10.0s
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
                // Save Test 1 result
                setCalibrationResults({
                  ...calibrationResults,
                  test1Time: elapsedTime
                });
                navigate('/calibration-step-3');
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