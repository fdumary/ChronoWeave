interface ProgressBarProps {
  currentStep: 1 | 2 | 3;
  totalSteps?: number;
}

export function ProgressBar({ currentStep, totalSteps = 3 }: ProgressBarProps) {
  return (
    <div className="w-full py-4">
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => {
          const stepNumber = i + 1;
          const isActive = stepNumber <= currentStep;

          return (
            <div
              key={stepNumber}
              className={`flex-1 h-2 rounded-full transition-all duration-500 ease-out ${
                isActive
                  ? 'bg-gradient-to-r from-[#B8A8D8] to-[#89CFF0]'
                  : 'bg-gray-200'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}