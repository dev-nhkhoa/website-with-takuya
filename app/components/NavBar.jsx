import Menu from "@/public/icons/Menu";

import React from "react";

const NavBar = () => {
  return (
    <div className="fixed flex h-[50px] w-screen justify-center bg-black/30 backdrop-blur-md">
      <div className="flex w-screen max-w-md  items-center justify-between text-white md:max-w-2xl">
        <p>DAMOCLOIDS</p>
        <button className="rounded-md border-[1px] border-solid border-[gray] bg-transparent p-[5px] hover:bg-slate-800">
          <Menu />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
