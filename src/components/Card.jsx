import React from "react";
import data from "../utility/data";
import { FaShoppingCart } from "react-icons/fa";

function Card({ data }) {
  return (
    <div className=" rounded-xl gap-6 h-[300px] border shadow-xl flex flex-col justify-center items-center">
      <div>
        <img className="w-[200px]" src={data.img} alt="" />
      </div>
      <div>
        <p className=" text-center text-lg font-bold">{data.title}</p>
        <div className=" flex gap-5 items-center">
          <p className="line-through">${data.prevPrice}</p>
          <p>${data.newPrice}</p>
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default Card;
