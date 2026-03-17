interface CalibrationProgressBarProps {
  currentStep: number;
  totalSteps?: number;
}

export function CalibrationProgressBar({ 
  currentStep, 
  totalSteps = 5 
}: CalibrationProgressBarProps) {
  return (
    <div className="flex gap-[8px] items-center justify-center">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div
          key={step}
          className={`rounded-full transition-all duration-300`}
          style={{
            width: '12px',
            height: '12px',
            backgroundColor: step <= currentStep ? '#6EE7D2' : '#334155',
            boxShadow: step <= currentStep ? '0 0 12px rgba(110,231,210,0.6)' : 'none',
          }}
        />
      ))}
    </div>
  );
}
