import React from "react";
import Button from "../components/Button";
import RenderCards from "../components/RenderCards";
import { placetostayData } from "../data";

const PlaceToStay = () => {
  return (
    <div className="my-14 mx-5 mt-[7rem]  ">
      <ul className="grid grid-cols-3 px-5 font-medium  mb-14  md:grid-cols-4 lg:grid-cols-10 gap-5 lg:gap-2 text-[#434343] md:text-lg lg:px-10  md:mb-14">
        <li >
          <a href="#">Resturant</a>
        </li>
        <li>
          <a href="#">Cottage</a>
        </li>
        <li>
          <a href="#">Castle</a>
        </li>
        <li>
          <a href="#">fantasy city</a>
        </li>
        <li>
          <a href="#">beach</a>
        </li>
        <li>
          <a href="#">Carbins</a>
        </li>
        <li>
          <a href="#">Off-grid</a>
        </li>
        <li>
          <a href="#">Farm</a>
        </li>
        <li className="col-span-2 md:col-span-1 ">
          <Button className="text-sm text-[#333333] w-[80%] lg:w-full flex justify-between bg-gradient-to-t from-white to-white border border-[#B4B4B4] ">
            <span>Location</span> <img src="setting-5.svg" alt="" />{" "}
          </Button>{" "}
        </li>
      </ul>
      <div className="">
        <RenderCards arr={placetostayData} />
      </div>
    </div>
  );
};

export default PlaceToStay;
