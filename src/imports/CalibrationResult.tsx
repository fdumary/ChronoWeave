function P() {
  return (
    <div className="absolute h-[29.61px] left-0 top-[16.9px] w-[318.05px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.601px] left-[159.14px] not-italic text-[19.03px] text-center text-white top-[-1.13px] whitespace-nowrap">Next Test</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#14296b] h-[63.415px] left-[61px] rounded-[44591412px] shadow-[0px_10.572px_15.857px_0px_rgba(0,0,0,0.1),0px_4.229px_6.344px_0px_rgba(0,0,0,0.1)] top-[637px] w-[318.05px]" data-name="button">
      <P />
    </div>
  );
}

function H() {
  return (
    <div className="absolute h-[68.149px] left-[50.17px] top-[212.05px] w-[318.05px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[36.526px] left-[159.42px] not-italic text-[#1d3da0] text-[30.439px] text-center top-[1.13px] w-[310.502px]">Time felt faster to you today</p>
    </div>
  );
}

function Span() {
  return (
    <div className="h-[32.23px] relative shrink-0 w-[128.717px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.218px] left-0 not-italic text-[#1d3da0] text-[20.711px] top-[-1.84px] whitespace-nowrap">Your estimate:</p>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="h-[36.798px] relative shrink-0 w-[51.411px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36.82px] not-italic relative shrink-0 text-[#9dda1a] text-[27.615px] whitespace-nowrap">2.1s</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[36.798px] items-center justify-between left-[27.61px] top-[27.61px] w-[306.296px]" data-name="Container">
      <Span />
      <Span1 />
    </div>
  );
}

function Span2() {
  return (
    <div className="h-[32.23px] relative shrink-0 w-[107.163px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.218px] left-0 not-italic text-[#1d3da0] text-[20.711px] top-[-1.84px] whitespace-nowrap">Target time:</p>
      </div>
    </div>
  );
}

function Span3() {
  return (
    <div className="h-[36.798px] relative shrink-0 w-[67.261px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36.82px] not-italic relative shrink-0 text-[#1d3da0] text-[27.615px] whitespace-nowrap">30.0s</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[36.798px] items-center justify-between left-[27.61px] top-[82.81px] w-[306.296px]" data-name="Container">
      <Span2 />
      <Span3 />
    </div>
  );
}

function Span4() {
  return (
    <div className="h-[32.23px] relative shrink-0 w-[97.976px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.218px] left-0 not-italic text-[#1d3da0] text-[20.711px] top-[-1.84px] whitespace-nowrap">Difference:</p>
      </div>
    </div>
  );
}

function Span5() {
  return (
    <div className="h-[36.798px] relative shrink-0 w-[67.286px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36.82px] not-italic relative shrink-0 text-[#7c8fcb] text-[27.615px] whitespace-nowrap">27.9s</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[47.6px] items-center justify-between left-[27.61px] pt-[1.615px] top-[138px] w-[306.296px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[1.615px] inset-0 pointer-events-none" />
      <Span4 />
      <Span5 />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute bg-white h-[213.216px] left-[34.08px] rounded-[27.615px] shadow-[0px_11.506px_17.259px_0px_rgba(0,0,0,0.1),0px_4.603px_6.904px_0px_rgba(0,0,0,0.1)] top-[calc(50%+0.11px)] w-[361.518px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return <div className="bg-[#1d3da0] flex-[1_0_0] h-[7.998px] min-h-px min-w-px rounded-[42097200px]" data-name="Container" />;
}

function Container6() {
  return <div className="bg-[#1d3da0] flex-[1_0_0] h-[7.998px] min-h-px min-w-px rounded-[42097200px]" data-name="Container" />;
}

function Container7() {
  return <div className="bg-[#e5e7eb] flex-[1_0_0] h-[7.998px] min-h-px min-w-px rounded-[42097200px]" data-name="Container" />;
}

function Container4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8.916px] h-[7.998px] items-center left-[calc(50%-1.05px)] top-[49px] w-[383.984px]" data-name="Container">
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

export default function CalibrationResult() {
  return (
    <div className="bg-white relative size-full" data-name="Calibration result">
      <Button />
      <H />
      <Container />
      <Container4 />
    </div>
  );
}