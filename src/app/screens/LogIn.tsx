import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useUser } from '../contexts/UserContext';
import { OnboardingCard } from '../components/OnboardingCard';

export function LogIn() {
  const navigate = useNavigate();
  const { setUserName, setUserAvatar } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, use email as name or set a default
    setUserName('Nargiz Amirova'); // Default returning user
    setUserAvatar('#89CFF0'); // Default avatar for returning user
    // Returning users go straight to dashboard (they already have their avatar)
    navigate('/dashboard');
  };

  const handleGuestContinue = () => {
    setUserName('Guest User');
    setUserAvatar('#B8A8D8');
    navigate('/avatar-selection');
  };

  return (
    <div 
      className="h-full flex flex-col px-[24px]"
      style={{
        background: '#1C2A4A',
      }}
    >
      {/* Top spacing */}
      <div className="h-[48px]" />
      
      {/* Title */}
      <h1 className="font-['Inter',sans-serif] font-bold text-white text-[32px] text-center mb-[12px]">
        Welcome back
      </h1>

      {/* Subtitle */}
      <p className="font-['Inter',sans-serif] text-gray-400 text-[18px] text-center mb-[32px]">
        Continue your time journey
      </p>

      {/* Content Card */}
      <OnboardingCard>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-[16px]">
            <label className="font-['Inter',sans-serif] font-semibold text-white text-[14px] mb-2 block">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-[52px] px-[16px] rounded-[16px] bg-white/10 font-['Inter',sans-serif] text-[16px] text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#58C7BD] border border-white/20 transition-all"
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-[16px]">
            <label className="font-['Inter',sans-serif] font-semibold text-white text-[14px] mb-2 block">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full h-[52px] px-[16px] rounded-[16px] bg-white/10 font-['Inter',sans-serif] text-[16px] text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#58C7BD] border border-white/20 transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Forgot Password Button */}
          <button
            type="button"
            className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#58C7BD] hover:text-[#3DAFA6] transition-colors"
          >
            Forgot Password?
          </button>
        </form>
      </OnboardingCard>

      {/* Primary Button */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.01 }}
        onClick={handleSubmit}
        className="w-full h-[56px] rounded-full text-white flex items-center justify-center text-[16px] font-semibold transition-all duration-200 mt-[32px] mb-[16px]"
        style={{
          background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
          border: '1px solid rgba(94, 234, 212, 0.15)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
        }}
      >
        <span className="flex items-center gap-[10px]">
          <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24">
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Log In
        </span>
      </motion.button>

      {/* Secondary action - Sign Up link */}
      <div className="text-center mb-[16px]">
        <p className="font-['Inter',sans-serif] text-[16px] text-gray-400 inline">
          Don't have an account?{' '}
        </p>
        <button
          onClick={() => navigate('/signup')}
          className="inline"
        >
          <p className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#58C7BD] inline hover:text-[#3DAFA6] transition-colors">
            Sign Up
          </p>
        </button>
      </div>

      {/* Continue as Guest */}
      <button
        onClick={handleGuestContinue}
        className="w-full h-[48px]"
      >
        <p className="font-['Inter',sans-serif] text-[16px] text-gray-400 text-center hover:text-[#58C7BD] transition-colors">
          Continue as Guest
        </p>
      </button>

      {/* Bottom spacing */}
      <div className="h-[32px]" />
    </div>
  );
}