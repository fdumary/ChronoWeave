import { useNavigate } from 'react-router';
import { ClockMascot } from '../components/ClockMascot';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 50%, #334155 100%)',
      }}
    >
      <div className="max-w-sm w-full mx-auto text-center space-y-8">
        <ClockMascot mood="confused" size="large" color="#c084fc" />
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white font-['Inter',sans-serif]">
            Lost in Time?
          </h1>
          <p className="text-lg text-gray-400 font-['Inter',sans-serif]">
            This page doesn't exist. Let's get you back to your time journey.
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="w-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] hover:opacity-90 text-[#0f172a] py-4 px-8 rounded-full text-lg font-bold shadow-[0_8px_24px_rgba(94,234,212,0.3)] transition-all duration-200 hover:scale-105 active:scale-95 font-['Inter',sans-serif]"
        >
          Return to Start
        </button>
      </div>
    </div>
  );
}