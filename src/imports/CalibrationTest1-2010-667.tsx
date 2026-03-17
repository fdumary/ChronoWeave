function Container1() {
  return <div className="bg-[#1d3da0] flex-[1_0_0] h-[7.998px] min-h-px min-w-px rounded-[42097200px]" data-name="Container" />;
}

function Container2() {
  return <div className="bg-[#1d3da0] flex-[1_0_0] h-[7.998px] min-h-px min-w-px rounded-[42097200px]" data-name="Container" />;
}

function Container3() {
  return <div className="bg-[#e5e7eb] flex-[1_0_0] h-[7.998px] min-h-px min-w-px rounded-[42097200px]" data-name="Container" />;
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8.916px] h-[7.998px] items-center left-[calc(50%-0.01px)] top-[49px] w-[383.984px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function P() {
  return (
    <div className="absolute h-[55.986px] left-0 top-[-9.99px] w-[383.984px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[192px] not-italic text-[#0a0a0a] text-[23px] text-center top-[-1.75px] w-[374px]">Hold the button and release when you think 10 seconds have passed</p>
    </div>
  );
}

function H() {
  return (
    <div className="absolute h-[35.991px] left-[36px] top-[227.99px] w-[383.984px]" data-name="h2">
      <P />
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#14296b] left-[calc(50%+2.03px)] rounded-[44715484px] shadow-[0px_26.555px_53.11px_0px_rgba(0,0,0,0.25)] size-[203.933px] top-[calc(50%+47.97px)]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Segoe_UI_Emoji:Bold',sans-serif] leading-[29.741px] left-[102.44px] not-italic text-[21.244px] text-center text-white top-[83.91px] whitespace-nowrap">Hold Me</p>
    </div>
  );
}

function GrammarlyDesktopIntegration() {
  return <div className="absolute left-0 size-0 top-[956px]" data-name="Grammarly-desktop-integration" />;
}

export default function CalibrationTest() {
  return (
    <div className="bg-white relative size-full" data-name="Calibration test 1">
      <Container />
      <H />
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[38.585px] left-[220.5px] not-italic text-[#1d3da0] text-[32.154px] text-center top-[148px] whitespace-nowrap">Calibration Test</p>
      <Button />
      <GrammarlyDesktopIntegration />
    </div>
  );
}