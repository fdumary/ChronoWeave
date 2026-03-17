import { ReactNode } from 'react';

interface IPhoneMockupProps {
  children: ReactNode;
}

export function IPhoneMockup({ children }: IPhoneMockupProps) {
  return (
    <>
      <style>{`
        .iphone-screen-content::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8 gap-6">
        {/* iPhone Frame Container */}
        <div className="relative" style={{ width: '390px', height: '844px' }}>
          {/* iPhone Device Frame */}
          <div 
            className="absolute inset-0 rounded-[60px] overflow-hidden shadow-2xl"
            style={{
              background: '#000',
              border: '14px solid #1f1f1f',
              boxShadow: '0 0 0 2px #3a3a3a, 0 30px 80px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Notch */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 rounded-b-3xl flex items-center justify-center"
              style={{
                width: '150px',
                height: '30px',
                background: '#000',
              }}
            >
              {/* Speaker */}
              <div 
                className="rounded-full"
                style={{
                  width: '60px',
                  height: '6px',
                  background: '#0a0a0a',
                  marginTop: '6px',
                }}
              />
              {/* Camera */}
              <div 
                className="absolute right-6 top-3 rounded-full"
                style={{
                  width: '12px',
                  height: '12px',
                  background: '#0f172a',
                  border: '1px solid #1e293b',
                }}
              />
            </div>

            {/* Screen Content */}
            <div 
              className="absolute inset-0 overflow-y-auto overflow-x-hidden rounded-[46px] scrollbar-hide iphone-screen-content"
              style={{
                background: '#0f172a',
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none', /* IE and Edge */
              }}
            >
              {children}
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-50">
              <div 
                className="rounded-full"
                style={{
                  width: '134px',
                  height: '5px',
                  background: 'rgba(255, 255, 255, 0.3)',
                }}
              />
            </div>
          </div>

          {/* Side Buttons */}
          {/* Volume Up */}
          <div 
            className="absolute rounded-r-sm"
            style={{
              left: '-3px',
              top: '140px',
              width: '3px',
              height: '32px',
              background: '#3a3a3a',
            }}
          />
          {/* Volume Down */}
          <div 
            className="absolute rounded-r-sm"
            style={{
              left: '-3px',
              top: '180px',
              width: '3px',
              height: '32px',
              background: '#3a3a3a',
            }}
          />
          {/* Silent Switch */}
          <div 
            className="absolute rounded-r-sm"
            style={{
              left: '-3px',
              top: '100px',
              width: '3px',
              height: '28px',
              background: '#3a3a3a',
            }}
          />
          {/* Power Button */}
          <div 
            className="absolute rounded-l-sm"
            style={{
              right: '-3px',
              top: '160px',
              width: '3px',
              height: '80px',
              background: '#3a3a3a',
            }}
          />
        </div>

        {/* Device Label - positioned outside the iPhone frame */}
        <div className="text-center">
          <p className="text-gray-500 text-sm font-medium">Press R key to restart the prototype</p>
        </div>
      </div>
    </>
  );
}