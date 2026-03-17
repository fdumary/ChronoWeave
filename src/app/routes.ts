import { createBrowserRouter } from "react-router";
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

export const router = createBrowserRouter(
  [
    { path: "/", Component: AnimatedIntro },
    { path: "/landing", Component: Landing },
    { path: "/login", Component: LogIn },
    { path: "/signup", Component: SignUp },
    { path: "/dashboard", Component: TodayDashboard },
    { path: "/drift-map", Component: DriftMap },
    { path: "/live-nudge", Component: LiveNudge },
    { path: "/insights", Component: WeeklyInsight },
    { path: "/profile", Component: Profile },
    { path: "/avatar-selection", Component: AvatarSelection },
    { path: "/calibration-welcome", Component: CalibrationWelcome },
    { path: "/calibration-1", Component: CalibrationWelcome },
    { path: "/calibration-test-1", Component: CalibrationTest1 },
    { path: "/calibration-step-2", Component: CalibrationTest1 },
    { path: "/calibration-step-3", Component: CalibrationStep3 },
    { path: "/calibration-step-4", Component: CalibrationStep4 },
    { path: "/calibration-step-5", Component: CalibrationStep5 },
    { path: "/time-feeling", Component: TimeFeelingSelection },
    { path: "*", Component: NotFound },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }
  }
);