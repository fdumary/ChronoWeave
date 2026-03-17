import { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import { useNavigate } from 'react-router';
import avatarImage from '../../assets/96cc948ae24bf6cff969c8cb2351cd23b1d298bb.png';
import { SearchModal } from './SearchModal';
import { NotificationModal } from './NotificationModal';

interface TopNavProps {
  userName?: string;
  userAvatar?: string | null;
}

export function TopNav({ userName = 'Nargiz Amirova', userAvatar = null }: TopNavProps) {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 mb-4 sm:mb-6 md:mb-8">
        {/* Curved background */}
        <div className="bg-[#B8A8D8] rounded-b-[20px] p-4 sm:p-5 md:p-6">
          <div className="max-w-sm mx-auto flex items-center justify-between">
            {/* Left side - Avatar */}
            <button 
              onClick={() => navigate('/profile')}
              className="hover:bg-white/10 rounded-full p-1 transition-colors"
            >
              {userAvatar ? (
                <div 
                  className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 border-white shadow-md"
                  style={{ backgroundColor: userAvatar }}
                />
              ) : (
                <img 
                  src={avatarImage} 
                  alt="Profile" 
                  className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover"
                />
              )}
            </button>
            
            {/* Right side - Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Search className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </button>
              <button 
                onClick={() => setIsNotificationOpen(true)}
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors relative"
              >
                <Bell className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                {/* Optional notification dot */}
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF8C69] rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      {/* Notification Modal */}
      <NotificationModal isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />
    </>
  );
}