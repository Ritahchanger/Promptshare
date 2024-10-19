import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <nav className="h-[50px] w-full fixed right-0 left-0 shadow-md z-10 bg-white">
        <div className="max-w-[1200px] mx-auto  w-full h-full flex justify-between text-center items-center px-3">
          <a href="#" className="text-2xl font-semibold text-orange-500">
            SPLITTER
          </a>
          <div className="flex relative">
            <button
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              <span>
                <FaUser />
              </span>
            </button>
            <p className="ml-2">Ken Philip</p>
            <button className="ml-2" onClick={toggleDropdown}>
              <span className="text-xl hover:text-orange-600">
                <IoMdArrowDropdownCircle />
              </span>
            </button>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-[100%] right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md z-10"
              >
                <Link to="/profile">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Profile
                  </button>
                </Link>
                <Link to="/">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Logout
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <p className="h-[50px]"></p>
    </>
  );
};

export default Navbar;
