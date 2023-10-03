import Link from "next/link";
import AirHomeHotel from "../pages/assets/images/logo.png";
import Facebook from "../pages/assets/icons/facebook.png";
import Twitter from "../pages/assets/icons/twitter.png";
import Instagram from "../pages/assets/icons/instagram.png";
import Linkedin from "../pages/assets/icons/linkedin.png";
import Image from "next/image";

export default function Footer() {
  const about = [
    { name: "support@airhomehotel.com", route: "" },
    { name: "+1-832-960-1699", route: "" },
    { name: "Terms and Conditions", route: "" },
    { name: "FAQ", route: "" },
    { name: "TravelRewardClub", route: "" },
  ];
  return (
    <div className="bg-white text-black">
      <footer className="footer py-5 container m-auto px-5 md:px-0">
        <div className="flex justify-between flex-wrap py-5">
          <div className="w-full md:w-[50%]">
            <header className="logo">
              <Image
                src={AirHomeHotel.src}
                width={100}
                height={100}
                alt="AirHomeHotel Logo"
              />
            </header>
          </div>
          <div className="flex justify-start md:justify-end w-full md:w-[50%] mt-3 md:mt-0">
            <ul>
              <li>About us</li>
              {about.map((link, i) => (
                <li key={i}>
                  <Link href={link.route}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer_bottom mt-3">
          <div className="content">
            <p>
              AirHomeHotel is a financial technology company, not a bank.
              Payment Services provided by Stripe,Inc. Loans and Card Services
              are provided by Celtic Bank , Member FDIC . Visa debit cards
              issued pursuant to a license from Visa U.S.A. Inc. and may be used
              everywhere Visa cards are accepted. All loans and credit are
              subject to approval. Stripe Treasury is provided in the US by
              Stripe Payments Company, with funds held our banking partners
              Goldman Sachs Bank USA FDIC member
            </p>
            <p className="my-5">
              AirHomeHotel,TravelRewardClub and OpenSafari Collection are
              trademarks of AirHomeHotel, Inc
            </p>
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <p className="col-sm-10 text-start">
              AirHomeHotel, Inc {new Date().getFullYear()} . All rights reserved
            </p>
            <div className="flex items-center gap-2">
              {[
                {
                  img: Twitter,
                  route: "https://www.twitter.com/airhomehotel",
                },
                {
                  img: Facebook,
                  route: "https://www.facebook.com/airhomehotel",
                },
                {
                  img: Instagram,
                  route: "https://www.instagram.com/airhomehotel",
                },
                {
                  img: Linkedin,
                  route: "https://www.linkedin.com/company/airhomehotel",
                },
              ].map((item, index) => (
                <Link
                  href={item.route}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.img.src}
                    alt="AirHomeHotel Social"
                    width={100}
                    height={100}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
