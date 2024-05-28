import React from "react";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";

//assets
import Logo from "../assets/logo3.png";
import Logout from "../assets/logout.svg";
import User from "../assets/user.svg";


import { useState } from 'react';

//react-icons
import { MdMenu, MdClose } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {

const [menuOpened, setMenuOpened] = useState(false);
const toggleMenu = () => setMenuOpened(!menuOpened)

  return (
    <header className="max-padd-container w-full z-50 mt-20">
      <div className="flexBetween py-3">
        {/* Navbar Desktop */}
        <div className="hidden xl:flex flex-1 z-50">
        <Navbar containerStyles={"hidden xl:flex gap-x-5 xl: gap-x-10 medium 15 ring-1 ring-slate-900/10 rounded-full px-2 py-1 "}/>

        </div>
        {/* Navbar Mobile */}
        
        <div>
        <Navbar containerStyles={`${menuOpened ? " flex items-start flex-col gap-y-8 fixed top-20 right-8  p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50" : "flex items-start flex-col gap-y-8 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`}/>

        </div>
        {/*  Logo */}
        <div className="flex flex-1">
          <div className="bg-white flexCenter w-60 h-30 px-2 absolute top-0 rounded-full">
            <Link to={"/"}>
             {/* <p><span className="font bold text-3xl text-red-600">Stylish Stiches</span></p> */}
              <img className="mt-20 hover:animate-bounce" src={Logo} alt="logo" height={166} width={188} />
            </Link>
          </div>
        </div>
        {/* button */}
        <div className="flexBetween sm:gap-x-2 bold-16">
          {!menuOpened ? (
          <MdMenu className="xl:hidden cursor-pointer ring-1 ring-slate-900/10 hover: text-secondary mr-2 p-2 h-10 w-10 rounded-full" onClick={toggleMenu}/>
        ) : (
        <MdClose className="xl:hidden cursor-pointer ring-1 ring-slate-900/10 hover: text-secondary mr-2 p-2 h-10 w-10 rounded-full" onClick={toggleMenu}/>)}
        <div className=" flexBetween sm:gap-x-6  ">
          <NavLink to={"cart-page"} className={"flex"}>
          <TiShoppingCart className="p-2  h-10 w-10 ring-1 ring-slate-900/10 rounded-full hover:text-secondary"/>

             <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-primary medium-14 -top-2">0</span>
          </NavLink>
          {/* <NavLink to={'logout'} className={'btn-secondary flexCenter gap-x-2 medium-16 rounded-full'}> <img src={Logout} alt="logout icon" height={19} width={19} />
          Logout

          </NavLink> */}
          <NavLink to={'login'} className={'btn-secondary flexCenter gap-x-2 medium-16 rounded-full'}> <img src={User} alt="logout icon" height={19} width={19} />
          Login

          </NavLink>

        </div >
        </div>
      </div>
    </header>
  );
};

export default Header;
