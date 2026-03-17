function Paragraph() {
  return <div className="absolute h-[24.589px] left-0 top-[45.11px] w-[391.359px]" data-name="Paragraph" />;
}

function Container1() {
  return (
    <div className="absolute h-[69.696px] left-0 top-[163.55px] w-[391.359px]" data-name="Container">
      <Paragraph />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[24.615px] left-[195.39px] not-italic text-[16.41px] text-black text-center top-[32.84px] w-[262px]">Pick a companion that represents your mood journey.</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[-0.61px] px-[17px] top-[145.39px] w-[391.359px]" data-name="Heading 2">
      <p className="font-['Poppins:Regular',sans-serif] leading-[38.585px] not-italic relative shrink-0 text-[#1d3da0] text-[32.154px] text-center w-[390.641px]">Choose your avatar</p>
    </div>
  );
}

function Button() {
  return <div className="absolute bg-[#b8a8d8] left-0 rounded-[48312100px] size-[73.228px] top-0" data-name="Button" />;
}

function Button1() {
  return <div className="absolute bg-[#b8e6d5] left-[89.63px] rounded-[48312100px] size-[73.228px] top-0" data-name="Button" />;
}

function Button2() {
  return <div className="absolute bg-[#89cff0] left-[179.26px] rounded-[48312100px] size-[73.228px] top-0" data-name="Button" />;
}

function Button3() {
  return <div className="absolute bg-[#ffb347] left-[268.89px] rounded-[48312100px] size-[73.25px] top-0" data-name="Button" />;
}

function Button4() {
  return <div className="absolute bg-[#ff8c69] left-0 rounded-[48312100px] size-[73.228px] top-[89.65px]" data-name="Button" />;
}

function Button5() {
  return <div className="absolute bg-[#fffacd] left-[89.63px] rounded-[48312100px] size-[73.228px] top-[89.65px]" data-name="Button" />;
}

function Button6() {
  return <div className="absolute bg-[#ffb6c1] left-[179.26px] rounded-[48312100px] size-[73.228px] top-[89.65px]" data-name="Button" />;
}

function Button7() {
  return <div className="absolute bg-[#98d8c8] left-[268.89px] rounded-[48312100px] size-[73.25px] top-[89.65px]" data-name="Button" />;
}

function Button8() {
  return <div className="absolute bg-[#ccf] left-0 rounded-[48312100px] size-[73.228px] top-[179.3px]" data-name="Button" />;
}

function Button9() {
  return <div className="absolute bg-[#dda0dd] left-[89.63px] rounded-[48312100px] size-[73.228px] top-[179.3px]" data-name="Button" />;
}

function Button10() {
  return <div className="absolute bg-[#7fdbff] left-[179.26px] rounded-[48312100px] size-[73.228px] top-[179.3px]" data-name="Button" />;
}

function Button11() {
  return <div className="absolute bg-[#ffcba4] left-[268.89px] rounded-[48312100px] size-[73.25px] top-[179.3px]" data-name="Button" />;
}

function Container3() {
  return (
    <div className="h-[252.552px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#1d3da0] content-stretch flex flex-col h-[301.776px] items-start left-0 pt-[24.612px] px-[24.612px] rounded-[24.615px] top-[266.04px] w-[391.359px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-[#d1d5dc] h-[61.53px] left-0 rounded-[48312100px] shadow-[0px_10.256px_15.385px_0px_rgba(0,0,0,0.1),0px_4.103px_6.154px_0px_rgba(0,0,0,0.1)] top-[600.62px] w-[391.359px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[28.718px] left-[196.04px] not-italic text-[#6a7282] text-[18.462px] text-center top-[14.76px] whitespace-nowrap">Continue</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute h-[49.201px] left-0 top-[694.95px] w-[391.359px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[24.615px] left-[196.11px] not-italic text-[16.41px] text-black text-center top-[10.67px] whitespace-nowrap">Skip for now</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[907.7px] left-[24.61px] top-[24.61px] w-[391.359px]" data-name="Container">
      <Container1 />
      <Heading />
      <Container2 />
      <Button12 />
      <Button13 />
    </div>
  );
}

export default function Avatar() {
  return (
    <div className="bg-white relative size-full" data-name="Avatar">
      <Container />
    </div>
  );
}