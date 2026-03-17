import { useNavigate, useLocation } from 'react-router';
import { Home, Map, Activity, TrendingUp } from 'lucide-react';

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      icon: Home,
      label: 'Today',
      path: '/dashboard',
      color: '#B8A8D8',
    },
    {
      icon: Map,
      label: 'Drift Map',
      path: '/drift-map',
      color: '#89CFF0',
    },
    {
      icon: Activity,
      label: 'Calibrate',
      path: '/time-feeling',
      color: '#FFB347',
    },
    {
      icon: TrendingUp,
      label: 'Insights',
      path: '/insights',
      color: '#B8E6D5',
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#F0E8F5] shadow-lg">
      <div className="max-w-sm mx-auto px-4">
        <div className="flex items-center justify-around py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center gap-1 min-w-[60px] transition-all duration-200 hover:scale-110 active:scale-95"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 ${
                    active ? 'shadow-md' : ''
                  }`}
                  style={{
                    backgroundColor: active ? item.color : '#F5F5F5',
                  }}
                >
                  <Icon
                    className="w-6 h-6 transition-colors duration-200"
                    style={{
                      color: active ? 'white' : '#8B6BB8',
                    }}
                  />
                </div>
                <span
                  className="text-xs font-semibold transition-colors duration-200"
                  style={{
                    color: active ? item.color : '#B0A0C0',
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}