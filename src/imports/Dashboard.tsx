import svgPaths from "./svg-1uuotg0qrn";

function UpperNavigation() {
  return <div className="absolute bg-[#1d3da0] h-[145px] left-0 rounded-bl-[22.335px] rounded-br-[22.335px] top-0 w-[441px]" data-name="upper navigation" />;
}

function P() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[24px] top-[139px] w-[126px]" data-name="p">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[17.868px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[13.401px]">Saturday, March 7</p>
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[21.488px]" data-name="Bell">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4881 21.4881">
        <g id="Bell">
          <path d={svgPaths.p336de680} id="Vector" stroke="var(--stroke-0, #1D3DA0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.79068" />
          <path d={svgPaths.p1a079e00} id="Vector_2" stroke="var(--stroke-0, #1D3DA0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.79068" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#e0f5ff] relative rounded-[50653544px] shrink-0 size-[47.293px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Bell />
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex h-[21.488px] items-start relative shrink-0 w-full" data-name="h3">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.507px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[15.055px]">Rhythm Cues</p>
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex h-[17.195px] items-start relative shrink-0 w-full" data-name="p">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17.206px] not-italic relative shrink-0 text-[#0a0a0a] text-[12.904px] whitespace-nowrap">Gentle time awareness</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[38.683px] relative shrink-0 w-[128.174px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <H />
        <P1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[47.293px] relative shrink-0 w-[184.052px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8.586px] items-center relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Div() {
  return <div className="bg-white h-[25.808px] rounded-[50653544px] shadow-[0px_4.301px_6.452px_0px_rgba(0,0,0,0.1),0px_2.151px_4.301px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="div" />;
}

function Button() {
  return (
    <div className="bg-[#d1d5dc] h-[34.39px] relative rounded-[50653544px] shrink-0 w-[60.219px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4.301px] pr-[30.113px] pt-[4.293px] relative size-full">
        <Div />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[47.293px] items-center justify-between left-[17.2px] top-[17.2px] w-[372.61px]" data-name="Container">
      <Container2 />
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[81.683px] left-[calc(50%-0.5px)] rounded-[25.808px] shadow-[0px_10.753px_16.13px_0px_rgba(0,0,0,0.1),0px_4.301px_6.452px_0px_rgba(0,0,0,0.1)] top-[230px] w-[407px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Clock() {
  return (
    <div className="absolute left-0 size-[16.422px] top-[2.05px]" data-name="Clock">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4219 16.4219">
        <g id="Clock">
          <path d={svgPaths.p56b7e00} id="Vector" stroke="var(--stroke-0, #1B1D21)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.36849" />
          <path d={svgPaths.p131bbb00} id="Vector_2" stroke="var(--stroke-0, #1B1D21)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.36849" />
        </g>
      </svg>
    </div>
  );
}

function H1() {
  return (
    <div className="absolute h-[20.522px] left-0 top-0 w-[388.697px]" data-name="h3">
      <Clock />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.54px] left-[24.62px] not-italic text-[#1b1d21] text-[14.378px] top-[-1.03px] whitespace-nowrap">Time Stability Forecast</p>
    </div>
  );
}

function P2() {
  return (
    <div className="content-stretch flex h-[16.422px] items-start relative shrink-0 w-full" data-name="p">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16.432px] not-italic relative shrink-0 text-[#11141e] text-[14.714px] whitespace-nowrap">9:00 AM - 12:00 PM</p>
    </div>
  );
}

function P3() {
  return (
    <div className="content-stretch flex h-[20.522px] items-start relative shrink-0 w-full" data-name="p">
      <p className="flex-[1_0_0] font-['Poppins:Bold',sans-serif] leading-[16.432px] min-h-px min-w-px not-italic relative text-[#050605] text-[14.714px]">Morning</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[41.044px] relative shrink-0 w-[107.182px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.1px] items-start relative size-full">
        <P2 />
        <P3 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#9dda1a] h-[32.821px] relative rounded-[48375588px] shrink-0 w-[112.949px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Poppins:Bold',sans-serif] leading-[16.432px] left-[56.79px] not-italic text-[12.324px] text-center text-white top-[8.2px] whitespace-nowrap">Stable</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[41.044px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[65.688px] relative rounded-[16.432px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[16.432px] shadow-[0px_1.027px_2.054px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pt-[12.322px] px-[12.322px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function P4() {
  return (
    <div className="content-stretch flex h-[16.422px] items-start relative shrink-0 w-full" data-name="p">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16.432px] not-italic relative shrink-0 text-[#11141e] text-[14.714px] whitespace-nowrap">12:00 PM - 3:00 PM</p>
    </div>
  );
}

function P5() {
  return (
    <div className="content-stretch flex h-[20.522px] items-start relative shrink-0 w-full" data-name="p">
      <p className="flex-[1_0_0] font-['Poppins:Bold',sans-serif] leading-[16.432px] min-h-px min-w-px not-italic relative text-[#050b1f] text-[14.714px]">Midday</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[41.044px] relative shrink-0 w-[106.123px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.1px] items-start relative size-full">
        <P4 />
        <P5 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#6b4c9a] h-[32.821px] relative rounded-[48375588px] shrink-0 w-[112.949px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Poppins:Bold',sans-serif] leading-[16.432px] left-[57.31px] not-italic text-[12.324px] text-center text-white top-[8.2px] whitespace-nowrap">Moderate</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[41.044px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white h-[65.688px] relative rounded-[16.432px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[16.432px] shadow-[0px_1.027px_2.054px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pt-[12.322px] px-[12.322px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function P6() {
  return (
    <div className="content-stretch flex h-[16.422px] items-start relative shrink-0 w-full" data-name="p">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16.432px] not-italic relative shrink-0 text-[#11141e] text-[14.714px] whitespace-nowrap">3:00 PM - 6:00 PM</p>
    </div>
  );
}

function P7() {
  return (
    <div className="content-stretch flex h-[20.522px] items-start relative shrink-0 w-full" data-name="p">
      <p className="flex-[1_0_0] font-['Poppins:Bold',sans-serif] leading-[16.432px] min-h-px min-w-px not-italic relative text-[#050605] text-[14.714px]">Afternoon</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[41.044px] relative shrink-0 w-[99.478px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.1px] items-start relative size-full">
        <P6 />
        <P7 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#d6001d] h-[32.821px] relative rounded-[48375588px] shrink-0 w-[112.949px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Poppins:Bold',sans-serif] leading-[16.432px] left-[56.55px] not-italic text-[12.324px] text-center text-white top-[8.2px] whitespace-nowrap">Fast Drift</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[41.044px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white h-[65.688px] relative rounded-[16.432px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[16.432px] shadow-[0px_1.027px_2.054px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pt-[12.322px] px-[12.322px] relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function P8() {
  return (
    <div className="content-stretch flex h-[16.422px] items-start relative shrink-0 w-full" data-name="p">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16.432px] not-italic relative shrink-0 text-[#11141e] text-[14.714px] whitespace-nowrap">6:00 PM - 9:00 PM</p>
    </div>
  );
}

function P9() {
  return (
    <div className="content-stretch flex h-[20.522px] items-start relative shrink-0 w-full" data-name="p">
      <p className="flex-[1_0_0] font-['Poppins:Bold',sans-serif] leading-[16.432px] min-h-px min-w-px not-italic relative text-[#050605] text-[14.714px]">Evening</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[41.044px] relative shrink-0 w-[99.478px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.1px] items-start relative size-full">
        <P8 />
        <P9 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#9ad912] h-[32.821px] relative rounded-[48375588px] shrink-0 w-[112.949px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Poppins:Bold',sans-serif] leading-[16.432px] left-[57.01px] not-italic text-[12.324px] text-center text-white top-[8.2px] whitespace-nowrap">Stable</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[41.044px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white h-[65.688px] relative rounded-[16.432px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[16.432px] shadow-[0px_1.027px_2.054px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pt-[12.322px] px-[12.322px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8.2px] h-[287.35px] items-start left-0 top-[28.72px] w-[388.697px]" data-name="Container">
      <Container7 />
      <Container11 />
      <Container15 />
      <Container19 />
    </div>
  );
}

function Container5() {
  return (
    <div className="-translate-x-1/2 absolute h-[316.35px] left-[calc(50%+0.5px)] top-[353px] w-[389px]" data-name="Container">
      <H1 />
      <Container6 />
    </div>
  );
}

function Button1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#1d3da0] h-[49px] left-[calc(50%+0.5px)] rounded-[52603788px] shadow-[0px_11.168px_16.751px_0px_rgba(0,0,0,0.1),0px_4.467px_6.701px_0px_rgba(0,0,0,0.1)] top-[694px] w-[243px]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.335px] left-[122px] not-italic text-[15.635px] text-center text-white top-[13px] whitespace-nowrap">Weekly Insights</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#d2ff72] h-[49px] left-[99px] rounded-[52603788px] shadow-[0px_11.168px_16.751px_0px_rgba(0,0,0,0.1),0px_4.467px_6.701px_0px_rgba(0,0,0,0.1)] top-[767px] w-[243px]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.335px] left-[121.5px] not-italic text-[#1d3da0] text-[15.635px] text-center top-[13px] whitespace-nowrap">See Example Nudge</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[23.088px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.0876 23.0876">
        <g id="Icon">
          <path d={svgPaths.p1ba3e500} id="Vector" stroke="var(--stroke-0, #D2FF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.92397" />
          <path d={svgPaths.pfd8e500} id="Vector_2" stroke="var(--stroke-0, #D2FF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.92397" />
        </g>
      </svg>
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute bg-[#99e100] content-stretch flex items-center justify-center left-[4.91px] rounded-[15.394px] shadow-[0px_3.848px_5.773px_0px_rgba(0,0,0,0.1),0px_1.924px_3.848px_0px_rgba(0,0,0,0.1)] size-[46.175px] top-0" data-name="div">
      <Icon />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[62.031px] left-[7.53px] top-[9.51px] w-[56px]" data-name="button">
      <Div2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[19.2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 19.2">
        <g id="Icon">
          <path d={svgPaths.p3110c800} id="Vector" stroke="var(--stroke-0, #1D3DA0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M12.0001 4.61113V16.6111" id="Vector_2" stroke="var(--stroke-0, #1D3DA0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d="M7.20015 2.58876V14.5888" id="Vector_3" stroke="var(--stroke-0, #1D3DA0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex items-center justify-center left-[4.8px] rounded-[12.802px] size-[38.4px] top-0" data-name="div">
      <Icon1 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[38.4px] left-[88.53px] top-[14.51px] w-[48px]" data-name="button">
      <Div3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[19.6px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6 19.6">
        <g id="Icon">
          <path d={svgPaths.p18580200} id="Vector" stroke="var(--stroke-0, #1D3DA0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.63333" />
        </g>
      </svg>
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex items-center justify-center left-[4.9px] rounded-[13.069px] size-[39.2px] top-0" data-name="div">
      <Icon2 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[55.521px] left-[175.53px] top-[13.51px] w-[49px]" data-name="button">
      <Div4 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.622px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6216 19.6216">
        <g id="Icon">
          <path d={svgPaths.p1a84a300} id="Vector" stroke="var(--stroke-0, #1D3DA0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.63513" />
          <path d={svgPaths.p39570400} id="Vector_2" stroke="var(--stroke-0, #1D3DA0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.63513" />
        </g>
      </svg>
    </div>
  );
}

function Div5() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex items-center justify-center left-[6px] rounded-[13.083px] size-[39.243px] top-[3px]" data-name="div">
      <Icon3 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[65.23px] left-[255.53px] top-[11.51px] w-[57.568px]" data-name="button">
      <Div5 />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute h-[97.336px] left-[22.47px] top-0 w-[372.536px]" data-name="div">
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-[#1d3da0] border-[#0a0a0a] border-solid border-t-[1.486px] h-[72px] left-[48px] rounded-[47.384px] shadow-[0px_10.583px_15.875px_0px_rgba(0,0,0,0.1),0px_4.233px_6.35px_0px_rgba(0,0,0,0.1)] top-[860px] w-[353px]" data-name="nav">
      <Div1 />
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="relative size-full" data-name="Dashboard">
      <UpperNavigation />
      <div className="absolute bg-white h-[883px] left-0 rounded-tl-[50px] rounded-tr-[50px] shadow-[0px_-4px_15px_0px_rgba(0,0,0,0.25)] top-[84px] w-[441px]" />
      <P />
      <p className="absolute font-['Poppins:Bold',sans-serif] h-[46.985px] leading-[42.319px] left-[24px] not-italic text-[#0a0a0a] text-[31.739px] top-[170px] w-[373px]">{`Today's Time Rhythm`}</p>
      <Container />
      <Container5 />
      <Button1 />
      <Button2 />
      <Nav />
    </div>
  );
}