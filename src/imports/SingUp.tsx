function Heading() {
  return (
    <div className="absolute h-[50px] left-0 top-[130px] w-[391.359px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[38.585px] left-[194.91px] not-italic text-[#1d3da0] text-[32.154px] text-center top-[-2.88px] whitespace-nowrap">Create your account</p>
    </div>
  );
}

function Container1() {
  return <div className="absolute h-[25px] left-0 top-[167.24px] w-[341px]" data-name="Container" />;
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[20.157px] items-start left-0 top-[2.88px] w-[38.852px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.513px] not-italic relative shrink-0 text-[14.359px] text-white whitespace-nowrap">Name</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[52.081px] left-0 rounded-[14.359px] top-[24.59px] w-[342.136px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[16.41px] py-[12.308px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16.41px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Your name</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ccf] border-[1.44px] border-solid inset-0 pointer-events-none rounded-[14.359px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[76.67px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex h-[20.157px] items-start left-0 top-[2.88px] w-[35.14px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.513px] not-italic relative shrink-0 text-[14.359px] text-white whitespace-nowrap">Email</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute bg-white h-[52.081px] left-0 rounded-[14.359px] top-[24.59px] w-[342.136px]" data-name="Email Input">
      <div className="content-stretch flex items-center overflow-clip px-[16.41px] py-[12.308px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16.41px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">your@email.com</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ccf] border-[1.44px] border-solid inset-0 pointer-events-none rounded-[14.359px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[76.67px] relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <EmailInput />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute content-stretch flex h-[20.157px] items-start left-0 top-[2.88px] w-[61.08px]" data-name="Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.513px] not-italic relative shrink-0 text-[14.359px] text-white whitespace-nowrap">Password</p>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="absolute bg-white h-[52.081px] left-0 rounded-[14.359px] top-[24.59px] w-[342.136px]" data-name="Password Input">
      <div className="content-stretch flex items-center overflow-clip px-[16.41px] py-[12.308px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16.41px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">••••••••</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ccf] border-[1.44px] border-solid inset-0 pointer-events-none rounded-[14.359px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[76.67px] relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <PasswordInput />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#1d3da0] h-[312.035px] relative rounded-[16.41px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16.4px] items-start pt-[24.612px] px-[24.612px] relative size-full">
        <Container3 />
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#14296b] h-[61.53px] relative rounded-[48315984px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28.718px] left-[195.52px] not-italic text-[18.462px] text-center text-white top-[14.76px] whitespace-nowrap">Create Account</p>
    </div>
  );
}

function Form() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16.4px] h-[389.964px] items-start left-1/2 top-[254px] w-[391.359px]" data-name="Form">
      <Container2 />
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="-translate-x-1/2 absolute bg-white border-[#14296b] border-[1.44px] border-solid h-[60.27px] left-1/2 rounded-[48312100px] shadow-[0px_4.103px_6.154px_0px_rgba(0,0,0,0.1),0px_2.051px_4.103px_0px_rgba(0,0,0,0.1)] top-[705.6px] w-[391.359px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24.615px] left-[193.76px] not-italic text-[#1d3da0] text-[16.41px] text-center top-[14.76px] whitespace-nowrap">Continue with Google</p>
    </div>
  );
}

function Button2() {
  return <div className="absolute h-[24.589px] left-[266.88px] top-0 w-[46.569px]" data-name="Button" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[24.589px] left-0 top-[798.67px] w-[391.359px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[24.615px] left-[172.76px] not-italic text-[16.41px] text-black text-center top-[-1.64px] whitespace-nowrap">{`Already have an account? `}</p>
      <Button2 />
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[24.615px] left-[312.5px] not-italic text-[16.41px] text-black text-center top-[-1.67px] whitespace-nowrap">Log In</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[907.7px] left-[24px] top-[24px] w-[391.359px]" data-name="Container">
      <Heading />
      <Container1 />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[24.615px] left-[196.5px] not-italic text-[16.41px] text-black text-center top-[192px] whitespace-nowrap">Start understanding your time perception</p>
      <Form />
      <Button1 />
      <Paragraph />
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%-0.18px)] top-[674px] w-[123px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="123" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function SingUp() {
  return (
    <div className="bg-white relative size-full" data-name="Sing Up">
      <Container />
    </div>
  );
}