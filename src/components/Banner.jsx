import React from "react";
import sfondo from "../assets/sfondo.jpg";

function Banner() {
  return (
    <div className=" w-full  flex items-center justify-center">
      <img className=" w-full h-full" src={sfondo} alt="" />
    </div>
  );
}

export default Banner;
