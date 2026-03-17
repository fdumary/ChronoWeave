import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { CalibrationProgressBar } from '../components/CalibrationProgressBar';
import { Check } from 'lucide-react';

export function CalibrationStep5() {
  const navigate = useNavigate();

  return (
    <div
      className="h-full flex flex-col px-[24px]"
      style={{
        background: 'linear-gradient(to bottom, #0B1020 0%, #141A35 50%, #1F2950 100%)',
      }}
    >
      {/* HEADER - Top 20% */}
      <div className="pt-[48px] pb-[32px]">
        {/* Progress Bar */}
        <div className="mb-[24px]">
          <CalibrationProgressBar currentStep={5} />
        </div>

        {/* Step Number */}
        <p 
          className="font-['Inter',sans-serif] font-semibold text-[#6EE7D2] text-center mb-[8px] text-[14px]"
        >
          Step 5/5
        </p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-['Inter',sans-serif] font-bold text-white text-center text-[28px] leading-tight mb-[8px]"
        >
          Your Time Profile Created
        </motion.h1>
      </div>

      {/* INSTRUCTIONS - Middle 30% */}
      <div className="mb-[32px]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="flex items-center justify-center mb-[24px]"
        >
          <div 
            className="rounded-full flex items-center justify-center"
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(110, 231, 210, 0.2)',
            }}
          >
            <Check size={40} className="text-[#6EE7D2]" strokeWidth={3} />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-['Inter',sans-serif] text-gray-300 text-center text-[15px]"
        >
          We'll use this to give you perfect nudges
        </motion.p>
      </div>

      {/* MAIN ACTION - Middle 40% */}
      <div className="flex-1 flex items-center justify-center py-[48px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full rounded-[24px] p-[24px]"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Stats Title */}
          <h3 
            className="font-['Inter',sans-serif] font-bold text-white text-center mb-[24px]"
            style={{
              fontSize: '20px',
              letterSpacing: '0',
            }}
          >
            Your Time Perception
          </h3>

          {/* Morning Stats */}
          <div className="mb-[24px]">
            <div className="flex justify-between items-center mb-[8px]">
              <p 
                className="font-['Inter',sans-serif] font-medium text-gray-300"
                style={{
                  fontSize: '16px',
                  letterSpacing: '0.02em',
                }}
              >
                Morning accuracy
              </p>
              <p 
                className="font-['Inter',sans-serif] font-bold text-[#6EE7D2]"
                style={{
                  fontSize: '20px',
                  letterSpacing: '0',
                }}
              >
                92%
              </p>
            </div>
            <div 
              className="w-full rounded-full overflow-hidden"
              style={{
                height: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '92%' }}
                transition={{ delay: 0.7, duration: 0.8 }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(to right, #5eead4, #14b8a6)',
                }}
              />
            </div>
          </div>

          {/* Evening Stats */}
          <div className="mb-[24px]">
            <div className="flex justify-between items-center mb-[8px]">
              <p 
                className="font-['Inter',sans-serif] font-medium text-gray-300"
                style={{
                  fontSize: '16px',
                  letterSpacing: '0.02em',
                }}
              >
                Evening accuracy
              </p>
              <p 
                className="font-['Inter',sans-serif] font-bold text-[#f472b6]"
                style={{
                  fontSize: '20px',
                  letterSpacing: '0',
                }}
              >
                61%
              </p>
            </div>
            <div 
              className="w-full rounded-full overflow-hidden"
              style={{
                height: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '61%' }}
                transition={{ delay: 0.9, duration: 0.8 }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(to right, #f472b6, #ec4899)',
                }}
              />
            </div>
          </div>

          {/* Divider */}
          <div 
            className="my-[24px]"
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          />

          {/* Pattern Summary */}
          <div className="flex items-start gap-[12px]">
            <div 
              className="rounded-full mt-[6px]"
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#6EE7D2',
              }}
            />
            <p 
              className="font-['Inter',sans-serif] font-medium text-gray-300"
              style={{
                fontSize: '15px',
                letterSpacing: '0.02em',
                lineHeight: '22.5px',
              }}
            >
              Your time sense is{' '}
              <span className="text-[#6EE7D2] font-bold">stable in the morning</span>
              {' '}but experiences{' '}
              <span className="text-[#f472b6] font-bold">fast drift in the evening</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* FOOTER - Bottom 10% */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="pb-[32px] space-y-[16px]"
      >
        {/* Primary Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.01 }}
          onClick={() => navigate('/dashboard')}
          className="w-full h-[56px] rounded-full text-white flex items-center justify-center text-[16px] font-semibold transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
            border: '1px solid rgba(94, 234, 212, 0.15)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
          }}
        >
          <span className="flex items-center gap-[10px]">
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Start Using ChronoWeave
          </span>
        </motion.button>

        {/* Secondary Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.01 }}
          onClick={() => navigate('/drift-map')}
          className="w-full h-[56px] rounded-full text-white font-semibold text-[16px] flex items-center justify-center transition-all duration-200"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
          }}
        >
          <span className="flex items-center gap-[10px]">
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 12h6m-6 4h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            View My Patterns
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}