"use client";
import Link from "next/link";
import { useState } from "react";
import Menu from "../../../public/assets/menu.svg";
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);	
  
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }
    return (
      <nav className="w-full flex flex-row items-center justify-end py-6 px-11 ">
            <ul className={`flex-row items-end gap-2 w-max right-2 ${openMenu ? "flex" : "hidden"}`}>
              <Link href={""} className="flex flex-row items-center">• About • </Link>
              <Link href={""} className=" flex flex-row items-center"> Proyects •</Link>
              <Link href={""} className="flex flex-row items-center">Contact •</Link>
            </ul>
            <button className="ml-2" onClick={handleOpenMenu}>
            <Menu className="w-10 h-10"  />
            </button>
      </nav>
    );
  };
  
  export default NavBar;