import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { CalibrationProgressBar } from '../components/CalibrationProgressBar';
import { X } from 'lucide-react';

export function CalibrationWelcome() {
  const navigate = useNavigate();
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <div
      className="h-full flex flex-col px-[24px]"
      style={{
        background: 'linear-gradient(to bottom, #0B1020 0%, #141A35 50%, #1F2950 100%)',
      }}
    >
      {/* HEADER - Top 20% */}
      <div className="pt-[48px] pb-[20px]">
        {/* Progress Bar */}
        <div className="mb-[20px]">
          <CalibrationProgressBar currentStep={1} />
        </div>

        {/* Step Number */}
        <p 
          className="font-['Inter',sans-serif] font-semibold text-[#6EE7D2] text-center mb-[8px] text-[14px]"
        >
          Step 1/5
        </p>

        {/* Title */}
        <h1 
          className="font-['Inter',sans-serif] font-bold text-white text-center text-[28px] leading-tight mb-[8px]"
        >
          Calibrate Your Time Sense
        </h1>
      </div>

      {/* INSTRUCTIONS - Middle 30% */}
      <div className="mb-[24px]">
        <p 
          className="font-['Inter',sans-serif] text-gray-300 text-center text-[15px] whitespace-nowrap"
        >
          5 quick tests help us understand your internal clock
        </p>
      </div>

      {/* MAIN ACTION - Middle 40% */}
      <div className="flex-1 flex flex-col items-center justify-center py-[24px]">
        {/* Animated Timeline */}
        <div className="flex gap-[16px] mb-[32px]">
          {[0, 0.2, 0.4, 0.6, 0.8].map((delay, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0.3 }}
              animate={{ scale: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay,
                ease: 'easeInOut',
              }}
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: '#6EE7D2',
              }}
            />
          ))}
        </div>

        {/* Info Card */}
        <div 
          className="w-full rounded-[24px] p-[24px]"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <h3 
            className="font-['Inter',sans-serif] font-bold text-white mb-[16px]"
            style={{
              fontSize: '18px',
              letterSpacing: '0.02em',
            }}
          >
            What to expect:
          </h3>
          <ul className="space-y-[12px]">
            {[
              'Hold a button for 10 seconds',
              'Reproduce a 30-second interval',
              'Spot rhythm patterns',
              'See your personalized time profile',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-[8px]">
                <span 
                  className="font-['Inter',sans-serif] font-bold mt-[2px]"
                  style={{ color: '#6EE7D2', fontSize: '18px' }}
                >
                  •
                </span>
                <span 
                  className="font-['Inter',sans-serif] font-medium text-gray-300"
                  style={{
                    fontSize: '16px',
                    letterSpacing: '0.02em',
                    lineHeight: '24px',
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FOOTER - Bottom 10% */}
      <div className="pb-[32px] space-y-[16px]">
        {/* Primary Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.01 }}
          onClick={() => navigate('/calibration-step-2')}
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
            Begin Calibration
          </span>
        </motion.button>

        {/* Secondary Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.01 }}
          onClick={() => setShowInfoModal(true)}
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
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
              <path d="M12 16v-4m0-4h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            What is this?
          </span>
        </motion.button>
      </div>

      {/* Info Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-[24px]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#1a1f3a] border border-white/20 rounded-[28px] p-[24px] max-w-[360px] w-full relative"
          >
            <button
              onClick={() => setShowInfoModal(false)}
              className="absolute top-[16px] right-[16px] text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h2 
              className="font-['Inter',sans-serif] font-bold text-white mb-[16px]"
              style={{
                fontSize: '24px',
                letterSpacing: '0.02em',
              }}
            >
              About Time Calibration
            </h2>
            <p 
              className="font-['Inter',sans-serif] font-medium text-gray-300 mb-[16px]"
              style={{
                fontSize: '16px',
                letterSpacing: '0.02em',
                lineHeight: '24px',
              }}
            >
              People with ADHD often experience time differently throughout the day. This calibration helps ChronoWeave understand your unique time perception.
            </p>
            <p 
              className="font-['Inter',sans-serif] font-medium text-gray-300 mb-[24px]"
              style={{
                fontSize: '16px',
                letterSpacing: '0.02em',
                lineHeight: '24px',
              }}
            >
              We'll use this data to send you perfectly timed nudges when you need them most.
            </p>
            <button
              onClick={() => setShowInfoModal(false)}
              className="w-full rounded-full"
              style={{
                height: '56px',
                background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                border: '1px solid rgba(94, 234, 212, 0.15)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
              }}
            >
              <p 
                className="font-['Inter',sans-serif] font-bold text-white"
                style={{
                  fontSize: '17px',
                  letterSpacing: '0',
                }}
              >
                Got it!
              </p>
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}