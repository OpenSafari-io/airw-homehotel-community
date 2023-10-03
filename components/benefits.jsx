import React from "react";
import Image from "next/image";

import RentBenefit from "@/pages/assets/images/rent_benefit.png";
import TravelBenefit from "@/pages/assets/images/travel_benefit.png";
import DiningBenefit from "@/pages/assets/images/dining_benefit.png";
import VacationBenefit from "@/pages/assets/images/vacation_benefit.png";
import FundReserve from "@/pages/assets/images/fund_reserve.png";
import PayRentImage from "@/pages/assets/images/pay_rent.png";

function Benefits() {
  const benefits = [
    {
      badge: "Rent Benefits",
      title: "1X Points on Rent Payment without the Transaction fee",
      subtitles: [
        "Finally , you can pay rent ,build Credit with multiple payment options and get rewarded",
        "Rent transaction fee waived for you as a TravelRewardClub Debit Card Holder.",
      ],
      image: RentBenefit,
    },
    {
      badge: "Travel Benefits",
      title: "1X Points on travel payment without the Transaction fee",
      subtitles: [
        "Member-only rates on flights, hotels, Airbnbs, rental cars, cruises when booked with Partner Businesses within the AirHomeHotel network",
        "Hotel/STR Discount concierge at your service 24/7.",
      ],
      image: TravelBenefit,
    },
    {
      badge: "Dining Benefits",
      title:
        "1X points on Dining at restaurants, bar where you see the ResidentRewardClub X TravelRewardClub logos.",
      subtitles: [
        "VIP reception at AirHomeHotel partner restaurants anywhere you go!",
      ],
      image: DiningBenefit,
    },
    {
      badge: "Vacation Reserve",
      subtitles: [
        "Jump-Start a personal “Vacation Fund” by using TravelRewardClub debit card for everyday expenses in your city which gathers your points and cashback monthly , turns them to cash and contributes it to a “vacation fund reserve” in your Resident Reward account",
        "Post about your experiences at TravelRewardClub Partners and get a share of their marketing budget.",
        'Earn and enjoy rewards at the best spots in your city that builds a curated experience wishlist for your future travels from TravelRewardClub Business partners based on the growth of your “vacation fund reserve"',
      ],
      image: VacationBenefit,
    },
    {
      badge: "Round-up to Vacation Fund Reserve",
      subtitles: [
        "Save while spending",
        `Automatically save towards your "VACATION FUND RESERVE" when you use your Resident Reward debit card. You can round up the spare change every time you buy a latte, hit your daily steps goal, or shop online at your favorite stores to earn cash back and points that turn to cash — Resident Reward will be matching your fund growth with travel offers from its business partners`,
      ],
      image: FundReserve,
    },
    {
      badge:
        "Pay Rent and earn points you can use at curated spots in your city and in cities you trip to.",
      subtitles: [
        "Credit and Rental History : Build credit with regular reporting to Equifax,Experian and Transunion.",
        "Build Rental History that can qualify in future for our “Co-Guarantor and Deposit Coverage program. **Cashback on cleaning fees : When you book Airbnb, VRBO on trips within the AirHomehotel network with your TravelRewardClub Super Card",
        "discounts and cashbacks from your favorite hotels , lounges and restaurants.",
      ],
      image: PayRentImage,
    },
  ];
  return (
    <div className="benefits flex items-center flex-wrap">
      {benefits.map((benefit, index) => (
        <div className="w-[100vw] benefit flex items-center" key={index}>
          <div className="w-full md:w-[50%]">
            <div className="content">
              <p className="custom_badge text-left">{benefit.badge}</p>
              {benefit.title && <h3>{benefit.title}</h3>}
              {benefit.subtitles.map((subtitle, index) => (
                <p key={index}>{subtitle}</p>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[50%] image_container">
            <Image src={benefit.image} width={"100%"} height={"100%"} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Benefits;
