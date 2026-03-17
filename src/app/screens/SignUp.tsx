import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useUser } from '../contexts/UserContext';
import { OnboardingCard } from '../components/OnboardingCard';

export function SignUp() {
  const navigate = useNavigate();
  const { setUserName, setUserAvatar } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save the user's name
    setUserName(formData.name);
    // Navigate to avatar selection
    navigate('/avatar-selection');
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
        Create your account
      </h1>

      {/* Subtitle */}
      <p className="font-['Inter',sans-serif] text-gray-400 text-[18px] text-center mb-[32px]">
        Start understanding your time perception
      </p>

      {/* Content Card */}
      <OnboardingCard>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-[16px]">
            <label className="font-['Inter',sans-serif] font-semibold text-white text-[14px] mb-2 block">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-[52px] px-[16px] rounded-[16px] bg-white/10 font-['Inter',sans-serif] text-[16px] text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#58C7BD] border border-white/20 transition-all"
              placeholder="Your name"
              required
            />
          </div>

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
          <div>
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
              minLength={6}
            />
          </div>
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
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8.5 3a4 4 0 100 8 4 4 0 000-8zM20 8v6M23 11h-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Create Account
        </span>
      </motion.button>

      {/* Secondary action - Log In link */}
      <div className="text-center mb-[16px]">
        <p className="font-['Inter',sans-serif] text-[16px] text-gray-400 inline">
          Already have an account?{' '}
        </p>
        <button
          onClick={() => navigate('/login')}
          className="inline"
        >
          <p className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#58C7BD] inline hover:text-[#3DAFA6] transition-colors">
            Log In
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