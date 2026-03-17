import { ReactNode } from 'react';

interface OnboardingCardProps {
  children: ReactNode;
}

export function OnboardingCard({ children }: OnboardingCardProps) {
  return (
    <div 
      className="w-full rounded-[24px] p-[24px]"
      style={{
        backgroundColor: '#1E2747',
        border: '1px solid #2A3458',
      }}
    >
      {children}
    </div>
  );
}
