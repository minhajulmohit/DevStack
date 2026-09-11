import Logo from "../assets/logo-text.png";

export default function Nav() {
  return (
    <nav className="px-2 container mx-auto mt-4 flex justify-between items-center">
      <img className="w-25 md:w-fit" src={Logo} alt="logo" />
      <ul className="hidden md:text-[#475569] md:flex md:gap-6 ">
        <li>
          <a className="text-[#DB2777]" href="">
            Home
          </a>
        </li>
        <li>
          <a href="">Technologies</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="flex gap-2">
        <button className="hidden md:block md:px-3 md:py-1 md:rounded-2xl md:text-[#475569]">
          Sign In
        </button>
        <button className=" hidden md:block md: bg-[#eb3191] px-3 py-1 rounded-2xl text-white">
          Sign Up
        </button>
        <button className="px-2 md:hidden">☰</button>
      </div>
    </nav>
  );
}
