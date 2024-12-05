import React from "react";
import Themetoggle from "./Themetoggle";

const Header = (props) => {
  return (
    <>
      <nav className="flex justify-between bg-white dark:bg-gray-900 flex w-full z-20  border-b border-gray-200 dark:border-gray-600 p-4">
        <h1 className="text-4xl dark:text-blue-400 font-serif">
          {props.title}
        </h1>

        <Themetoggle />
      </nav>
    </>
  );
};

export default Header;
