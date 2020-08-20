import React from "react";
import logo from "./../../assets/images/pokemon.svg";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="fixed top-0 left-0 flex items-center w-full bg-yellow-300 h-16 overflow-hidden z-20">
      <Link to="/" className="flex items-center pl-4">
        <img src={logo} alt="logo" className="w-12" />
        <h1 className="font-pokemon text-2xl tracking-wide text-red-600">
          Poké<span className="text-green-500 ml-1">Majd</span>
        </h1>
      </Link>
    </header>
  );
};

export default Header;
