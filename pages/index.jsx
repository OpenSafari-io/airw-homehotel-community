import Image from "next/image";

import { Inter } from "next/font/google";

import Button from "@/components/button";

import MobileMockup from "@/pages/assets/images/mobile_mockup.png";
import AirHomeHotelCard from "@/pages/assets/images/airhome_hotel_card.png";
import MarqueeSection from "@/components/marquee_section";
import Footer from "@/components/footer";
import Benefits from "@/components/benefits";
import DownloadApp from "@/components/download_app";
import Navbar from "@/components/navbar";
import { base_url } from "@/utils/constants";
import { useState } from "react";

export default function Home() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function subscribeHandler(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${base_url}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });
      const output = await response.json();
      setMessage(output.message);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <main
        className={`px-3 md:px-24 font-sans bg-[url('/bg.png')] bg-cover bg-no-repeat bg-center text-white`}
      >
        <Navbar />
        <div className="text-center py-3">
          <h1 className="text-3xl md:text-6xl font-medium">
            THE BANK ACCOUNT TO PAY RENT THAT LEADS TO HOME OWNERSHIP.
          </h1>
          <h2 className="my-4 text-2xl font-bold">Your Rent , Rewarded</h2>
          <p>
            Sign up for a Free Bank account to pay your rent effortlessly
            without FEES.
          </p>
          <p className="my-2"> Build Credit.</p>
          <Image
            src={MobileMockup}
            width={"100%"}
            height={"100%"}
            className="object-contain h-[40vh] m-auto my-10"
          />
          <div className="w-[90%] md:w-[35%] m-auto mt-2 mb-10">
            <p>Enter your phone number to get started</p>
            {message ? (
              <p className="text-white text-center py-2">{message}</p>
            ) : (
              <form
                className="bg-white w-full flex justify-between p-[2px] rounded-md mt-2"
                onSubmit={subscribeHandler}
              >
                <input
                  type="tel"
                  placeholder="+1 (XXX) XXX-XXXX"
                  className="w-fit text-black outline-none flex-1"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Button bg={"bg-black"} color={"text-white"} type="submit">
                  Apply Now
                </Button>
              </form>
            )}
          </div>
          <div className="w-full md:w-[80%] m-auto">
            <h1 className="text-2xl md:text-4xl font-medium">
              PAYING RENT VIA RESIDENT REWARD IS REWARDING .
            </h1>
            <p className="my-2">
              Gain access to benefits of Travel Reward Club membership
            </p>
            <p className="text-left md:text-center text-[12px] text-slate-300">
              Get access to the exclusive TravelRewardClub SUPER debit card
              designed to reward you for your biggest monthly expense, build
              credit and rental history*, gifts points redeemable as credit
              towards travel and dining purchases in your city and on your trips
              , automatic cashback on cleaning fees** for booking Short Term
              Rentals on Travel OTAs like Airbnb and VRBO
            </p>
            <p className="text-left md:text-center  my-3">
              All your rent rewards in your city and on your trips in one place.
            </p>
            <p className="text-left md:text-center  font-[200]">
              #RentToTravelandDine
            </p>
          </div>
          <div className="my-10 w-full">
            <Image
              src={AirHomeHotelCard}
              alt=""
              width={"100%"}
              height={"100%"}
              className="object-contain w-full md:w-[30vw] m-auto mb-3"
            />
            {[
              "Receive opening points towards $100 dining credit when you join the TravelRewardClub",
              "$10.00 monthly fee.",
              "Cancel anytime",
              "Terms apply",
            ].map((p, i) => (
              <p
                className={`${
                  i === 0 || i === 1 || i === 3 ? "mt-1" : "mt-0"
                } ${
                  i === 3 ? "text-[16px] text-slate-300 font-[200] mb-4" : ""
                }`}
                key={i}
              >
                {p}
              </p>
            ))}
            <Button outlined>Get Pre-qualified</Button>
          </div>
        </div>
      </main>
      <MarqueeSection />
      <Benefits />
      <DownloadApp />
      <Footer />
    </>
  );
}
