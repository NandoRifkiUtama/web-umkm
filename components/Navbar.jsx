import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <section className="w-full px-6 md-px-8 py-4 bg-[#1d3456] absolute top-0 left-0 z-10">
      <div className="flex justify-between items-center px-4">
        <Link to="/">
          <div className="w-[80px] md:w-[120px] cursor-pointer">
            <img className="w-full object-cover" src={Logo} alt="logo" />
          </div>
        </Link>
        <div className="text-white backdrop:justify-between gap-8 hidden md:flex">
          <Link to="/">
            <p className="hover:scale-105 duration-300 cursor-pointer">
              Beranda
            </p>
          </Link>
          <Link to="umkm">
            <p className="hover:scale-105 duration-300 cursor-pointer">UMKM</p>
          </Link>
          <Link to="poster">
            <p className="hover:scale-105 duration-300 cursor-pointer">Poster</p>
          </Link>
          <Link to="informasi">
            <p className="hover:scale-105 duration-300 cursor-pointer">
              Informasi
            </p>
          </Link>
        </div>
        <div onClick={()=>setNavbar(!navbar)} className="text-white cursor-pointer hover:scale-105 duration-300 md:hidden">
          <MenuIcon />
        </div>
        <div className={navbar ? "absolute bg-[#1d3456]/90 w-full h-screen top-0 left-0 flex flex-col items-center duration-1000 z-20" : "absolute bg-[#1d3456]/90 w-full h-screen top-0 left-0 flex flex-col items-center mt-[-250%] duration-1000 z-20"}>
          <div onClick={()=>setNavbar(!navbar)} className="text-white absolute top-4 right-4 cursor-pointer hover:scale-105 duration-300">
            <CloseIcon />
          </div>
          <div className="w-[150px] cursor- mt-10 mb-10">
            <img className="w-full object-cover" src={Logo} alt="logo" />
          </div>
          <div className="text-white px-6 py-10 flex flex-col items-center justify-center gap-6 w-full border-t">
            <Link to="/">
              <p className="hover:scale-105 duration-300 cursor-pointer px-3 py-1 rounded-xl hover:bg-[#395a8d]">
                Beranda
              </p>
            </Link>
            <Link to="umkm">
              <p className="hover:scale-105 duration-300 cursor-pointer px-3 py-1 rounded-xl hover:bg-[#395a8d]">
                UMKM
              </p>
            </Link>
            <Link to="poster">
              <p className="hover:scale-105 duration-300 cursor-pointer px-3 py-1 rounded-xl hover:bg-[#395a8d]">
                Poster
              </p>
            </Link>
            <Link to="informasi">
              <p className="hover:scale-105 duration-300 cursor-pointer px-3 py-1 rounded-xl hover:bg-[#395a8d]">
                Informasi
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
