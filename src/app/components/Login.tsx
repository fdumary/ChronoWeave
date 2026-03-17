import { Link, useNavigate } from "react-router";
import { ShieldAlert, ArrowRight, Zap } from "lucide-react";

export function Login() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-100 flex flex-col items-center justify-center p-6 max-w-md mx-auto relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-20%] w-[140%] h-[50%] bg-[#5eead4]/10 rounded-[100%] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[140%] h-[50%] bg-[#c084fc]/10 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="z-10 w-full max-w-sm space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl mb-4">
            <Zap className="text-[#5eead4]" size={40} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white">ChronoWeave</h1>
          <p className="text-slate-400 text-lg">Time perception, calibrated.</p>
        </div>

        {/* Developer Bypass Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] space-y-6 shadow-2xl">
          <div className="space-y-2">
            <h2 className="font-semibold text-xl flex items-center gap-2 text-white">
              <ShieldAlert className="text-[#f472b6]" size={24} />
              Developer Bypass
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We noticed you are testing your routing. Use this panel to bypass the login flow and jump directly into the main app screens.
            </p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="w-full bg-[#5eead4] hover:bg-[#5eead4]/90 text-[#0f172a] font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(94,234,212,0.3)]"
          >
            Enter Dashboard <ArrowRight size={20} />
          </button>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-4">Jump To Specific Page</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { path: "/", label: "Dashboard", color: "text-[#5eead4]" },
                { path: "/drift-map", label: "Drift Map", color: "text-[#c084fc]" },
                { path: "/live-nudge", label: "Live Nudge", color: "text-[#f472b6]" },
                { path: "/insights", label: "Insights", color: "text-white" },
                { path: "/onboarding", label: "Calibration", color: "text-white" },
                { path: "/settings", label: "Settings", color: "text-white" },
              ].map(link => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="text-sm bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 p-3 rounded-xl text-center transition-all flex flex-col items-center justify-center font-medium"
                >
                  <span className={link.color}>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
