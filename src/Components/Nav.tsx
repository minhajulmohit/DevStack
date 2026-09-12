import { useState } from "react";
import Logo from "../assets/logo-text.png";

export default function Nav() {
  //
  //
  const [isMenuOpen, setMenuOpen] = useState(false);
  //
  //
  return (
    <section className="sticky top-0 bg-white py-1 border-b border-gray-300">
      <nav className="px-2 container mx-auto flex justify-between items-center">
        <button
          onClick={() => setMenuOpen(true)}
          className="pl-2 pr-9 md:hidden"
        >
          ☰
        </button>
        <img className="w-25 md:w-fit" src={Logo} alt="logo" />

        <ul className="hidden md:text-[#475569] md:flex md:gap-6 ">
          <li>
            <a className="gradient-text" href="">
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
          <button className="md:px-3 py-1 rounded-2xl text-[#475569] cursor-pointer">
            Sign In
          </button>
          <button className="gradient-bg px-2 md:px-3 py-1 rounded-2xl text-white cursor-pointer">
            Sign Up
          </button>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-60 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end px-3">
          <button onClick={() => setMenuOpen(false)} className="text-xl">
            ✕
          </button>
        </div>
        <ul className="flex flex-col gap-5 px-6 text-[#475569]">
          <li>
            <a className="text-[#DB2777]" href="">
              Home
            </a>
          </li>
          <li>
            <a href=""> Technologies </a>
          </li>
          <li>
            <a href=""> Projects </a>
          </li>
          <li>
            <a href=""> About </a>
          </li>
          <li>
            <a href=""> Contact </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
