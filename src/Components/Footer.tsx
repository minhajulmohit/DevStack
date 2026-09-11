import logo from "../assets/logo-text.png";
function Footer() {
  return (
    <div className="container mx-auto mt-30 mb-10">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <img src={logo} />
          <p className="text-gray-500 mt-5">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <p className="mt-7 flex gap-5">
            <span>GitHub</span>
            <span>Twitter</span>
            <span>Linkedin</span>
          </p>
        </div>
        <div className="col-span-2">
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
        <div className="col-span-2">
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
        <div className="col-span-2">
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
      <div className="text-gray-500 flex justify-between mt-15">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <p className="flex gap-10">
          <span>Privacy</span>
          <span>Terms</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
