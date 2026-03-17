import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';

interface PageNavigationProps {
  onBack?: () => void;
  onNext?: () => void;
  showBack?: boolean;
  showNext?: boolean;
  backPath?: string;
  nextPath?: string;
}

export function PageNavigation({
  onBack,
  onNext,
  showBack = true,
  showNext = false,
  backPath,
  nextPath,
}: PageNavigationProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (backPath) {
      navigate(backPath);
    } else {
      navigate(-1);
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else if (nextPath) {
      navigate(nextPath);
    }
  };

  return (
    <div className="flex items-center justify-between mb-6">
      {showBack ? (
        <button
          onClick={handleBack}
          className="w-10 h-10 rounded-full bg-[#F4F0FA] hover:bg-[#E0D5EB] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-[#6B4C9A]" />
        </button>
      ) : (
        <div className="w-10 h-10" />
      )}

      {showNext ? (
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-[#F4F0FA] hover:bg-[#E0D5EB] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label="Go forward"
        >
          <ChevronRight className="w-6 h-6 text-[#6B4C9A]" />
        </button>
      ) : (
        <div className="w-10 h-10" />
      )}
    </div>
  );
}
