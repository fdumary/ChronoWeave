import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../../imports/svg-fi50zxqfly';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationModal({ isOpen, onClose }: NotificationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-[24px]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring', bounce: 0.2 }}
            className="bg-white w-full max-w-[392px] h-[352px] rounded-[24px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] relative flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex h-[73px] items-center justify-between px-[24px] border-b-[1.2px] border-[#f3f4f6] shrink-0">
              <div className="flex items-center gap-[12px]">
                <div className="size-[20px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p13424300} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                    <path d={svgPaths.p2b6ab00} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                  </svg>
                </div>
                <h2 className="font-['Poppins',sans-serif] font-semibold text-[18px] text-[#0a0a0a] leading-[28px]">
                  Notifications
                </h2>
              </div>
              <button 
                onClick={onClose}
                className="size-[32px] rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <div className="size-[20px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p10b8b00} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center pt-[24px] px-[24px] pb-[48px]">
              <div className="bg-[#eff3ff] size-[64px] rounded-full flex items-center justify-center mb-[16px]">
                <div className="size-[32px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 32 32">
                    <path d={svgPaths.pe759000} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.67" />
                    <path d={svgPaths.p14f0a080} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.67" />
                  </svg>
                </div>
              </div>
              
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] text-[#0a0a0a] text-center leading-[27px] mb-[8px]">
                None
              </h3>
              
              <p className="font-['Poppins',sans-serif] font-normal text-[14px] text-[#0a0a0a] text-center leading-[20px]">
                You're all caught up! No notifications right now.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
