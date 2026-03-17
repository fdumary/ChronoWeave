import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useUser } from '../contexts/UserContext';
import svgPathsNav from "../../imports/svg-txvclm8krn";
import svgPathsDash from "../../imports/svg-1uuotg0qrn";

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
        
        {/* Home (Active) */}
        <button className="relative h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-[#5eead4] to-[#14b8a6] flex items-center justify-center rounded-[20px] shadow-[0_8px_24px_rgba(94,234,212,0.4)] size-[44px] sm:size-[48.2px] -mt-[5px]">
            <svg className="w-[21px] sm:w-[23.1px] h-[21px] sm:h-[23.1px]" fill="none" viewBox="0 0 23.1 23.1">
              <path d={svgPathsDash.p1ba3e500} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.92" />
              <path d={svgPathsDash.pfd8e500} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.92" />
            </svg>
          </div>
        </button>
        
        {/* Map */}
        <button onClick={() => navigate('/drift-map')} className="relative h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-[16px] size-[34px] sm:size-[38.4px] hover:bg-white/15 transition-all">
            <svg className="w-[17px] sm:w-[19.2px] h-[17px] sm:h-[19.2px]" fill="none" viewBox="0 0 19.2 19.2">
              <path d={svgPathsDash.p3110c800} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              <path d="M12.0001 4.61113V16.6111" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              <path d="M7.20015 2.58876V14.5888" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </button>

        {/* Pulse */}
        <button onClick={() => navigate('/live-nudge')} className="relative h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-[16px] size-[35px] sm:size-[39.2px] hover:bg-white/15 transition-all">
            <svg className="w-[17.5px] sm:w-[19.6px] h-[17.5px] sm:h-[19.6px]" fill="none" viewBox="0 0 19.6 19.6">
              <path d={svgPathsDash.p18580200} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.63" />
            </svg>
          </div>
        </button>

        {/* Chart */}
        <button onClick={() => navigate('/insights')} className="relative h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-[16px] size-[35px] sm:size-[39.2px] hover:bg-white/15 transition-all">
            <svg className="w-[17.5px] sm:w-[19.6px] h-[17.5px] sm:h-[19.6px]" fill="none" viewBox="0 0 19.6 19.6">
              <path d={svgPathsDash.p1a84a300} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64" />
              <path d={svgPathsDash.p39570400} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.64" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

function ForecastCard({ time, period, status, color }: { time: string, period: string, status: string, color: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="bg-white/5 backdrop-blur-xl h-[68px] rounded-[20px] border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.2)] flex items-center justify-between px-[16px]"
    >
      <div className="flex flex-col gap-[4px]">
        <span className="font-['Poppins',sans-serif] text-[14px] leading-[18px] text-gray-400">{time}</span>
        <span className="font-['Poppins',sans-serif] font-bold text-[15px] leading-[18px] text-white">{period}</span>
      </div>
      <div 
        className="h-[36px] w-[100px] rounded-full flex items-center justify-center border" 
        style={{ 
          backgroundColor: `${color}40`, 
          borderColor: `${color}60`,
          boxShadow: `0 0 16px ${color}30`
        }}
      >
        <span className="font-['Poppins',sans-serif] font-bold text-[12px] leading-[16px]" style={{ color }}>{status}</span>
      </div>
    </motion.div>
  );
}

export function TodayDashboard() {
  const navigate = useNavigate();
  const [rhythmEnabled, setRhythmEnabled] = useState(false);
  const { getDashboardData, formatTime } = useUser();
  
  // Get dynamic dashboard data based on calibration results
  const dashboardData = getDashboardData();
  
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
          <svg className="w-[32px] h-[32px]" fill="none" viewBox="0 0 23.1 23.1">
            <path d={svgPathsDash.p1ba3e500} stroke="#5eead4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPathsDash.pfd8e500} stroke="#5eead4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </svg>
        </div>
        
        {/* Page Title */}
        <h1 className="text-white text-[28px] font-bold text-center mb-[12px] leading-tight">
          Today's Rhythm
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-400 text-[15px] text-center max-w-[280px]">
          Your personalized time stability forecast
        </p>
      </motion.div>
      
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
            <div className="text-[#5eead4] text-[24px] font-bold">{dashboardData.stableHours}h</div>
            <div className="text-gray-400 text-[11px] mt-[4px]">Stable time</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-[20px] p-[16px] border border-white/10">
            <div className="text-[#c084fc] text-[24px] font-bold">{dashboardData.moderateHours}h</div>
            <div className="text-gray-400 text-[11px] mt-[4px]">Moderate</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-[20px] p-[16px] border border-white/10">
            <div className="text-[#f472b6] text-[24px] font-bold">{dashboardData.fastDriftHours}h</div>
            <div className="text-gray-400 text-[11px] mt-[4px]">Fast drift</div>
          </div>
        </motion.div>
        
        {/* Rhythm Cues */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 backdrop-blur-xl h-[88px] rounded-[28px] shadow-[0_8px_24px_rgba(0,0,0,0.3)] border border-white/10 flex items-center justify-between px-[20px] mb-[48px] relative z-10"
        >
          <div className="flex items-center gap-[12px]">
            <div 
              className="size-[52px] rounded-full flex items-center justify-center"
              style={{ 
                backgroundColor: '#5eead420',
                boxShadow: '0 0 20px #5eead430, inset 0 0 20px #5eead420'
              }}
            >
              <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 21.5 21.5">
                <path d={svgPathsDash.p336de680} stroke="#5eead4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.79" />
                <path d={svgPathsDash.p1a079e00} stroke="#5eead4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.79" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[16px] leading-[22px] text-white">Rhythm Cues</span>
              <span className="font-normal text-[13px] leading-[18px] text-gray-400">Gentle time awareness</span>
            </div>
          </div>
          <button 
            onClick={() => setRhythmEnabled(!rhythmEnabled)} 
            className={`w-[64px] h-[36px] rounded-full relative transition-colors ${rhythmEnabled ? 'bg-[#5eead4]' : 'bg-white/20'}`}
          >
            <motion.div 
              animate={{ x: rhythmEnabled ? 28 : 4 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-[4px] left-0 bg-white h-[28px] w-[28px] rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
            />
          </button>
        </motion.div>

        {/* Time Stability Forecast */}
        <div className="relative z-10">
          <div className="flex items-center gap-[10px] mb-[16px]">
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 16.5 16.5">
              <path d={svgPathsDash.p56b7e00} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37" />
              <path d={svgPathsDash.p131bbb00} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37" />
            </svg>
            <h3 className="font-semibold text-[16px] leading-[22px] text-white">Time Stability Forecast</h3>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-[12px]"
          >
            {dashboardData.forecast.map((item, idx) => (
              <ForecastCard 
                key={idx}
                time={formatTime(item.time)} 
                period={item.period} 
                status={item.status} 
                color={item.color} 
              />
            ))}
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-[16px] mt-[56px] items-center relative z-10">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={() => navigate('/insights')}
            className="w-full h-[56px] text-white rounded-full flex items-center justify-center text-[16px] font-semibold transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
              border: '1px solid rgba(94, 234, 212, 0.15)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
            }}
          >
            <span className="flex items-center gap-[10px]">
              <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Weekly Insights
            </span>
          </motion.button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}