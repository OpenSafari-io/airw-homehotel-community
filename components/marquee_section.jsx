import React from "react";
import FourStar from "@/pages/assets/icons/four_star.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function MarqueeSection() {
  return (
    <div className="py-2 md:py-4">
      <Marquee direction="left" autoFill={true} speed={50}>
        <div className="flex items-center">
          <Image
            src={FourStar}
            alt="Four star"
            width={"150px"}
            height={"150px"}
          />
          <h1 className="text-3xl md:text-6xl">TRAVEL REWARD CLUB BENEFITS</h1>
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeSection;
