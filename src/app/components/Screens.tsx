import { Map, BellDot, AreaChart, Settings as SettingsIcon, Compass, Zap, Activity, Clock, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';

// Reusable Glassmorphism Card
const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-xl ${className}`}>
    {children}
  </div>
);

export function Dashboard() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-8 mt-2">
        <h2 className="text-3xl font-bold mb-2 tracking-tight">Welcome back</h2>
        <p className="text-slate-400">Here is your current time perception state.</p>
      </header>

      {/* Main State Card */}
      <Card className="border-[#5eead4]/30 relative overflow-hidden group">
        <div className="absolute top-[-50%] right-[-10%] w-[100px] h-[100px] bg-[#5eead4]/20 blur-[40px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
        <div className="flex items-center gap-3 mb-4">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5eead4] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5eead4]"></span>
          </div>
          <h3 className="font-bold text-xl text-[#5eead4] tracking-wide">Stable State</h3>
        </div>
        <p className="text-slate-300 text-[15px] leading-relaxed">
          Your internal clock is currently aligned with real-world time. Great job maintaining focus today!
        </p>
      </Card>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-5">
          <div className="bg-[#c084fc]/20 w-10 h-10 rounded-xl flex items-center justify-center mb-3">
            <Activity className="text-[#c084fc]" size={20} />
          </div>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Time Drift</p>
          <p className="text-2xl font-bold text-white">± 5m</p>
        </Card>
        <Card className="p-5">
          <div className="bg-[#f472b6]/20 w-10 h-10 rounded-xl flex items-center justify-center mb-3">
            <Clock className="text-[#f472b6]" size={20} />
          </div>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Active</p>
          <p className="text-2xl font-bold text-white">3h 12m</p>
        </Card>
      </div>
    </div>
  );
}

export function DriftMap() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-6 mt-2">
        <h2 className="text-3xl font-bold mb-2 tracking-tight">Drift Map</h2>
        <p className="text-slate-400">Visualize your time perception over the day.</p>
      </header>
      <Card className="h-64 flex flex-col items-center justify-center text-center space-y-4 relative overflow-hidden border-[#c084fc]/30">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#c084fc]/5 to-transparent pointer-events-none" />
        <Map className="text-[#c084fc] opacity-50" size={48} />
        <p className="text-slate-400 max-w-[200px] text-sm leading-relaxed">Your daily time perception chart will render here.</p>
      </Card>
      <div className="space-y-3">
         <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest px-2">Recent Drifts</h3>
         <Card className="p-4 border-l-4 border-l-[#f472b6]">
            <p className="text-white font-medium mb-1">Fast Perception</p>
            <p className="text-slate-400 text-xs">You felt time moving 2x faster from 2:00 PM to 3:30 PM.</p>
         </Card>
      </div>
    </div>
  );
}

export function LiveNudge() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-6 mt-2">
        <h2 className="text-3xl font-bold mb-2 tracking-tight">Live Nudge</h2>
        <p className="text-slate-400">Gentle anchors to bring you back to now.</p>
      </header>
      <div className="flex flex-col gap-4">
        <Card className="border-[#f472b6]/40 bg-[#f472b6]/5 flex flex-col items-center justify-center text-center p-8 py-12">
          <div className="w-20 h-20 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(244,114,182,0.3)]">
            <BellDot className="text-[#f472b6]" size={36} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Hyperfocus Detected</h3>
          <p className="text-slate-300 leading-relaxed mb-8">Take a deep breath. You've been working on the same task for over 90 minutes. It's safe to pause.</p>
          <button className="bg-white/10 hover:bg-white/20 transition-colors text-white font-bold py-3 px-8 rounded-full shadow-lg border border-white/10">
            Acknowledge
          </button>
        </Card>
      </div>
    </div>
  );
}

export function Insights() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-6 mt-2">
        <h2 className="text-3xl font-bold mb-2 tracking-tight">Insights</h2>
        <p className="text-slate-400">Long-term patterns and trends.</p>
      </header>
      <Card className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-white">Weekly Alignment</h3>
          <span className="text-[#5eead4] font-bold">+12%</span>
        </div>
        <div className="h-40 bg-white/5 rounded-2xl flex items-end justify-between p-4 px-6 relative overflow-hidden border border-white/5">
           {[40, 60, 45, 80, 50, 70, 90].map((height, i) => (
              <div key={i} className="w-6 rounded-full bg-[#5eead4]/60 relative" style={{ height: `${height}%` }}>
                <div className="absolute top-0 w-full h-full bg-gradient-to-t from-transparent to-white/30 rounded-full" />
              </div>
           ))}
        </div>
        <p className="text-slate-400 text-sm text-center pt-2">Your perception stability improved this week.</p>
      </Card>
    </div>
  );
}

export function Settings() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-100 font-sans max-w-md mx-auto relative p-6 space-y-8 pb-32">
      <header className="flex items-center gap-4 mb-8 pt-4">
         <button onClick={() => navigate(-1)} className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 transition-colors active:scale-95">
            <SettingsIcon size={24} className="text-slate-300" />
         </button>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Profile & Settings</h2>
        </div>
      </header>
      
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2">Account</h3>
        <Card className="p-2 space-y-1">
          <button className="w-full text-left p-4 hover:bg-white/5 rounded-xl transition-colors font-medium">Notification Preferences</button>
          <div className="h-[1px] bg-white/5 mx-4" />
          <button className="w-full text-left p-4 hover:bg-white/5 rounded-xl transition-colors font-medium">Calibration Settings</button>
          <div className="h-[1px] bg-white/5 mx-4" />
          <button className="w-full text-left p-4 hover:bg-white/5 rounded-xl transition-colors font-medium text-[#f472b6] flex items-center justify-between">
            Sign Out <LogOut size={18} />
          </button>
        </Card>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2">App Details</h3>
        <Card className="p-6 text-center">
          <Zap className="text-slate-500 mx-auto mb-3" size={32} />
          <p className="font-bold text-white mb-1">ChronoWeave</p>
          <p className="text-slate-400 text-sm">Version 1.0.0-beta</p>
        </Card>
      </div>
    </div>
  );
}

export function Onboarding() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0f172a] min-h-screen flex flex-col items-center justify-center p-6 max-w-md mx-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#c084fc]/10 to-transparent pointer-events-none" />
      <div className="z-10 w-full text-center space-y-8 max-w-[300px]">
        <Compass className="text-[#c084fc] mx-auto" size={64} />
        <div>
          <h1 className="text-3xl font-bold mb-4 text-white tracking-tight">Calibration</h1>
          <p className="text-slate-300 leading-relaxed">Let's find your baseline time perception to personalize your experience.</p>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="w-full bg-[#c084fc] hover:bg-[#c084fc]/90 text-white font-bold py-4 rounded-2xl transition-transform active:scale-95 shadow-[0_0_30px_rgba(192,132,252,0.3)]"
        >
          Start Calibration
        </button>
        <button onClick={() => navigate('/login')} className="text-slate-500 text-sm font-medium hover:text-slate-300">
           Skip for now
        </button>
      </div>
    </div>
  );
}
