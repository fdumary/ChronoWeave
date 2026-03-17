import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, Map, BellDot, AreaChart, Settings } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/drift-map", icon: Map, label: "Drift Map" },
    { path: "/live-nudge", icon: BellDot, label: "Live Nudge" },
    { path: "/insights", icon: AreaChart, label: "Insights" },
  ];

  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-100 font-sans max-w-md mx-auto relative overflow-hidden flex flex-col shadow-2xl">
      {/* Top Bar Navigation */}
      <header className="px-6 py-4 flex justify-between items-center z-20 relative">
        <Link 
          to="/settings" 
          className="p-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-colors active:scale-95 flex items-center justify-center"
          aria-label="Profile and Settings"
        >
          <Settings size={22} className="text-slate-300" />
        </Link>
        <h1 className="font-semibold text-lg tracking-wide text-white/90">ChronoWeave</h1>
        {/* Spacer to keep title centered */}
        <div className="w-[42px]" /> 
      </header>

      {/* Main App Content Area */}
      <main className="flex-1 overflow-y-auto z-10 relative pb-32 pt-2 px-6 custom-scrollbar">
        <Outlet />
      </main>

      {/* Floating Bottom Navigation */}
      <nav className="absolute bottom-0 w-full z-30 pb-safe pointer-events-none">
        <div className="bg-[#0f172a]/80 backdrop-blur-2xl border-t border-white/10 px-6 py-4 rounded-t-[2.5rem] flex justify-between items-center mx-0 pointer-events-auto shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.5)]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center gap-1 group relative"
              >
                <div className={cn(
                  "p-3 rounded-2xl transition-all duration-300 ease-out",
                  isActive ? "bg-white/10 scale-110 shadow-lg" : "hover:bg-white/5 scale-100"
                )}>
                  <Icon
                    size={isActive ? 24 : 22}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={cn(
                      "transition-colors duration-300",
                      isActive ? "text-[#5eead4]" : "text-slate-400 group-hover:text-slate-200"
                    )}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
