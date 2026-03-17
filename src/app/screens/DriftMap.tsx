import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, YAxis, CartesianGrid } from 'recharts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import svgPaths from "../../imports/svg-txvclm8krn";
import { useUser } from '../contexts/UserContext';

function CircularProgress({ value, delay, color }: { value: number, delay: number, color: string }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 1500;
    let animationFrame: number;
    
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCurrentValue(Math.floor(easeOut * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, delay * 1000);
    
    return () => {
      clearTimeout(timeout);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [value, delay]);

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  
  return (
    <div className="relative flex items-center justify-center size-[48px] shrink-0">
      <svg className="size-full transform -rotate-90">
        <circle cx="24" cy="24" r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
        <motion.circle 
          cx="24" cy="24" r={radius} 
          stroke={color} strokeWidth="4" fill="none"
          strokeLinecap="round"
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - (value / 100) * circumference }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </svg>
      <span className="absolute text-[12px] font-bold text-white">{currentValue}%</span>
    </div>
  );
}

function TimeCard({ 
  title, 
  status, 
  description, 
  themeColor, 
  iconColor,
  iconRotate,
  hasBubbles = false,
  delay,
  accuracy,
  iconType
}: { 
  title: string, 
  status: string, 
  description: string, 
  themeColor: string, 
  iconColor: string,
  iconRotate: number, 
  hasBubbles?: boolean,
  delay: number,
  accuracy: number,
  iconType: 'sun' | 'sun-peak' | 'moon'
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderIcon = () => {
    if (iconType === 'sun') {
      return (
        <svg className="w-[32px] h-[32px]" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M12 2v2m0 16v2M22 12h-2M4 12H2m17.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41m12.73 0l-1.41-1.41M6.34 6.34L4.93 4.93" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    } else if (iconType === 'sun-peak') {
      return (
        <svg className="w-[32px] h-[32px]" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M12 2v3m0 14v3M22 12h-3M5 12H2m16.95-6.95l-2.12 2.12M8.17 15.83l-2.12 2.12m12.9 0l-2.12-2.12M8.17 8.17L6.05 6.05" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M12 7v10M7 12h10" stroke={iconColor} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    } else {
      return (
        <svg className="w-[32px] h-[32px]" fill="none" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: 'spring', bounce: 0.4 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => setIsExpanded(!isExpanded)}
      className="relative w-full rounded-[24px] p-[20px] flex flex-col cursor-pointer overflow-hidden transition-all"
      style={{
        background: 'linear-gradient(to bottom, #0B1020, #050B19)',
        border: '1px solid transparent',
        borderImage: 'linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.02)) 1',
        borderRadius: '24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
      }}
    >
      <div className="flex w-full items-center gap-[16px]">
        {/* Icon Container */}
        <div className="relative shrink-0 size-[56px]">
          <div 
            className="absolute inset-0 rounded-[20px]" 
            style={{ 
              backgroundColor: `${themeColor}15`
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {renderIcon()}
          </div>
        </div>
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center min-w-0 gap-1">
          <div className="flex items-center gap-2 w-full">
            <h3 className="text-white text-[18px] font-bold font-['Inter',sans-serif] truncate">{title}</h3>
            <div 
              className="rounded-full px-[12px] py-[4px] flex items-center justify-center shrink-0"
              style={{ 
                backgroundColor: `${themeColor}12`,
                border: `1px solid ${themeColor}30`
              }}
            >
              <span className="text-[11px] font-semibold font-['Inter',sans-serif] whitespace-nowrap" style={{ color: iconColor }}>{status}</span>
            </div>
          </div>
          <p className="text-gray-400 text-[14px] font-['Inter',sans-serif] leading-[20px] truncate">{description}</p>
        </div>

        {/* Circular Progress */}
        <CircularProgress value={accuracy} delay={delay} color={themeColor} />
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 20 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex flex-col gap-3 pt-5 border-t border-white/10"
          >
            <div className="flex justify-between items-center text-[14px]">
              <span className="text-gray-400">Accuracy score</span>
              <span className="font-semibold" style={{ color: themeColor }}>{accuracy}%</span>
            </div>
            <div className="flex justify-between items-center text-[14px]">
              <span className="text-gray-400">Avg. focus duration</span>
              <span className="font-semibold text-white">45 mins</span>
            </div>
            <div className="flex justify-between items-center text-[14px]">
              <span className="text-gray-400">Drift tendency</span>
              <span className="font-semibold text-white">{status}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TopNav() {
  const navigate = useNavigate();
  const { userAvatar } = useUser();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  
  // Parse avatar data from JSON
  let avatarData: { color: string; emoji: string } | null = null;
  try {
    if (userAvatar) {
      avatarData = JSON.parse(userAvatar);
    }
  } catch {
    // If it's not JSON, treat it as a legacy color value
    if (userAvatar) {
      avatarData = { color: userAvatar, emoji: '🌸' };
    }
  }
  
  const handleCalendarOption = (option: string) => {
    // TODO: Implement calendar integration
    console.log(`Selected: ${option}`);
    setShowCalendar(false);
  };
  
  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full pt-4 px-[24px] pb-4 relative z-10">
        {/* Avatar Button - Top Left */}
        <div 
          onClick={() => navigate('/profile')} 
          className="size-[40px] rounded-[12px] cursor-pointer hover:opacity-80 transition-opacity relative flex items-center justify-center border-2 border-white/20 shadow-lg"
          style={{
            backgroundColor: avatarData?.color || '#1E2747',
          }}
        >
          {avatarData ? (
            <span style={{ fontSize: '20px' }}>{avatarData.emoji}</span>
          ) : (
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
              <path 
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" 
                stroke="#ffffff" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <circle 
                cx="12" 
                cy="7" 
                r="4" 
                stroke="#ffffff" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-[12px]">
          {/* Calendar Button */}
          <button
            onClick={() => {
              setShowCalendar(!showCalendar);
              setShowNotifications(false);
            }}
            className="size-[40px] rounded-[12px] cursor-pointer hover:opacity-80 transition-all relative flex items-center justify-center border-2 border-white/20 shadow-lg bg-white/5 backdrop-blur-sm"
          >
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 2v4M8 2v4M3 10h18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Notification Button */}
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowCalendar(false);
            }}
            className="size-[40px] rounded-[12px] cursor-pointer hover:opacity-80 transition-all relative flex items-center justify-center border-2 border-white/20 shadow-lg bg-white/5 backdrop-blur-sm"
          >
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
              <path 
                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" 
                stroke="#ffffff" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Calendar Integration Panel */}
      {showCalendar && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[72px] right-[24px] w-[calc(100%-48px)] max-w-[360px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-50 overflow-hidden"
        >
          {/* Header */}
          <div className="px-[20px] py-[16px] border-b border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-[18px] font-bold font-['Inter',sans-serif]">Connect Calendar</h3>
              <button
                onClick={() => setShowCalendar(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Info Section */}
          <div className="px-[20px] py-[20px] bg-gradient-to-br from-[#5eead4]/10 to-transparent border-b border-white/10">
            <div className="flex items-start gap-[12px]">
              <div className="shrink-0 w-[32px] h-[32px] bg-gradient-to-br from-[#5eead4]/30 to-[#14b8a6]/20 rounded-[10px] flex items-center justify-center">
                <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24">
                  <path d="M9 11l3 3L22 4" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-white text-[15px] font-semibold mb-[6px] font-['Inter',sans-serif]">Why connect your calendar?</h4>
                <p className="text-gray-400 text-[13px] leading-relaxed font-['Inter',sans-serif]">
                  Syncing your schedule helps ChronoWeave provide time-aware nudges and track your perception accuracy during scheduled events.
                </p>
              </div>
            </div>
          </div>

          {/* Calendar Options */}
          <div className="px-[20px] py-[20px] flex flex-col gap-[12px]">
            {/* Google Calendar */}
            <button
              onClick={() => handleCalendarOption('google')}
              className="w-full rounded-[16px] p-[16px] flex items-center gap-[14px] transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, rgba(66, 133, 244, 0.15) 0%, rgba(52, 168, 83, 0.1) 100%)',
                border: '1px solid rgba(66, 133, 244, 0.3)',
              }}
            >
              <div className="size-[44px] rounded-[12px] bg-white flex items-center justify-center shrink-0">
                <svg className="w-[26px] h-[26px]" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-white text-[15px] font-semibold font-['Inter',sans-serif]">Google Calendar</h4>
                <p className="text-gray-400 text-[12px] font-['Inter',sans-serif] mt-[2px]">Sync with Gmail events</p>
              </div>
              <svg className="w-[20px] h-[20px] shrink-0" fill="none" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Apple Calendar */}
            <button
              onClick={() => handleCalendarOption('apple')}
              className="w-full rounded-[16px] p-[16px] flex items-center gap-[14px] transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 59, 48, 0.15) 0%, rgba(255, 149, 0, 0.1) 100%)',
                border: '1px solid rgba(255, 59, 48, 0.3)',
              }}
            >
              <div className="size-[44px] rounded-[12px] bg-gradient-to-br from-[#FF3B30] to-[#FF9500] flex items-center justify-center shrink-0">
                <svg className="w-[24px] h-[24px]" fill="white" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-white text-[15px] font-semibold font-['Inter',sans-serif]">Apple Calendar</h4>
                <p className="text-gray-400 text-[12px] font-['Inter',sans-serif] mt-[2px]">Sync with iCloud events</p>
              </div>
              <svg className="w-[20px] h-[20px] shrink-0" fill="none" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Manual Schedule */}
            <button
              onClick={() => handleCalendarOption('manual')}
              className="w-full rounded-[16px] p-[16px] flex items-center gap-[14px] transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, rgba(94, 234, 212, 0.15) 0%, rgba(20, 184, 166, 0.1) 100%)',
                border: '1px solid rgba(94, 234, 212, 0.3)',
              }}
            >
              <div className="size-[44px] rounded-[12px] bg-gradient-to-br from-[#5eead4] to-[#14b8a6] flex items-center justify-center shrink-0">
                <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M12 5v14M5 12h14" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-white text-[15px] font-semibold font-['Inter',sans-serif]">Manual Schedule</h4>
                <p className="text-gray-400 text-[12px] font-['Inter',sans-serif] mt-[2px]">Set your routine manually</p>
              </div>
              <svg className="w-[20px] h-[20px] shrink-0" fill="none" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Skip Option */}
          <div className="px-[20px] pb-[20px]">
            <button
              onClick={() => setShowCalendar(false)}
              className="w-full text-center text-gray-400 text-[14px] font-['Inter',sans-serif] hover:text-white transition-colors py-[8px]"
            >
              I'll do this later
            </button>
          </div>
        </motion.div>
      )}

      {/* Notification Panel */}
      {showNotifications && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[72px] right-[24px] w-[calc(100%-48px)] max-w-[340px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-50 overflow-hidden"
        >
          {/* Header */}
          <div className="px-[20px] py-[16px] border-b border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-[18px] font-bold font-['Inter',sans-serif]">Notifications</h3>
              <button
                onClick={() => setShowNotifications(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Empty State */}
          <div className="px-[20px] py-[40px] flex flex-col items-center justify-center">
            {/* Icon with gradient background */}
            <div 
              className="size-[80px] rounded-[24px] flex items-center justify-center mb-[20px]"
              style={{ 
                background: 'linear-gradient(135deg, rgba(94, 234, 212, 0.15) 0%, rgba(20, 184, 166, 0.1) 100%)',
                border: '1px solid rgba(94, 234, 212, 0.2)'
              }}
            >
              <svg className="w-[40px] h-[40px]" fill="none" viewBox="0 0 24 24">
                <path 
                  d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" 
                  stroke="#5eead4" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M13.73 21a2 2 0 0 1-3.46 0" 
                  stroke="#5eead4" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <circle cx="18" cy="6" r="3" fill="#5eead4" opacity="0.3" />
              </svg>
            </div>

            {/* Empty state text */}
            <h4 className="text-white text-[17px] font-semibold font-['Inter',sans-serif] mb-[8px]">
              All caught up!
            </h4>
            <p className="text-gray-400 text-[14px] font-['Inter',sans-serif] text-center leading-relaxed max-w-[240px]">
              You have no new notifications right now. We'll let you know when something needs your attention.
            </p>
          </div>
        </motion.div>
      )}

      {/* Separator line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
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
        
        {/* Map (Active) */}
        <button onClick={() => navigate('/drift-map')} className="relative h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-[#5eead4] to-[#14b8a6] flex items-center justify-center rounded-[20px] shadow-[0_8px_24px_rgba(94,234,212,0.4)] size-[44px] sm:size-[48.2px] -mt-[5px]">
            <svg className="w-[22px] sm:w-[24.1px] h-[22px] sm:h-[24.1px]" fill="none" viewBox="0 0 24.1 24.1">
              <path d={svgPaths.p31e92270} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" />
              <path d="M15.0627 5.78778V20.8503" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" />
              <path d="M9.03775 3.24946V18.312" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" />
            </svg>
          </div>
        </button>

        {/* Pulse */}
        <button onClick={() => navigate('/live-nudge')} className="relative h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-[16px] size-[35px] sm:size-[39.2px] hover:bg-white/15 transition-all">
            <svg className="w-[17.5px] sm:w-[19.6px] h-[17.5px] sm:h-[19.6px]" fill="none" viewBox="0 0 19.6 19.6">
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

const pieData = [
  { name: 'Stable time', value: 45, color: '#93E4D6' },
  { name: 'Moderate drift', value: 30, color: '#C4B5FD' },
  { name: 'Fast drift', value: 25, color: '#FBBF24' },
];

function CustomActiveShape(props: any) {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;

  return (
    <g>
      <motion.path
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
        d={`M ${cx} ${cy} L ${cx + outerRadius * Math.cos(-startAngle * Math.PI / 180)} ${cy + outerRadius * Math.sin(-startAngle * Math.PI / 180)} A ${outerRadius} ${outerRadius} 0 0 0 ${cx + outerRadius * Math.cos(-endAngle * Math.PI / 180)} ${cy + outerRadius * Math.sin(-endAngle * Math.PI / 180)} Z`}
        fill={fill}
      />
      <text x={cx} y={cy - outerRadius - 15} textAnchor="middle" fill="#ffffff" className="text-[14px] font-bold font-['Inter',sans-serif]">
        {payload.name} — {value}%
      </text>
    </g>
  );
}

function TimeDistribution() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="w-[85vw] max-w-[340px] shrink-0 snap-center bg-white/5 backdrop-blur-xl rounded-[28px] p-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 flex flex-col justify-between min-h-[280px]"
    >
      <div>
        <h3 className="text-white text-[20px] font-bold font-['Inter',sans-serif]">Time Distribution</h3>
        <p className="text-gray-400 text-[13px] font-['Inter',sans-serif] mt-2 leading-snug">
          How your perception of time is divided throughout the day.
        </p>
      </div>
      
      <div className="h-[220px] w-full flex justify-center items-center relative mt-3">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              activeIndex={activeIndex}
              activeShape={CustomActiveShape}
              onClick={(_, index) => setActiveIndex(activeIndex === index ? undefined : index)}
              isAnimationActive={true}
              animationBegin={600}
              animationDuration={1000}
              animationEasing="ease-out"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} style={{ cursor: 'pointer', outline: 'none' }} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

const weeklyData = [
  { day: 'Mon', accuracy: 62 },
  { day: 'Tue', accuracy: 68 },
  { day: 'Wed', accuracy: 71 },
  { day: 'Thu', accuracy: 73 },
  { day: 'Fri', accuracy: 78 },
  { day: 'Sat', accuracy: 81 },
  { day: 'Sun', accuracy: 85 },
];

function WeeklyInsight() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const handleDotClick = (index: number) => {
    setActiveIndex(activeIndex === index ? undefined : index);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7 }}
      className="w-[85vw] max-w-[340px] shrink-0 snap-center bg-white/5 backdrop-blur-xl rounded-[28px] p-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 flex flex-col justify-between min-h-[280px]"
    >
      <div>
        <h3 className="text-white text-[20px] font-bold font-['Inter',sans-serif]">Weekly Insight</h3>
        <p className="text-gray-400 text-[13px] font-['Inter',sans-serif] mt-2 leading-snug">
          Track your time estimation accuracy across the week.
        </p>
      </div>
      
      <div className="h-[200px] w-full -ml-[10px] mt-[10px]">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={weeklyData} margin={{ top: 20, right: 15, left: 0, bottom: 0 }}>
            <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              key="xaxis"
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11.2, fill: '#9ca3af', fontFamily: 'Inter' }} 
              dy={10} 
            />
            <YAxis 
              key="yaxis"
              domain={[0, 100]}
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11.2, fill: '#9ca3af', fontFamily: 'Inter' }} 
              dx={-5}
            />
            <Line 
              key="line"
              type="monotone" 
              dataKey="accuracy" 
              stroke="#5eead4" 
              strokeWidth={3} 
              dot={{ fill: '#5eead4', stroke: '#14b8a6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 8, fill: '#5eead4', stroke: '#fff', strokeWidth: 2 }}
              isAnimationActive={true}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

const analyticsData = [
  { time: '6 AM', drift: 10, label: 'Stable' },
  { time: '9 AM', drift: 20, label: 'Stable' },
  { time: '12 PM', drift: 45, label: 'Moderate' },
  { time: '3 PM', drift: 35, label: 'Moderate' },
  { time: '6 PM', drift: 75, label: 'Fast' },
  { time: '9 PM', drift: 85, label: 'Fast' },
];

function DriftAnalytics() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
      className="w-[85vw] max-w-[340px] shrink-0 snap-center bg-white/5 backdrop-blur-xl rounded-[28px] p-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 flex flex-col justify-between min-h-[260px]"
    >
      <div className="flex justify-between items-start mb-[10px]">
        <div>
          <h3 className="text-white text-[20px] font-bold font-['Inter',sans-serif]">Today's Flow</h3>
          <p className="text-gray-400 text-[13px] font-['Inter',sans-serif] mt-2 pr-[10px] leading-snug">
            Your drift patterns throughout the day.
          </p>
        </div>
        <div className="bg-[#c084fc]/20 backdrop-blur-sm text-[#c084fc] text-[12px] px-[12px] py-[6px] rounded-full font-semibold font-['Inter',sans-serif] whitespace-nowrap border border-[#c084fc]/30">
          Analytics
        </div>
      </div>
      
      <div className="h-[160px] w-full -ml-[8px] mt-2">
        <ResponsiveContainer width="100%" height={160}>
          <AreaChart data={analyticsData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorDriftDark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#a78bfa" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              key="xaxis"
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11.2, fill: '#9ca3af', fontFamily: 'Inter' }} 
              dy={10} 
            />
            <Tooltip 
              key="tooltip"
              contentStyle={{ 
                backgroundColor: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '14px', 
                border: '1px solid rgba(255,255,255,0.1)', 
                boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                fontFamily: 'Inter',
                fontSize: '13px',
                color: '#ffffff'
              }}
              formatter={(value: number, name: string, props: any) => [props.payload.label, 'Pace']}
              labelStyle={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '4px' }}
            />
            <Area 
              key="area"
              type="monotone" 
              dataKey="drift" 
              stroke="#a78bfa" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorDriftDark)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export function DriftMap() {
  const navigate = useNavigate();
  const { getDriftMapData } = useUser();
  
  // Get historical drift data from calibration results
  const driftMapData = getDriftMapData();

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
            backgroundColor: '#c084fc20',
            boxShadow: '0 0 32px #c084fc30'
          }}
        >
          <svg className="w-[32px] h-[32px]" fill="none" viewBox="0 0 24.1 24.1">
            <path d={svgPaths.p31e92270} stroke="#c084fc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d="M15.0627 5.78778V20.8503" stroke="#c084fc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d="M9.03775 3.24946V18.312" stroke="#c084fc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </svg>
        </div>
        
        {/* Page Title */}
        <h1 className="text-white text-[28px] font-bold text-center mb-[12px] leading-tight">
          Drift Map
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-400 text-[15px] text-center max-w-[280px]">
          Track your time perception patterns by time of day
        </p>
      </motion.div>
      
      {/* Main Content Container */}
      <div className="px-[24px] pb-[140px] relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[300px] overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-[40px] right-[20px] w-[200px] h-[200px] bg-gradient-to-br from-[#5eead4]/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-[100px] left-[30px] w-[150px] h-[150px] bg-gradient-to-br from-[#c084fc]/20 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Stats Overview Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-[12px] mb-[20px] relative z-10"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-[20px] p-[16px] border border-white/10">
            <div className="text-[#5eead4] text-[24px] font-bold">{Math.round(driftMapData.morningStability)}%</div>
            <div className="text-gray-400 text-[11px] mt-[4px]">Morning</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-[20px] p-[16px] border border-white/10">
            <div className="text-[#c084fc] text-[24px] font-bold">{Math.round(driftMapData.afternoonStability)}%</div>
            <div className="text-gray-400 text-[11px] mt-[4px]">Afternoon</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-[20px] p-[16px] border border-white/10">
            <div className="text-[#f472b6] text-[24px] font-bold">{Math.round(driftMapData.eveningStability)}%</div>
            <div className="text-gray-400 text-[11px] mt-[4px]">Evening</div>
          </div>
        </motion.div>
        
        {/* Swipe Indicator for TimeCards */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center justify-center gap-[8px] mb-[16px] relative z-10"
        >
          <div className="flex items-center gap-[6px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-[14px] py-[8px]">
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24">
              <path d="M7 12h14M7 12l4-4M7 12l4 4" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-gray-400 text-[12px] font-medium">Tap cards to expand</span>
          </div>
        </motion.div>

        {/* Cards Stack */}
        <div className="flex flex-col gap-[16px] relative z-10">
          {driftMapData.patterns.map((pattern, idx) => {
            const themeColors = {
                'Morning': '#FDB863',
                'Afternoon': '#c084fc',
                'Evening': '#f472b6'
              };
            const iconTypes: ('sun' | 'sun-peak' | 'moon')[] = ['sun', 'sun-peak', 'moon'];
            
            return (
              <TimeCard 
                key={pattern.period}
                title={pattern.period} 
                status={pattern.status} 
                description={pattern.description} 
                themeColor={themeColors[pattern.period as keyof typeof themeColors]} 
                iconColor={themeColors[pattern.period as keyof typeof themeColors]} 
                iconRotate={idx === 0 ? -15 : idx === 1 ? 0 : 60} 
                hasBubbles={idx === 2}
                delay={0.1 + idx * 0.1}
                accuracy={Math.round(pattern.stability)}
                iconType={iconTypes[idx]}
              />
            );
          })}
        </div>
        
        {/* Info Box - Enhanced */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-[40px] relative z-10"
        >
          <div className="bg-gradient-to-br from-white/8 to-white/5 backdrop-blur-xl rounded-[24px] p-[24px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <div className="flex items-start gap-[16px]">
              <div className="shrink-0 w-[40px] h-[40px] bg-gradient-to-br from-[#5eead4]/20 to-[#14b8a6]/10 rounded-[14px] flex items-center justify-center border border-[#5eead4]/20">
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#5eead4" strokeWidth="2" />
                  <path d="M12 16v-4m0-4h.01" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white text-[17px] font-semibold leading-relaxed mb-[8px]">What does this mean?</h3>
                <p className="text-gray-400 text-[14px] leading-relaxed">
                  These patterns show when your perception of time tends to drift. It's completely normal! ChronoWeave will help you stay aware of these shifts throughout your day.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Analytics Carousel */}
        <div className="relative mt-[40px] z-10">
          {/* Swipe Indicator */}
          <div className="flex items-center justify-center gap-[8px] mb-[16px]">
            <div className="flex items-center gap-[6px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-[14px] py-[8px]">
              <span className="text-gray-400 text-[12px] font-medium">Swipe for insights</span>
              <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24">
                <path d="M13 5l7 7-7 7M5 5l7 7-7 7" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          
          <div className="-mx-[24px] px-[24px] flex gap-[20px] overflow-x-auto snap-x snap-mandatory pb-[24px] items-stretch" style={{ scrollbarWidth: 'none' }}>
            <DriftAnalytics />
            <WeeklyInsight />
            <TimeDistribution />
          </div>
        </div>
        
        {/* Primary Button with Enhanced Design */}
        <motion.button 
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={() => navigate('/dashboard')}
          className="w-full mx-auto mt-[40px] text-white rounded-full h-[56px] flex items-center justify-center text-[16px] font-semibold transition-all duration-200 relative z-10"
          style={{
            background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
            border: '1px solid rgba(94, 234, 212, 0.15)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
          }}
        >
          <span className="flex items-center gap-[10px]">
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Dashboard
          </span>
        </motion.button>
      </div>

      <BottomNav />
      
    </div>
  );
}