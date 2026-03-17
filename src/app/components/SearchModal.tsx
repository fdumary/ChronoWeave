import { useState, useEffect, useRef } from 'react';
import { X, Search, Clock, TrendingUp, Map, Calendar, Zap, BarChart3, ArrowRight, User } from 'lucide-react';
import { useNavigate } from 'react-router';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: 'Screen' | 'Feature' | 'Insight' | 'Action';
  icon: any;
  path: string;
  color: string;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const allContent: SearchResult[] = [
    {
      id: 'dashboard',
      title: "Today's Dashboard",
      description: 'View your daily time perception overview',
      category: 'Screen',
      icon: Calendar,
      path: '/dashboard',
      color: '#B8A8D8',
    },
    {
      id: 'drift-map',
      title: 'Drift Map',
      description: 'Explore your time perception patterns',
      category: 'Screen',
      icon: Map,
      path: '/drift-map',
      color: '#89CFF0',
    },
    {
      id: 'weekly-insight',
      title: 'Weekly Insights',
      description: 'Review your weekly time perception trends',
      category: 'Screen',
      icon: BarChart3,
      path: '/weekly-insight',
      color: '#B8E6D5',
    },
    {
      id: 'live-nudge',
      title: 'Live Nudge',
      description: 'Get gentle time awareness reminders',
      category: 'Screen',
      icon: Zap,
      path: '/live-nudge',
      color: '#FFB347',
    },
    {
      id: 'calibration-1',
      title: 'Calibration Test: Hold',
      description: 'Measure your time perception by holding a button',
      category: 'Feature',
      icon: Clock,
      path: '/calibration-1',
      color: '#89CFF0',
    },
    {
      id: 'calibration-2',
      title: 'Calibration Test: Count',
      description: 'Test your internal timer by counting seconds',
      category: 'Feature',
      icon: Clock,
      path: '/calibration-2',
      color: '#FFB347',
    },
    {
      id: 'profile',
      title: 'Profile Settings',
      description: 'Update your avatar and personal settings',
      category: 'Screen',
      icon: User,
      path: '/profile',
      color: '#DDA0DD',
    },
    {
      id: 'time-feeling',
      title: 'How Does Time Feel?',
      description: 'Log your current time perception state',
      category: 'Action',
      icon: TrendingUp,
      path: '/time-feeling',
      color: '#FF8C69',
    },
    {
      id: 'rhythm-cue',
      title: 'Rhythm Cue',
      description: 'Start gentle audio cues to stay time-aware',
      category: 'Feature',
      icon: Zap,
      path: '/dashboard',
      color: '#FFB347',
    },
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredResults(allContent);
    } else {
      const query = searchQuery.toLowerCase();
      const results = allContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
      setFilteredResults(results);
    }
  }, [searchQuery]);

  const handleResultClick = (path: string) => {
    navigate(path);
    onClose();
    setSearchQuery('');
  };

  const handleClose = () => {
    onClose();
    setSearchQuery('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl animate-in slide-in-from-top-4 duration-300">
        {/* Header */}
        <div className="flex items-center gap-3 p-6 pb-4 border-b border-gray-100">
          <Search className="w-5 h-5 text-[#8B6BB8]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search ChronoWeave..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-lg text-[#6B4C9A] placeholder-[#B8A8D8] outline-none bg-transparent"
          />
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-[#8B6BB8]" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {filteredResults.length > 0 ? (
            <div className="space-y-2">
              {filteredResults.map((result) => {
                const Icon = result.icon;
                return (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result.path)}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-[#F4F0FA] transition-all duration-200 group text-left"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${result.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: result.color }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-[#6B4C9A] truncate">
                          {result.title}
                        </h3>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0"
                          style={{
                            backgroundColor: `${result.color}20`,
                            color: result.color,
                          }}
                        >
                          {result.category}
                        </span>
                      </div>
                      <p className="text-sm text-[#8B6BB8] truncate">
                        {result.description}
                      </p>
                    </div>

                    <ArrowRight className="w-5 h-5 text-[#B8A8D8] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F4F0FA] flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[#B8A8D8]" />
              </div>
              <h3 className="font-semibold text-[#6B4C9A] mb-2">No results found</h3>
              <p className="text-sm text-[#8B6BB8]">
                Try searching for screens, features, or actions
              </p>
            </div>
          )}
        </div>

        {/* Quick Tips */}
        {searchQuery === '' && (
          <div className="p-6 pt-4 border-t border-gray-100">
            <p className="text-xs text-[#8B6BB8] mb-3 font-medium">Quick tips</p>
            <div className="flex flex-wrap gap-2">
              {['Dashboard', 'Calibration', 'Insights', 'Drift Map'].map((tip) => (
                <button
                  key={tip}
                  onClick={() => setSearchQuery(tip)}
                  className="px-3 py-1.5 bg-[#F4F0FA] hover:bg-[#E0D5EB] rounded-full text-sm text-[#6B4C9A] font-medium transition-colors"
                >
                  {tip}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}