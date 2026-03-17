function Container() {
  return <div className="bg-[#1d3da0] flex-[1_0_0] h-[7.998px] min-h-px min-w-px rounded-[42097200px]" data-name="Container" />;
}

function Container1() {
  return <div className="bg-[#1d3da0] flex-[1_0_0] h-[7.998px] min-h-px min-w-px rounded-[42097200px]" data-name="Container" />;
}

function Container2() {
  return <div className="bg-[#1d3da0] flex-[1_0_0] h-[7.998px] min-h-px min-w-px rounded-[42097200px]" data-name="Container" />;
}

function ProgressBar() {
  return (
    <div className="absolute content-stretch flex gap-[7.998px] h-[7.998px] items-center left-[28px] top-[49px] w-[383.984px]" data-name="progress bar">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function TapNow() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#1d3da0] h-[59.985px] left-[calc(50%+5.33px)] rounded-[42097200px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] top-[601px] w-[178.662px]" data-name="Tap now">
      <p className="-translate-x-1/2 absolute font-['Segoe_UI_Emoji:Bold',sans-serif] leading-[28px] left-[88.99px] not-italic text-[20px] text-center text-white top-[13px] whitespace-nowrap">Tap Now</p>
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[#253f8f] left-[136px] rounded-[73661736px] size-[167.974px] top-[394px]" data-name="Container" />;
}

function Container4() {
  return <div className="absolute bg-[#d2ff72] left-[150px] rounded-[73661736px] size-[139.984px] top-[407.99px]" data-name="Container" />;
}

function TheCircleAnimation() {
  return (
    <div className="absolute contents left-[136px] top-[394px]" data-name="The circle animation">
      <Container3 />
      <Container4 />
    </div>
  );
}

function H() {
  return (
    <div className="absolute h-[35.991px] left-[28px] top-[145px] w-[383.984px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[38.585px] left-[192.47px] not-italic text-[#1d3da0] text-[32.154px] text-center top-[-3.51px] whitespace-nowrap">Second Calibration</p>
    </div>
  );
}

export default function SecondCalibration() {
  return (
    <div className="bg-white relative size-full" data-name="Second Calibration">
      <ProgressBar />
      <TapNow />
      <TheCircleAnimation />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[218px] not-italic text-[#0a0a0a] text-[23px] text-center top-[207px] w-[266px]">Tap when you think 30 seconds have passed</p>
      <H />
    </div>
  );
}