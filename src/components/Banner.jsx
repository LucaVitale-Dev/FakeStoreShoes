import React from "react";
import sfondo from "../assets/sfondo.png";

function Banner() {
  return (
    <div className=" w-full  h-screen flex items-center justify-center">
      <img className=" w-full h-full" src={sfondo} alt="" />
    </div>
  );
}

export default Banner;
