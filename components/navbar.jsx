import React from "react";
import Image from "next/image";

import MenuIcon from "@/pages/assets/icons/menu.png";
import Button from "./button";

function Navbar() {
  const [active, setActive] = React.useState(false);

  function toggleActive() {
    setActive((prev) => !prev);
  }
  return (
    <nav className="flex py-8 justify-start gap-x-2 md:gap-x-0 md:justify-between items-center w-full text-white">
      <Image
        src={MenuIcon}
        alt="Open Menu"
        width={"30px"}
        height={"30px"}
        className="object-contain w-[30px] block md:hidden"
        onClick={toggleActive}
      />
      <header className="text-slate-500">
        #Residents<span className="text-white">Reward</span>
      </header>
      <div
        className={`${
          active ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-2 fixed bottom-0 left-0 right-0 md:static bg-black md:bg-transparent h-[90vh] md:h-auto justify-end md:justify-start p-8 md:p-0`}
      >
        <Button outlined>Log in</Button>
        <Button>Create Account</Button>
      </div>
    </nav>
  );
}

export default Navbar;
