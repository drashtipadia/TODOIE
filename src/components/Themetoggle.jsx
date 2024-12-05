import { useEffect, useState } from "react";
import React from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const Themetoggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-gray-700 bg-blue-500 cursor-pointer rounded-full p-2 m-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-white" size={17} />
      <div
        className="absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { left: "3px" } : { right: "3px" }}
      ></div>
      <BsSunFill className="ml-auto text-yellow-400" size={17} />
    </div>
  );
};

export default Themetoggle;
