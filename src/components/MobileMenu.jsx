import React from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ menu }) => {
  return (
    <div>
      <ul className="flex flex-col space-y-7 items-center">
        {menu.map((item) => (
          <li className="w-40 text-center py-3 text-sm cursor-pointer border-2 border-red-700 rounded-full text-white bg-lightBlack" key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-400"
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
        <li>
          <button class="bg-yellow-500 hover:bg-white text-black w-40 text-center py-3 rounded-full text-xs uppercase ease-in-out duration-300">
            About Developer
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
