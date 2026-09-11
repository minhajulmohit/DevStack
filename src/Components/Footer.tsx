import logo from "../assets/logo-text.png";
function Footer() {
  return (
    <div className="px-2 container mx-auto mt-30 mb-10">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-6 ">
          <img className="mx-auto md:mx-0" src={logo} />
          <p className="text-gray-500 mt-5 text-center md:text-start">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <p className="mt-7 flex gap-5 justify-center md:justify-start">
            <span>GitHub</span>
            <span>Twitter</span>
            <span>Linkedin</span>
          </p>
        </div>
        <div className="hidden md:block md:col-span-2">
          <h4 className="font-bold">PRODUCT</h4>
          <ul className="text-gray-500 flex flex-col gap-4 mt-4">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Technology</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block md:col-span-2">
          <h4 className="font-bold">COMPANY</h4>
          <ul className="text-gray-500 flex flex-col gap-4 mt-4">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block md:col-span-2">
          <h4 className="font-bold">LEGAL</h4>
          <ul className="text-gray-500 flex flex-col gap-4 mt-4">
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 text-gray-500 flex justify-between mt-15">
        <p className="text-[12px] md:text-[16px]">
          © 2026 Dev Stack. All rights reserved.
        </p>
        <p className=" flex gap-4 md:gap-10 text-[12px] md:text-[16px]">
          <span>Privacy</span>
          <span>Terms</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
