function Paragraph() {
  return (
    <div className="h-[24.591px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[24.615px] left-[195.89px] not-italic text-[16.41px] text-black text-center top-[-1.64px] whitespace-nowrap">Continue your time journey</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[69.702px] items-start left-[0.39px] top-[195.39px] w-[391.391px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[36.921px] left-[5.39px] top-[135.39px] w-[391.391px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[38.585px] left-[195.17px] not-italic text-[#1d3da0] text-[32.154px] text-center top-[-2.88px] whitespace-nowrap">Welcome back</p>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[20.159px] items-start left-0 top-[2.88px] w-[35.143px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.513px] not-italic relative shrink-0 text-[14.359px] text-white whitespace-nowrap">Email</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute bg-white h-[52.085px] left-0 rounded-[14.359px] top-[24.59px] w-[342.163px]" data-name="Email Input">
      <div className="content-stretch flex items-center overflow-clip px-[16.41px] py-[12.308px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16.412px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">your@email.com</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ccf] border-[1.44px] border-solid inset-0 pointer-events-none rounded-[14.359px]" />
    </div>
  );
}

function EmailInput1() {
  return (
    <div className="absolute bg-white h-[52.085px] left-[0.39px] rounded-[14.359px] top-[24.39px] w-[342.163px]" data-name="Email Input">
      <div className="content-stretch flex items-center overflow-clip px-[16.41px] py-[12.308px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16.412px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">your@email.com</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ccf] border-[1.44px] border-solid inset-0 pointer-events-none rounded-[14.359px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[76.676px] left-[24.61px] top-[24.61px] w-[342.163px]" data-name="Container">
      <Label />
      <EmailInput />
      <EmailInput1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex h-[20.159px] items-start left-0 top-[2.88px] w-[61.084px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.513px] not-italic relative shrink-0 text-[14.359px] text-white whitespace-nowrap">Password</p>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="absolute bg-white h-[52.085px] left-0 rounded-[14.36px] top-[24.59px] w-[342.163px]" data-name="Password Input">
      <div className="content-stretch flex items-center overflow-clip px-[16.412px] py-[12.309px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16.412px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">••••••••</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d4e8f3] border-[1.44px] border-solid inset-0 pointer-events-none rounded-[14.36px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[76.676px] left-[24.61px] top-[117.69px] w-[342.163px]" data-name="Container">
      <Label1 />
      <PasswordInput />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex h-[20.496px] items-start left-[24.61px] top-[213.65px] w-[114.767px]" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.514px] not-italic relative shrink-0 text-[#1d3da0] text-[14.36px] text-center whitespace-nowrap">Forgot Password?</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#1d3da0] h-[259.975px] left-0 rounded-[16.412px] top-0 w-[391.391px]" data-name="Container">
      <Container3 />
      <Container4 />
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#14296b] h-[61.534px] left-0 rounded-[48315984px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.08)] top-[276.38px] w-[391.391px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28.72px] left-[196.98px] not-italic text-[18.463px] text-center text-white top-[14.76px] whitespace-nowrap">Log In</p>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[337.911px] left-[0.39px] top-[265.39px] w-[391.391px]" data-name="Form">
      <Container2 />
      <Button1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[24.591px] left-[270.39px] top-[0.19px] w-[58.61px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[24.615px] left-[29.97px] not-italic text-[16.41px] text-black text-center top-[-1.64px] whitespace-nowrap">Sign Up</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24.591px] left-[-12.61px] top-[654.39px] w-[391.391px]" data-name="Paragraph">
      <Button2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[907.772px] left-[24.61px] top-[24.61px] w-[391.391px]" data-name="Container">
      <Container1 />
      <Heading />
      <Form />
      <Paragraph1 />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[24.615px] left-[154.39px] not-italic text-[16.41px] text-black text-center top-[653.39px] whitespace-nowrap">{`Don't have an account? `}</p>
    </div>
  );
}

function Heading1() {
  return <div className="absolute h-[50px] left-0 top-[130px] w-[391.359px]" data-name="Heading 2" />;
}

export default function ChronoWeave() {
  return (
    <div className="bg-white relative size-full" data-name="ChronoWeave">
      <Container />
      <Heading1 />
    </div>
  );
}