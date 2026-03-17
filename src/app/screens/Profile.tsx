import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useUser } from '../contexts/UserContext';
import svgPaths from '../../imports/svg-tnabuvp9p9';

export function Profile() {
  const navigate = useNavigate();
  const { userName, userAvatar, setUserAvatar, timeFormat, setTimeFormat, logout } = useUser();
  
  // Parse current avatar
  let currentAvatarData: { color: string; emoji: string } | null = null;
  try {
    if (userAvatar) {
      currentAvatarData = JSON.parse(userAvatar);
    }
  } catch {
    // Legacy format - just a color
    if (userAvatar) {
      currentAvatarData = { color: userAvatar, emoji: '🌸' };
    }
  }
  
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(
    currentAvatarData?.color || null
  );

  // Match AvatarSelection screen - 6 avatars with emojis
  const avatarOptions = [
    { id: 'lavender', color: '#B8A8D8', name: 'Lavender', emoji: '🌸' },
    { id: 'mint', color: '#B8E6D5', name: 'Mint', emoji: '🌿' },
    { id: 'sky', color: '#89CFF0', name: 'Sky Blue', emoji: '☁️' },
    { id: 'peach', color: '#FFB347', name: 'Peach', emoji: '🍑' },
    { id: 'coral', color: '#FF8C69', name: 'Coral', emoji: '🦋' },
    { id: 'sunset', color: '#FFCBA4', name: 'Sunset', emoji: '🌅' },
  ];

  const handleSave = () => {
    if (selectedAvatar) {
      const avatar = avatarOptions.find(a => a.color === selectedAvatar);
      if (avatar) {
        setUserAvatar(JSON.stringify({ color: avatar.color, emoji: avatar.emoji }));
      }
      navigate('/dashboard');
    }
  };

  return (
    <div 
      className="relative w-full min-h-screen pb-[60px]"
      style={{
        background: '#0f172a',
      }}
    >
      <div className="relative max-w-[387.86px] mx-auto py-[26.328px] px-[20px]">
        {/* Header */}
        <div className="content-stretch flex gap-[17.552px] h-[43.879px] items-center relative shrink-0 w-full">
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-white/5 backdrop-blur-xl relative rounded-full shrink-0 size-[43.879px] border border-[#2A3458] hover:bg-white/10 transition-all"
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
              <div className="relative shrink-0 size-[21.94px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9397 21.9397">
                  <g>
                    <path d={svgPaths.p30a3e40} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82831" />
                    <path d="M17.3686 10.9699H4.57043" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82831" />
                  </g>
                </svg>
              </div>
            </div>
          </button>
          <div className="h-[35.104px] relative shrink-0 flex-1">
            <p className="font-['Poppins',sans-serif] font-medium leading-[35.112px] not-italic text-white text-[22px] sm:text-[26.334px] whitespace-nowrap">Profile Settings</p>
          </div>
        </div>

        {/* User Info Section */}
        <div className="bg-white/5 backdrop-blur-xl border border-[#2A3458] content-stretch flex flex-col gap-[24px] items-center mt-[35.104px] py-[24px] relative rounded-[24px] shrink-0 w-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div 
            className="relative rounded-full shrink-0 size-[105.332px] flex items-center justify-center"
            style={{ 
              backgroundColor: avatarOptions.find(a => a.color === selectedAvatar)?.color || avatarOptions[0].color 
            }}
          >
            <span style={{ fontSize: '52px' }}>
              {avatarOptions.find(a => a.color === selectedAvatar)?.emoji || avatarOptions[0].emoji}
            </span>
            <div aria-hidden="true" className="absolute border-[3px] border-solid border-[#2A3458] inset-0 pointer-events-none rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.4)]" />
          </div>
          <div className="flex flex-col items-center text-center">
            <p className="font-['Poppins',sans-serif] font-semibold leading-[29.626px] not-italic text-white text-[19.751px] whitespace-nowrap">{userName || 'Guest'}</p>
            <p className="font-['Poppins',sans-serif] leading-[21.945px] not-italic text-gray-400 text-[15.362px] whitespace-nowrap">ChronoWeave User</p>
          </div>
        </div>

        {/* Avatar Selection */}
        <div className="content-stretch flex flex-col gap-[17.552px] items-start mt-[35.104px] relative shrink-0 w-full">
          {/* Header */}
          <div className="relative shrink-0 w-full">
            <div className="relative">
              <p className="font-['Poppins',sans-serif] font-semibold leading-[29.626px] not-italic text-white text-[19.751px] whitespace-nowrap">Choose Your Avatar</p>
            </div>
            <div className="relative mt-1">
              <p className="font-['Poppins',sans-serif] leading-[21.945px] not-italic text-gray-400 text-[15.362px]">Pick a face that resonates with you</p>
            </div>
          </div>

          {/* Avatar Grid */}
          <div className="bg-white/5 backdrop-blur-xl border border-[#2A3458] relative rounded-[24px] shrink-0 w-full p-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            {/* 3 columns × 2 rows grid with 72px avatars and 16px spacing */}
            <div className="grid grid-cols-3 gap-[16px] justify-items-center">
              {avatarOptions.map((avatar) => (
                <button
                  key={avatar.id}
                  onClick={() => setSelectedAvatar(avatar.color)}
                  className="relative rounded-[20px] transition-all duration-200 hover:scale-110 active:scale-95 flex items-center justify-center"
                  style={{ 
                    width: '72px',
                    height: '72px',
                    backgroundColor: avatar.color,
                    boxShadow: selectedAvatar === avatar.color 
                      ? `0 0 24px ${avatar.color}` 
                      : 'none',
                    border: selectedAvatar === avatar.color 
                      ? '3px solid rgba(125, 211, 199, 0.8)'
                      : '3px solid transparent',
                  }}
                >
                  {/* Emoji as avatar illustration */}
                  <span style={{ fontSize: '36px' }}>
                    {avatar.emoji}
                  </span>

                  {selectedAvatar === avatar.color && (
                    <div className="absolute bg-white flex items-center justify-center rounded-full top-[-6px] right-[-6px]"
                      style={{
                        width: '28px',
                        height: '28px',
                      }}
                    >
                      <div className="relative" style={{ width: '16px', height: '16px' }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5518 17.5518">
                          <g>
                            <path d={svgPaths.p24b88b64} stroke="#7DD3C7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.19397" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Text */}
          <div className="h-[26.328px] relative shrink-0 w-full">
            <p className="font-['Poppins',sans-serif] leading-[26.334px] not-italic text-[17.556px] text-white text-center w-full">
              <span className="leading-[26.334px] text-[#6EE7D2]">Selected Avatar</span>
            </p>
          </div>
        </div>

        {/* Time Format Section */}
        <div className="content-stretch flex flex-col gap-[17.552px] items-start mt-[35.104px] relative shrink-0 w-full">
          {/* Header */}
          <div className="content-stretch flex flex-col gap-[8.776px] items-start relative shrink-0 w-full">
            <div className="h-[29.619px] relative shrink-0 w-full flex items-center gap-[8px]">
              <div className="size-[21.94px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9397 21.9397">
                  <g clipPath="url(#clip0_2004_565)">
                    <path d={svgPaths.p3827c400} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82831" />
                    <path d={svgPaths.p25138380} stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82831" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2004_565">
                      <rect fill="white" height="21.9397" width="21.9397" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="font-['Poppins',sans-serif] font-semibold leading-[29.626px] not-italic text-white text-[19.751px] whitespace-nowrap">Time Format</p>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <p className="flex-1 font-['Poppins',sans-serif] leading-[21.945px] not-italic text-gray-400 text-[15.362px]">Choose how time is displayed</p>
            </div>
          </div>

          {/* Time Format Options */}
          <div 
            className="relative rounded-[24px] shrink-0 w-full p-[24px]"
            style={{
              backgroundColor: '#1E2747',
              border: '1px solid #2A3458',
            }}
          >
            <div className="content-stretch flex flex-col gap-[13.164px] items-start">
              {/* 12-hour format */}
              <button
                onClick={() => setTimeFormat('12h')}
                className={`h-[83.371px] relative rounded-[17.556px] shrink-0 w-full transition-all ${
                  timeFormat === '12h' 
                    ? '' 
                    : 'hover:bg-[#1A2541]'
                }`}
                style={{
                  background: timeFormat === '12h' 
                    ? 'linear-gradient(135deg, #58C7BD 0%, #3DAFA6 100%)'
                    : '#151E3A',
                  border: timeFormat === '12h' ? 'none' : '1px solid #2A3458',
                  boxShadow: timeFormat === '12h' 
                    ? '0 0 28px rgba(88, 199, 189, 0.18)' 
                    : 'none',
                }}
              >
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[17.552px] relative size-full">
                    <div className="relative shrink-0">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative">
                        <div className="relative">
                          <p className={`font-['Poppins',sans-serif] font-semibold leading-[26.334px] not-italic text-[17.556px] whitespace-nowrap ${
                            timeFormat === '12h' ? 'text-white' : 'text-[#94A3B8]'
                          }`}>12-hour format</p>
                        </div>
                        <div className="content-stretch flex items-start relative">
                          <p className={`font-['Poppins',sans-serif] font-medium leading-[21.945px] not-italic relative shrink-0 text-[15.362px] whitespace-nowrap ${
                            timeFormat === '12h' ? 'text-white/90' : 'text-[#94A3B8]'
                          }`}>3:00 PM - 6:00 PM</p>
                        </div>
                      </div>
                    </div>
                    {timeFormat === '12h' && (
                      <div className="bg-white relative rounded-full shrink-0 size-[26.328px]">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                          <div className="relative shrink-0 size-[17.552px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5518 17.5518">
                              <g>
                                <path d={svgPaths.p24b88b64} stroke="#3DAFA6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.19397" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </button>

              {/* 24-hour format */}
              <button
                onClick={() => setTimeFormat('24h')}
                className={`h-[83.371px] relative rounded-[17.556px] shrink-0 w-full transition-all ${
                  timeFormat === '24h' 
                    ? '' 
                    : 'hover:bg-[#1A2541]'
                }`}
                style={{
                  background: timeFormat === '24h' 
                    ? 'linear-gradient(135deg, #58C7BD 0%, #3DAFA6 100%)'
                    : '#151E3A',
                  border: timeFormat === '24h' ? 'none' : '1px solid #2A3458',
                  boxShadow: timeFormat === '24h' 
                    ? '0 0 28px rgba(88, 199, 189, 0.18)' 
                    : 'none',
                }}
              >
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between pl-[17.552px] pr-[17.552px] relative size-full">
                    <div className="relative shrink-0">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
                        <div className="relative">
                          <p className={`font-['Poppins',sans-serif] font-semibold leading-[26.334px] not-italic text-[17.556px] whitespace-nowrap ${
                            timeFormat === '24h' ? 'text-white' : 'text-[#94A3B8]'
                          }`}>24-hour format</p>
                        </div>
                        <div className="content-stretch flex items-start relative">
                          <p className={`font-['Poppins',sans-serif] font-medium leading-[21.945px] not-italic relative shrink-0 text-[15.362px] whitespace-nowrap ${
                            timeFormat === '24h' ? 'text-white/90' : 'text-[#94A3B8]'
                          }`}>15:00 - 18:00</p>
                        </div>
                      </div>
                    </div>
                    {timeFormat === '24h' && (
                      <div className="bg-white relative rounded-full shrink-0 size-[26.328px]">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                          <div className="relative shrink-0 size-[17.552px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5518 17.5518">
                              <g>
                                <path d={svgPaths.p24b88b64} stroke="#3DAFA6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.19397" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="relative rounded-[28px] shrink-0 w-full mt-[32px] transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            height: '56px',
            background: 'linear-gradient(135deg, #58C7BD 0%, #3DAFA6 100%)',
            boxShadow: '0 0 28px rgba(88, 199, 189, 0.18)',
          }}
        >
          <p className="font-['Inter',sans-serif] font-semibold text-[18px] text-center text-white whitespace-nowrap">Save Changes</p>
        </button>

        {/* Logout Button */}
        <button
          onClick={() => {
            logout();
            navigate('/');
          }}
          className="relative rounded-[28px] shrink-0 w-full mt-[16px] transition-all duration-200 hover:scale-105 active:scale-95 border-2"
          style={{
            height: '56px',
            background: 'transparent',
            borderColor: '#f87171',
          }}
        >
          <p className="font-['Inter',sans-serif] font-semibold text-[18px] text-center text-[#f87171] whitespace-nowrap">Logout</p>
        </button>
      </div>
    </div>
  );
}