import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import { UserProvider } from "./contexts/UserContext";
import { IPhoneMockup } from "./components/IPhoneMockup";
import { AnimatedIntro } from "./screens/AnimatedIntro";
import { Landing } from "./screens/Landing";
import { LogIn } from "./screens/LogIn";
import { SignUp } from "./screens/SignUp";
import { TodayDashboard } from "./screens/TodayDashboard";
import { DriftMap } from "./screens/DriftMap";
import { LiveNudge } from "./screens/LiveNudge";
import { WeeklyInsight } from "./screens/WeeklyInsight";
import { Profile } from "./screens/Profile";
import { AvatarSelection } from "./screens/AvatarSelection";
import { CalibrationWelcome } from "./screens/CalibrationWelcome";
import { CalibrationTest1 } from "./screens/CalibrationTest1";
import { CalibrationStep3 } from "./screens/CalibrationStep3";
import { CalibrationStep4 } from "./screens/CalibrationStep4";
import { CalibrationStep5 } from "./screens/CalibrationStep5";
import { TimeFeelingSelection } from "./screens/TimeFeelingSelection";
import { NotFound } from "./screens/NotFound";
import { useEffect } from "react";

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Press 'R' to restart the prototype from the beginning
      if (event.key === 'r' || event.key === 'R') {
        console.log('Restarting prototype...');
        navigate('/');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);

  return (
    <IPhoneMockup>
      <Routes>
        <Route path="/" element={<AnimatedIntro />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<TodayDashboard />} />
        <Route path="/drift-map" element={<DriftMap />} />
        <Route path="/live-nudge" element={<LiveNudge />} />
        <Route path="/insights" element={<WeeklyInsight />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/avatar-selection" element={<AvatarSelection />} />
        <Route path="/calibration-welcome" element={<CalibrationWelcome />} />
        <Route path="/calibration-1" element={<CalibrationWelcome />} />
        <Route path="/calibration-test-1" element={<CalibrationTest1 />} />
        <Route path="/calibration-step-2" element={<CalibrationTest1 />} />
        <Route path="/calibration-step-3" element={<CalibrationStep3 />} />
        <Route path="/calibration-step-4" element={<CalibrationStep4 />} />
        <Route path="/calibration-step-5" element={<CalibrationStep5 />} />
        <Route path="/time-feeling" element={<TimeFeelingSelection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </IPhoneMockup>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </BrowserRouter>
  );
}