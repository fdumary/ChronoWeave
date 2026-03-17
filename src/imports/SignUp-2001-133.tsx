import imgChatGptImageMar82026094521Pm1 from "figma:asset/e5a941d94a63350cd9819dd699b6bd17bbd0c54e.png";

function SignUp1() {
  return (
    <div className="absolute bg-[#d2ff72] h-[60px] left-[28px] rounded-[47104300px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[789px] w-[384px]" data-name="Sign up">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[191.84px] not-italic text-[#14296b] text-[18px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[14.39px] whitespace-nowrap">Sign Up</p>
    </div>
  );
}

function Login() {
  return (
    <div className="absolute bg-[#f8f6ff] border border-[#646161] border-solid h-[60px] left-[28px] rounded-[47104300px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[720px] w-[384px]" data-name="Login">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[191.34px] not-italic text-[#1d3da0] text-[18px] text-center top-[13.39px] whitespace-nowrap">Login</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute contents left-[28px] top-[720px]" data-name="Buttons">
      <SignUp1 />
      <Login />
    </div>
  );
}

function SubText() {
  return (
    <div className="absolute bg-[rgba(255,250,250,0)] content-stretch flex h-[27.989px] items-start left-[25px] top-[219px] w-[440px]" data-name="Sub text">
      <p className="font-['Poppins:Regular',sans-serif] leading-[28.827px] not-italic relative shrink-0 text-[20.591px] text-white w-[231px]">Let’s discover how it feels for you.</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[6px] px-[26.142px] top-[47px] w-[350.604px]" data-name="Heading 2">
      <p className="font-['Poppins:Regular',sans-serif] leading-[54.278px] not-italic relative shrink-0 text-[#d2ff72] text-[45.232px] w-full">Time feels different for everyone.</p>
    </div>
  );
}

export default function SignUp() {
  return (
    <div className="bg-[#1d3da0] relative size-full" data-name="Sign up">
      <div className="absolute h-[580px] left-[-33px] top-[514px] w-[597px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 597 580">
          <ellipse cx="298.5" cy="290" fill="url(#paint0_linear_2001_159)" id="Ellipse 1" rx="298.5" ry="290" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2001_159" x1="26.5" x2="396.885" y1="-390.5" y2="442.308">
              <stop stopColor="#2750D1" stopOpacity="0" />
              <stop offset="1" stopColor="#14296B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex h-[992.525px] items-center justify-center left-[-105px] top-[161px] w-[682.619px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[2.23deg]">
          <div className="h-[968.136px] relative w-[645.424px]" data-name="ChatGPT Image Mar 8, 2026, 09_45_21 PM 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageMar82026094521Pm1} />
          </div>
        </div>
      </div>
      <Buttons />
      <SubText />
      <Heading />
    </div>
  );
}