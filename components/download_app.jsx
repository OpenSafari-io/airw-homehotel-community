import React from "react";
import GetOnGooglePlay from "@/pages/assets/icons/get_on_googleplay.png";
import GetOnAppleStore from "@/pages/assets/icons/get_on_applestore.png";
import Image from "next/image";

function DownloadApp() {
  return (
    <div className=" flex items-center justify-center text-center flex-col py-[70px]">
      <h1 className="text-3xl font-medium">
        Get the ResidentReward concierge app
        <br />
        <span className="mt-3 block">AVAILABLE SOON</span>
      </h1>
      <div className="flex items-center mt-8 gap-3 justify-center">
        {[GetOnGooglePlay, GetOnAppleStore].map((image, i) => (
          <Image
            src={image}
            key={i}
            alt=""
            width={"100%"}
            height={"100%"}
            className="w-1/4 object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default DownloadApp;
