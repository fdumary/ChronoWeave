import svgPaths from "./svg-h6kxc4b9i9";

function Container1() {
  return <div className="bg-[#1d3da0] flex-[1_0_0] h-[8.916px] min-h-px min-w-px rounded-[52603788px]" data-name="Container" />;
}

function Container2() {
  return <div className="bg-[#1d3da0] flex-[1_0_0] h-[8.916px] min-h-px min-w-px rounded-[52603788px]" data-name="Container" />;
}

function Container3() {
  return <div className="bg-[#1d3da0] flex-[1_0_0] h-[8.916px] min-h-px min-w-px rounded-[52603788px]" data-name="Container" />;
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[8.916px] h-[8.916px] items-center left-[27px] top-[44.66px] w-[386.932px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function P() {
  return <div className="absolute h-[31.281px] left-0 top-0 w-[386.932px]" data-name="p" />;
}

function H() {
  return (
    <div className="-translate-x-1/2 absolute h-[40.197px] left-[calc(50%-3.53px)] top-[148px] w-[386.932px]" data-name="h2">
      <P />
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[38.585px] left-[193.7px] not-italic text-[#1d3da0] text-[32.154px] text-center top-[-3.19px] whitespace-nowrap">Second Calibration</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#14296b] h-[66.971px] left-[117px] rounded-[52603788px] shadow-[0px_27.919px_55.838px_0px_rgba(0,0,0,0.25)] top-[530px] w-[205.91px]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[31.269px] left-[103.13px] not-italic text-[22.335px] text-center text-white top-[15.62px] whitespace-nowrap">Start Test</p>
    </div>
  );
}

export default function SecondCalibrationStartButton() {
  return (
    <div className="bg-white relative size-full" data-name="Second Calibration- start button">
      <Container />
      <H />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[216px] not-italic text-[#0a0a0a] text-[23px] text-center top-[212px] whitespace-nowrap">Ready for a longer test?</p>
      <Button />
      <div className="absolute h-[283px] left-[-26px] top-[689px] w-[491px]">
        <div className="absolute inset-[-69.26%_-39.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 883.007 675.011">
            <g filter="url(#filter0_f_2012_73)" id="Vector 1">
              <path d={svgPaths.pc4ecc80} stroke="var(--stroke-0, #89CFF0)" strokeLinecap="round" strokeWidth="102" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="675.011" id="filter0_f_2012_73" width="883.007" x="-7.62939e-06" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2012_73" stdDeviation="72.5" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}