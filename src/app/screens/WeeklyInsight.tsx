import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import svgPathsNav from "../../imports/svg-txvclm8krn";
import { useUser } from "../contexts/UserContext";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

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
              <path d={svgPathsNav.p16c98900} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68" />
              <path d={svgPathsNav.pef5fd00} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68" />
            </svg>
          </div>
        </button>
        
        {/* Map */}
        <button onClick={() => navigate('/drift-map')} className="relative h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-[16px] size-[35px] sm:size-[39.2px] hover:bg-white/15 transition-all">
            <svg className="w-[17.5px] sm:w-[19.6px] h-[17.5px] sm:h-[19.6px]" fill="none" viewBox="0 0 24.1 24.1">
              <path d={svgPathsNav.p31e92270} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" />
              <path d="M15.0627 5.78778V20.8503" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" />
              <path d="M9.03775 3.24946V18.312" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" />
            </svg>
          </div>
        </button>

        {/* Pulse */}
        <button onClick={() => navigate('/live-nudge')} className="relative h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-[16px] size-[35px] sm:size-[39.2px] hover:bg-white/15 transition-all">
            <svg className="w-[17.5px] sm:w-[19.6px] h-[17.5px] sm:h-[19.6px]" fill="none" viewBox="0 0 19.6 19.6">
              <path d={svgPathsNav.p18580200} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.63" />
            </svg>
          </div>
        </button>

        {/* Chart (Active) */}
        <button onClick={() => navigate('/insights')} className="relative h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-[#5eead4] to-[#14b8a6] flex items-center justify-center rounded-[20px] shadow-[0_8px_24px_rgba(94,234,212,0.4)] size-[44px] sm:size-[48.2px] -mt-[5px]">
            <svg className="w-[22px] sm:w-[24.1px] h-[22px] sm:h-[24.1px]" fill="none" viewBox="0 0 19.6 19.6">
              <path d={svgPathsNav.p1a84a300} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64" />
              <path d={svgPathsNav.p39570400} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

const CALENDAR_DATA = [
  // Morning
  [0, 0, 1, 0, 0, 0, 0],
  // Midday
  [1, 0, 2, 1, 0, 0, 0],
  // Afternoon
  [2, 3, 2, 3, 2, 1, 0],
  // Evening
  [3, 3, 3, 2, 3, 2, 1]
];

function WeeklyDriftCalendar() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const fullDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const periods = ['Morning', 'Midday', 'Afternoon', 'Evening'];
  const [activeCell, setActiveCell] = useState<{rowIdx: number, colIdx: number, intensity: number} | null>(null);
  const [showLegend, setShowLegend] = useState(false);

  const getTooltipData = (intensity: number) => {
    if (intensity === 1) return { text: 'Stable time', acc: '92%', color: '#5eead4', label: 'Stable' };
    if (intensity === 2) return { text: 'Moderate time drift', acc: '74%', color: '#c084fc', label: 'Moderate' };
    return { text: 'Fast time drift', acc: '58%', color: '#f472b6', label: 'Fast Drift' };
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-white/5 backdrop-blur-xl rounded-[28px] p-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 flex flex-col relative z-10"
      onClick={(e) => {
        if (!(e.target as Element).closest('.drift-cell') && !(e.target as Element).closest('.info-button')) {
          setActiveCell(null);
        }
      }}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h3 className="text-white text-[20px] font-bold font-['Inter',sans-serif]">Weekly Drift Calendar</h3>
          <p className="text-gray-400 text-[13px] font-['Inter',sans-serif] mt-2 leading-snug">When you experienced time drift.</p>
        </div>
        <button 
          onClick={() => setShowLegend(!showLegend)}
          className="info-button size-[32px] rounded-full flex items-center justify-center hover:bg-white/10 transition-all ml-2"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24">
            <path d="M12 16v-4M12 8h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Legend Modal */}
      <AnimatePresence>
        {showLegend && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-4 p-[16px] rounded-[16px] bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <h4 className="text-white text-[14px] font-semibold mb-3">Color Legend</h4>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[12px]">
                <div className="size-[16px] rounded-full" style={{ backgroundColor: '#5eead4' }} />
                <div className="flex-1">
                  <span className="text-white text-[13px] font-medium">Stable</span>
                  <p className="text-gray-400 text-[11px]">Time felt accurate and steady</p>
                </div>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="size-[16px] rounded-full" style={{ backgroundColor: '#c084fc' }} />
                <div className="flex-1">
                  <span className="text-white text-[13px] font-medium">Moderate Drift</span>
                  <p className="text-gray-400 text-[11px]">Time moved faster or slower than expected</p>
                </div>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="size-[16px] rounded-full" style={{ backgroundColor: '#f472b6' }} />
                <div className="flex-1">
                  <span className="text-white text-[13px] font-medium">Fast Drift</span>
                  <p className="text-gray-400 text-[11px]">Significant time distortion experienced</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex relative overflow-x-auto">
         <div className="flex flex-col gap-[12px] sm:gap-[14px] mt-[26px] mr-[8px] sm:mr-[10px] w-[50px] sm:w-[60px] shrink-0">
           {periods.map(p => (
             <div key={p} className="text-[#6B7280] text-[10px] sm:text-[11px] font-['SF_Pro_Text',sans-serif] h-[20px] sm:h-[24px] flex items-center opacity-90">{p}</div>
           ))}
         </div>
         <div className="flex-1 flex justify-between min-w-0">
           {days.map((day, colIdx) => (
             <div key={colIdx} className="flex flex-col items-center flex-1 min-w-[24px]">
               <div className="text-[#9CA3AF] text-[11px] sm:text-[12px] font-semibold font-['SF_Pro_Text',sans-serif] mb-[10px] h-[16px] opacity-80">{day}</div>
               <div className="flex flex-col gap-[12px] sm:gap-[14px]">
                 {periods.map((_, rowIdx) => {
                   const intensity = CALENDAR_DATA[rowIdx][colIdx];
                   const isActive = activeCell?.rowIdx === rowIdx && activeCell?.colIdx === colIdx;
                   const tooltipData = intensity > 0 ? getTooltipData(intensity) : null;
                   
                   return (
                     <div key={rowIdx} className="relative drift-cell">
                       <motion.div 
                         onClick={() => intensity > 0 && setActiveCell({ rowIdx, colIdx, intensity })}
                         whileTap={intensity > 0 ? { scale: 1.15 } : {}}
                         animate={isActive ? { scale: 1.15 } : { scale: 1 }}
                         className={`h-[20px] sm:h-[24px] w-[20px] sm:w-[24px] flex items-center justify-center rounded-full ${intensity > 0 ? 'cursor-pointer' : ''}`}
                         style={{
                           border: intensity === 0 ? '2px solid #E5E7EB' : 'none',
                           opacity: intensity === 0 ? 0.2 : 1,
                           backgroundColor: 'transparent'
                         }}
                       >
                         {intensity > 0 && (
                           <motion.div 
                             initial={{ scale: 0.8, opacity: 0 }}
                             animate={{ scale: 1, opacity: 1 }}
                             transition={{ delay: 0.4 + (colIdx * 0.1), duration: 0.3, type: 'spring' }}
                             className="rounded-full shadow-sm"
                             style={{
                               backgroundColor: tooltipData?.color,
                               width: intensity === 1 ? '8px' : intensity === 2 ? '12px' : '16px',
                               height: intensity === 1 ? '8px' : intensity === 2 ? '12px' : '16px',
                             }}
                           />
                         )}
                       </motion.div>
                     </div>
                   );
                 })}
               </div>
             </div>
           ))}
         </div>

         {/* Tooltip Overlay */}
         <AnimatePresence>
           {activeCell && (() => {
             const tooltipData = getTooltipData(activeCell.intensity);
             return (
               <motion.div 
                 initial={{ opacity: 0, y: 10, scale: 0.95 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, y: 10, scale: 0.95 }}
                 transition={{ duration: 0.2 }}
                 className="absolute z-20 bg-[#252850] text-white p-[12px] rounded-[14px] shadow-xl w-[180px] sm:w-[200px] pointer-events-none"
                 style={{ 
                   top: `${26 + activeCell.rowIdx * 30 - 85}px`, 
                   left: `min(calc(50px + ${activeCell.colIdx * (100 / 7)}% - 80px), calc(100% - 180px))` 
                 }}
               >
                 <div className="font-semibold text-[12px] sm:text-[13px] mb-1 font-['SF_Pro_Text',sans-serif] text-white">
                   {fullDays[activeCell.colIdx]} {periods[activeCell.rowIdx]}
                 </div>
                 <div className="text-[11px] sm:text-[12px] mb-1 font-['SF_Pro_Text',sans-serif]" style={{ color: tooltipData.color }}>
                   {tooltipData.text}
                 </div>
                 <div className="text-[10px] sm:text-[11px] text-[#AAAACC] font-['SF_Pro_Text',sans-serif]">
                   Estimated accuracy: {tooltipData.acc}
                 </div>
               </motion.div>
             );
           })()}
         </AnimatePresence>
      </div>

      {/* Legend at bottom-right */}
      <div className="flex items-center justify-end gap-[16px] mt-[16px] text-[11px] font-['SF_Pro_Text',sans-serif] text-gray-400">
        <div className="flex items-center gap-[6px]">
          <div className="w-[16px] h-[16px] rounded-full border-2 border-[#E5E7EB] opacity-30" />
          <span>No data</span>
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="w-[12px] h-[12px] rounded-full bg-[#5eead4]" />
          <span>Drift detected</span>
        </div>
      </div>
    </motion.div>
  )
}

function PatternInsightCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="mt-[32px] relative z-10"
    >
      <div className="bg-gradient-to-br from-white/8 to-white/5 backdrop-blur-xl rounded-[24px] p-[24px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        <div className="flex items-start gap-[16px]">
          <div className="shrink-0 w-[40px] h-[40px] bg-gradient-to-br from-[#5eead4]/20 to-[#14b8a6]/10 rounded-[14px] flex items-center justify-center border border-[#5eead4]/20">
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
              <path d="M6 18L12 12L15 15L21 9" stroke="#5eead4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 9H21V13" stroke="#5eead4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-white text-[17px] font-semibold leading-relaxed mb-[8px]">What does this mean?</h3>
            <p className="text-gray-400 text-[14px] leading-relaxed">
              Your time tends to move faster during evening hours, and midweek afternoons show moderate time drift. ChronoWeave adapts to these patterns.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function SmartScheduleCard() {
  const windows = [
    { time: '9:00 AM – 11:30 AM', risk: 'Low drift risk', color: '#5eead4' },
    { time: '2:00 PM – 3:30 PM', risk: 'Moderate drift risk', color: '#c084fc' },
    { time: '7:00 PM – 10:00 PM', risk: 'High drift likelihood', color: '#f472b6' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-[32px] bg-white/5 backdrop-blur-xl rounded-[28px] p-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 relative z-10"
    >
      <h3 className="text-white text-[20px] font-bold font-['Inter',sans-serif]">Suggested Focus Windows</h3>
      <p className="text-gray-400 text-[13px] font-['Inter',sans-serif] mt-2 leading-snug">Tomorrow</p>
      
      <div className="flex flex-col gap-[12px] mt-4">
        {windows.map((w, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.7 + (idx * 0.1), duration: 0.4 }}
            className="flex items-center gap-[12px] bg-white/5 backdrop-blur-sm p-[14px] rounded-[16px] border border-white/10"
          >
            <div className="w-[4px] h-[36px] rounded-full" style={{ backgroundColor: w.color }} />
            <div className="flex-1">
              <h4 className="text-white text-[15px] font-semibold font-['Inter',sans-serif]">{w.time}</h4>
              <p className="text-gray-400 text-[13px] font-medium mt-[2px] font-['Inter',sans-serif]">{w.risk}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
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

function WeeklyAccuracyChart() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="mt-[32px] bg-white/5 backdrop-blur-xl rounded-[28px] p-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 relative z-10"
      onClick={(e) => {
        if ((e.target as any).tagName !== 'circle') {
          setActiveIndex(undefined);
        }
      }}
    >
      <h3 className="text-white text-[20px] font-bold font-['Inter',sans-serif]">Accuracy Trend</h3>
      <p className="text-gray-400 text-[13px] font-['Inter',sans-serif] mt-2 mb-[20px]">Time estimation accuracy this week</p>
      
      <div className="w-full -ml-[15px]" style={{ height: '180px' }}>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={weeklyData} margin={{ top: 20, right: 15, left: 0, bottom: 0 }}>
            <CartesianGrid key="accuracy-grid" strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              key="accuracy-xaxis"
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11.2, fill: '#9ca3af', fontFamily: 'Inter' }} 
              dy={10} 
            />
            <YAxis 
              key="accuracy-yaxis"
              domain={[0, 100]}
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11.2, fill: '#9ca3af', fontFamily: 'Inter' }} 
              dx={-5}
            />
            <Line 
              key="accuracy-line"
              type="monotone" 
              dataKey="accuracy" 
              stroke="#5eead4" 
              strokeWidth={3} 
              dot={(dotProps: any) => {
                const { cx, cy, payload, index } = dotProps;
                const isActive = activeIndex === index;
                return (
                  <circle
                    key={`dot-${index}-${payload.day}`}
                    cx={cx}
                    cy={cy}
                    r={isActive ? 8 : 4}
                    fill="white"
                    stroke="#5eead4"
                    strokeWidth={2}
                    onClick={() => setActiveIndex(index)}
                    style={{ cursor: 'pointer' }}
                  />
                );
              }}
              label={(labelProps: any) => {
                const { x, y, index, value } = labelProps;
                if (activeIndex !== index) return null;
                return (
                  <text 
                    key={`label-${index}`}
                    x={x} 
                    y={y - 15} 
                    textAnchor="middle" 
                    fill="#5eead4" 
                    className="text-[13px] font-semibold font-['Inter',sans-serif]"
                  >
                    {value}%
                  </text>
                );
              }}
              activeDot={false}
              isAnimationActive={true}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

function ReflectionPrompt() {
  const [selected, setSelected] = useState<number | null>(null);
  const options = ['Taking breaks', 'Less screen time', 'Better sleep', 'Physical activity'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-[32px] bg-white/5 backdrop-blur-xl rounded-[28px] p-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 relative z-10"
    >
      <h3 className="text-white text-[18px] font-semibold font-['Inter',sans-serif] mb-[16px] text-center">What helped your focus most this week?</h3>
      <div className="flex flex-wrap gap-[10px] justify-center">
        {options.map((opt, idx) => (
          <motion.button 
            key={idx}
            whileTap={{ scale: 0.95 }}
            animate={selected === idx ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(idx)}
            className={`flex items-center gap-[6px] px-[16px] py-[10px] rounded-full text-[13px] font-semibold font-['Inter',sans-serif] transition-colors ${
              selected === idx 
                ? 'bg-gradient-to-r from-[#5eead4]/20 to-[#14b8a6]/10 text-[#5eead4] border-2 border-[#5eead4]/40' 
                : 'bg-white/5 border border-white/20 text-white hover:bg-white/10'
            }`}
          >
            {opt}
            {selected === idx && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

export function WeeklyInsight() {
  const navigate = useNavigate();

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
            backgroundColor: '#f472b620',
            boxShadow: '0 0 32px #f472b630'
          }}
        >
          <svg className="w-[32px] h-[32px]" fill="none" viewBox="0 0 19.6 19.6">
            <path d={svgPathsNav.p1a84a300} stroke="#f472b6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPathsNav.p39570400} stroke="#f472b6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </svg>
        </div>
        
        {/* Page Title */}
        <h1 className="text-white text-[28px] font-bold text-center mb-[12px] leading-tight">
          Weekly Insights
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-400 text-[15px] text-center max-w-[280px]">
          Understand your patterns and build better time awareness
        </p>
      </motion.div>
      
      {/* Main Content Container */}
      <div className="px-[24px] pb-[140px] relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[300px] overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-[40px] right-[20px] w-[200px] h-[200px] bg-gradient-to-br from-[#5eead4]/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-[100px] left-[30px] w-[150px] h-[150px] bg-gradient-to-br from-[#c084fc]/20 to-transparent rounded-full blur-3xl" />
        </div>

        <WeeklyDriftCalendar />
        <PatternInsightCard />
        <SmartScheduleCard />
        <WeeklyAccuracyChart />
        <ReflectionPrompt />
        
        {/* Action Buttons */}
        <div className="mt-[32px] flex flex-col gap-[12px] relative z-10">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            onClick={() => navigate('/calibration-1')}
            className="w-full h-[56px] text-white rounded-full flex items-center justify-center text-[16px] font-semibold transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
              border: '1px solid rgba(94, 234, 212, 0.15)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
            }}
          >
            <span className="flex items-center gap-[10px]">
              <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Run New Calibration Test
            </span>
          </motion.button>
        </div>
      </div>

      <BottomNav />
      
    </div>
  );
}