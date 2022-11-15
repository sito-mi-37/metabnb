import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black  bottom-0 w-full py-5 px-5">
      <div className="grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center mb-5 ">
        <div className="flex flex-col  justify-center md:col-span-2 lg:justify-between  lg:items-start lg:col-span-1 items-center gap-8 mb-10">
          <img className='' src="metabnbwhitelogo.png" alt="logo" />
          <div className="text-white text-2xl flex gap-3">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:w-full  gap-4 text-center md:text-left md:w-[60%]">
          <div className="md:justify-self-center">
            <h3 className="footerheader">Community</h3>
            <ul className="flex flex-col gap-3 text-grey">
              <li>NFTs</li>
              <li>Tokens</li>
              <li>Landlords</li> 
              <li>Discord</li>
            </ul>
          </div>
          <div className="md:justify-self-center">
            <h3 className="footerheader">Places</h3>
            <ul className="flex flex-col gap-3 text-grey">
              <li>Castles</li>
              <li>Farms</li>
              <li>Beach</li>
              <li>Learn more</li>
            </ul>
          </div>
          <div className="md:col-span-2 md:justify-self-center lg:col-span-1">
            <h3 className="footerheader">About us</h3>
            <ul className="flex flex-col gap-3 text-grey">
              <li>Road map</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-gray-400 lg:px-[5.5rem]">@ 2022 Metabnb</p>
    </div>
  );
};

export default Footer;
