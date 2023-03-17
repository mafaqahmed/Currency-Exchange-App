import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menu = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "History",
      path: "/history",
    },
  ];

  return (
    <header
      className="border-red-700 shadow-sm z-50 rounded-full text-white border-2 w-headerW fixed top-3 bg-blue-600 uppercase"
      style={{ left: "50%", transform: "translate(-50%, 0)" }}
    >
      <div className="flex justify-between items-center px-3">
        <div>
          <NavLink to="/">
            <img
              src="/photos/logo.png"
              alt="Logo"
              className="h-12 cursor-pointer my-2"
            />
          </NavLink>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-7 items-center">
            {menu.map((item) => (
              <li className="px-2 text-sm cursor-pointer tracking-widest" key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive}) =>
                    isActive ? "text-white" : "text-gray-400"
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <li>
              <button class="bg-yellow-500 hover:bg-white text-black py-3 px-12 rounded-full text-xs uppercase ease-in-out duration-300">
                About Developer
              </button>
            </li>
          </ul>
        </div>
        <div className="md:hidden py-3 text-2xl">
          <span className="sr-only">Open menu</span>
          <BiMenu
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          />
        </div>
      </div>
      <div className="fixed top-24 right-10 block md:hidden">
        {mobileMenu && <MobileMenu menu={menu}/>}
      </div>
    </header>
  );
}
