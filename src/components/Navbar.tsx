import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar fixed font-semibold font-inter z-50">
      <div className="flex-none sm:hidden flex-col items-start">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setToggle((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div className={`${toggle ? "flex" : "hidden"}`}>
          <ul className="menu bg-slate-200 w-fit p-2 rounded-box text-base-300 opacity-75">
            <li className="hover-bordered">
              <a href="#home">Home</a>
            </li>
            <li className="hover-bordered">
              <a href="#about">About</a>
            </li>
            <li className="hover-bordered">
              <a href="#work">Work</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-none sm:flex hidden">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#home" className="text-white">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="text-white">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#work" className="text-white">
              WORK
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
