function Container2() {
  return <div className="bg-[#1d3da0] flex-[1_0_0] h-[7.998px] min-h-px min-w-px rounded-[42097200px]" data-name="Container" />;
}

function Container3() {
  return <div className="bg-[#1d3da0] flex-[1_0_0] h-[7.998px] min-h-px min-w-px rounded-[42097200px]" data-name="Container" />;
}

function Container4() {
  return <div className="bg-[#e5e7eb] flex-[1_0_0] h-[7.998px] min-h-px min-w-px rounded-[42097200px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[8.916px] h-[7.998px] items-center left-0 top-[16px] w-[383.984px]" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function H() {
  return (
    <div className="h-[35.991px] relative shrink-0 w-full" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[36px] left-[192.72px] not-italic text-[#1d3da0] text-[30px] text-center top-[-3.51px] whitespace-nowrap">Calibration Test</p>
    </div>
  );
}

function P() {
  return (
    <div className="h-[55.986px] relative shrink-0 w-full" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[192px] not-italic text-[#1d3da0] text-[18px] text-center top-[-1.75px] w-[374px]">Hold the button and release when you think 10 seconds have passed</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.998px] h-[147.964px] items-start left-0 pt-[47.988px] top-[135.97px] w-[383.984px]" data-name="Container">
      <H />
      <P />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#14296b] relative rounded-[42097200px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] shrink-0 size-[191.992px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Segoe_UI_Emoji:Bold',sans-serif] leading-[28px] left-[96.44px] not-italic text-[20px] text-center text-white top-[79px] whitespace-nowrap">Hold Me</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex h-[592.09px] items-center justify-center left-0 top-[315.92px] w-[383.984px]" data-name="Container">
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[383.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container1 />
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[956px] items-start left-0 pl-[28.189px] py-[23.994px] top-0 w-[440.362px]" data-name="div">
      <Container />
    </div>
  );
}

function GrammarlyDesktopIntegration() {
  return <div className="absolute left-0 size-0 top-[956px]" data-name="Grammarly-desktop-integration" />;
}

export default function CalibrationTest() {
  return (
    <div className="bg-white relative size-full" data-name="Calibration test 1">
      <Div />
      <GrammarlyDesktopIntegration />
    </div>
  );
}