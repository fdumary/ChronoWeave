import { createContext, useContext, useState, ReactNode, useEffect, useMemo, useCallback } from 'react';

interface CalibrationResults {
  test1Time?: number; // 10-second test result
  test2Time?: number; // 30-second test result  
  test3Correct?: boolean; // rhythm test result
  profileCreated?: boolean;
}

interface DashboardData {
  stableHours: number;
  moderateHours: number;
  fastDriftHours: number;
  forecast: Array<{
    time: string;
    period: string;
    status: 'Stable' | 'Moderate' | 'Fast Drift';
    color: string;
  }>;
}

interface DriftMapData {
  morningStability: number; // Percentage 0-100
  afternoonStability: number; // Percentage 0-100
  eveningStability: number; // Percentage 0-100
  patterns: Array<{
    period: string;
    stability: number;
    status: string;
    description: string;
  }>;
}

interface UserContextType {
  userName: string | null;
  setUserName: (name: string) => void;
  userAvatar: string | null;
  setUserAvatar: (avatar: string) => void;
  timeFormat: '12h' | '24h';
  setTimeFormat: (format: '12h' | '24h') => void;
  formatTime: (time: string) => string;
  calibrationResults: CalibrationResults;
  setCalibrationResults: (results: CalibrationResults) => void;
  getDashboardData: () => DashboardData;
  getDriftMapData: () => DriftMapData;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userName, setUserNameState] = useState<string | null>(() => {
    // Initialize from localStorage if available
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('chronoweave_username');
        return saved || null;
      }
    } catch {
      // localStorage not available or blocked
    }
    return null;
  });

  const [userAvatar, setUserAvatarState] = useState<string | null>(() => {
    // Initialize from localStorage if available
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('chronoweave_avatar');
        return saved || null;
      }
    } catch {
      // localStorage not available or blocked
    }
    return null;
  });

  const [timeFormat, setTimeFormatState] = useState<'12h' | '24h'>(() => {
    // Initialize from localStorage if available
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('chronoweave_timeformat');
        return (saved as '12h' | '24h') || '12h';
      }
    } catch {
      // localStorage not available or blocked
    }
    return '12h';
  });

  const [calibrationResults, setCalibrationResultsState] = useState<CalibrationResults>(() => {
    // Initialize from localStorage if available
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('chronoweave_calibration_results');
        return saved ? JSON.parse(saved) : {};
      }
    } catch {
      // localStorage not available or blocked
    }
    return {};
  });

  const setUserName = (name: string) => {
    setUserNameState(name);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('chronoweave_username', name);
      }
    } catch {
      // localStorage not available
    }
  };

  const setUserAvatar = (avatar: string) => {
    setUserAvatarState(avatar);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('chronoweave_avatar', avatar);
      }
    } catch {
      // localStorage not available
    }
  };

  const setTimeFormat = (format: '12h' | '24h') => {
    setTimeFormatState(format);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('chronoweave_timeformat', format);
      }
    } catch {
      // localStorage not available
    }
  };

  const setCalibrationResults = (results: CalibrationResults) => {
    setCalibrationResultsState(results);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('chronoweave_calibration_results', JSON.stringify(results));
      }
    } catch {
      // localStorage not available
    }
  };

  // Helper function to format time based on user preference
  const formatTime = useCallback((time: string): string => {
    if (timeFormat === '24h') {
      return time;
    }

    // Convert 24h format to 12h format
    // Expected input formats: "9:00", "15:00", "9:00 - 12:00", "15:00 - 18:00"
    const convertTo12h = (timeStr: string) => {
      const match = timeStr.match(/(\d+):(\d+)/);
      if (!match) return timeStr;

      const hours = parseInt(match[1], 10);
      const minutes = match[2];
      
      if (hours === 0) {
        return `12:${minutes} AM`;
      } else if (hours < 12) {
        return `${hours}:${minutes} AM`;
      } else if (hours === 12) {
        return `12:${minutes} PM`;
      } else {
        return `${hours - 12}:${minutes} PM`;
      }
    };

    // Handle time ranges
    if (time.includes(' - ')) {
      const [start, end] = time.split(' - ');
      return `${convertTo12h(start)} - ${convertTo12h(end)}`;
    }

    return convertTo12h(time);
  }, [timeFormat]);

  useEffect(() => {
    // Sync with localStorage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'chronoweave_username' && e.newValue) {
        setUserNameState(e.newValue);
      }
      if (e.key === 'chronoweave_avatar' && e.newValue) {
        setUserAvatarState(e.newValue);
      }
      if (e.key === 'chronoweave_timeformat' && e.newValue) {
        setTimeFormatState(e.newValue as '12h' | '24h');
      }
      if (e.key === 'chronoweave_calibration_results' && e.newValue) {
        setCalibrationResultsState(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const getDashboardData = useCallback((): DashboardData => {
    // Calculate time perception score (0-100, higher = more stable)
    let stabilityScore = 70; // Default neutral score
    
    const { test1Time, test2Time, test3Correct } = calibrationResults;
    
    // Test 1: 10-second estimation (target: 10 seconds)
    if (test1Time !== undefined) {
      const diff1 = Math.abs(test1Time - 10);
      // Perfect = +10 points, 0-2s off = +5, 2-4s = 0, 4+ = -5
      if (diff1 < 1) stabilityScore += 10;
      else if (diff1 < 2) stabilityScore += 5;
      else if (diff1 < 4) stabilityScore += 0;
      else stabilityScore -= 5;
    }
    
    // Test 2: 30-second estimation (target: 30 seconds)
    if (test2Time !== undefined) {
      const diff2 = Math.abs(test2Time - 30);
      // Perfect (<2s) = +15, 2-5s = +8, 5-10s = 0, 10+ = -8
      if (diff2 < 2) stabilityScore += 15;
      else if (diff2 < 5) stabilityScore += 8;
      else if (diff2 < 10) stabilityScore += 0;
      else stabilityScore -= 8;
    }
    
    // Test 3: Rhythm perception
    if (test3Correct !== undefined) {
      stabilityScore += test3Correct ? 10 : -5;
    }
    
    // Clamp score between 0 and 100
    stabilityScore = Math.max(0, Math.min(100, stabilityScore));
    
    // Convert stability score to hours distribution
    // High stability (75-100): More stable hours, less drift
    // Medium stability (50-74): Balanced distribution
    // Low stability (0-49): Less stable hours, more drift
    
    let stableHours: number;
    let moderateHours: number;
    let fastDriftHours: number;
    
    if (stabilityScore >= 75) {
      // Strong time stability
      stableHours = 5 + Math.floor((stabilityScore - 75) / 10);
      moderateHours = 2;
      fastDriftHours = 1;
    } else if (stabilityScore >= 50) {
      // Moderate time stability
      stableHours = 4;
      moderateHours = 3;
      fastDriftHours = 2;
    } else {
      // Lower time stability (more drift)
      stableHours = 2;
      moderateHours = 4;
      fastDriftHours = 3;
    }
    
    // Generate forecast based on stability score
    const forecasts = [];
    
    if (stabilityScore >= 75) {
      // Strong stability: Most periods stable
      forecasts.push(
        { time: '9:00 - 12:00', period: 'Morning', status: 'Stable' as const, color: '#5eead4' },
        { time: '12:00 - 15:00', period: 'Midday', status: 'Stable' as const, color: '#5eead4' },
        { time: '15:00 - 18:00', period: 'Afternoon', status: 'Moderate' as const, color: '#c084fc' },
        { time: '18:00 - 21:00', period: 'Evening', status: 'Stable' as const, color: '#5eead4' }
      );
    } else if (stabilityScore >= 50) {
      // Moderate stability: Mixed periods
      forecasts.push(
        { time: '9:00 - 12:00', period: 'Morning', status: 'Stable' as const, color: '#5eead4' },
        { time: '12:00 - 15:00', period: 'Midday', status: 'Moderate' as const, color: '#c084fc' },
        { time: '15:00 - 18:00', period: 'Afternoon', status: 'Fast Drift' as const, color: '#f472b6' },
        { time: '18:00 - 21:00', period: 'Evening', status: 'Moderate' as const, color: '#c084fc' }
      );
    } else {
      // Lower stability: More drift periods
      forecasts.push(
        { time: '9:00 - 12:00', period: 'Morning', status: 'Moderate' as const, color: '#c084fc' },
        { time: '12:00 - 15:00', period: 'Midday', status: 'Fast Drift' as const, color: '#f472b6' },
        { time: '15:00 - 18:00', period: 'Afternoon', status: 'Fast Drift' as const, color: '#f472b6' },
        { time: '18:00 - 21:00', period: 'Evening', status: 'Moderate' as const, color: '#c084fc' }
      );
    }
    
    return {
      stableHours,
      moderateHours,
      fastDriftHours,
      forecast: forecasts,
    };
  }, [calibrationResults]);

  const getDriftMapData = useCallback((): DriftMapData => {
    // Historical analysis based on calibration results
    // This simulates aggregate data from past sessions
    
    let stabilityScore = 70; // Default neutral score
    
    const { test1Time, test2Time, test3Correct } = calibrationResults;
    
    // Test 1: 10-second estimation
    if (test1Time !== undefined) {
      const diff1 = Math.abs(test1Time - 10);
      if (diff1 < 1) stabilityScore += 10;
      else if (diff1 < 2) stabilityScore += 5;
      else if (diff1 < 4) stabilityScore += 0;
      else stabilityScore -= 5;
    }
    
    // Test 2: 30-second estimation
    if (test2Time !== undefined) {
      const diff2 = Math.abs(test2Time - 30);
      if (diff2 < 2) stabilityScore += 15;
      else if (diff2 < 5) stabilityScore += 8;
      else if (diff2 < 10) stabilityScore += 0;
      else stabilityScore -= 8;
    }
    
    // Test 3: Rhythm perception
    if (test3Correct !== undefined) {
      stabilityScore += test3Correct ? 10 : -5;
    }
    
    // Clamp score between 0 and 100
    stabilityScore = Math.max(0, Math.min(100, stabilityScore));
    
    // Calculate historical stability percentages for each time period
    // These represent "X% stable across past sessions"
    let morningStability: number;
    let afternoonStability: number;
    let eveningStability: number;
    
    if (stabilityScore >= 75) {
      // Strong overall stability: morning best, slight afternoon dip
      morningStability = Math.min(95, stabilityScore + Math.floor(Math.random() * 5));
      afternoonStability = Math.max(70, stabilityScore - 5 + Math.floor(Math.random() * 5));
      eveningStability = Math.max(75, stabilityScore - 3 + Math.floor(Math.random() * 5));
    } else if (stabilityScore >= 50) {
      // Moderate stability: more variation across periods
      morningStability = Math.min(85, stabilityScore + 10 + Math.floor(Math.random() * 5));
      afternoonStability = Math.max(60, stabilityScore - 5 + Math.floor(Math.random() * 5));
      eveningStability = Math.max(55, stabilityScore - 10 + Math.floor(Math.random() * 5));
    } else {
      // Lower stability: more drift in all periods
      morningStability = Math.min(75, stabilityScore + 15 + Math.floor(Math.random() * 5));
      afternoonStability = Math.max(50, stabilityScore + Math.floor(Math.random() * 5));
      eveningStability = Math.max(45, stabilityScore - 5 + Math.floor(Math.random() * 5));
    }
    
    // Generate historical pattern analysis
    const patterns = [
      {
        period: 'Morning',
        stability: morningStability,
        status: morningStability >= 80 ? 'Stable' : morningStability >= 60 ? 'Moderate' : 'Fast',
        description: morningStability >= 80 ? 'Time flows steadily' : morningStability >= 60 ? 'Time may speed up' : 'Time flies quickly'
      },
      {
        period: 'Afternoon',
        stability: afternoonStability,
        status: afternoonStability >= 80 ? 'Stable' : afternoonStability >= 60 ? 'Moderate' : 'Fast',
        description: afternoonStability >= 80 ? 'Time flows steadily' : afternoonStability >= 60 ? 'Time may speed up' : 'Time flies quickly'
      },
      {
        period: 'Evening',
        stability: eveningStability,
        status: eveningStability >= 80 ? 'Stable' : eveningStability >= 60 ? 'Moderate' : 'Fast',
        description: eveningStability >= 80 ? 'Time flows steadily' : eveningStability >= 60 ? 'Time may speed up' : 'Time flies quickly'
      }
    ];
    
    return {
      morningStability,
      afternoonStability,
      eveningStability,
      patterns
    };
  }, [calibrationResults]);

  const logout = useCallback(() => {
    setUserNameState(null);
    setUserAvatarState(null);
    setTimeFormatState('12h');
    setCalibrationResultsState({});
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('chronoweave_username');
        localStorage.removeItem('chronoweave_avatar');
        localStorage.removeItem('chronoweave_timeformat');
        localStorage.removeItem('chronoweave_calibration_results');
      }
    } catch {
      // localStorage not available
    }
  }, []);

  const value = useMemo(() => ({
    userName,
    setUserName,
    userAvatar,
    setUserAvatar,
    timeFormat,
    setTimeFormat,
    formatTime,
    calibrationResults,
    setCalibrationResults,
    getDashboardData,
    getDriftMapData,
    logout
  }), [userName, userAvatar, timeFormat, formatTime, calibrationResults, getDashboardData, getDriftMapData, logout]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}