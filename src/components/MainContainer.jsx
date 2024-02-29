import React from "react";
import Card from "./Card";
import data from "../utility/data";

function MainContainer() {
  return (
    <div className=" p-4 overflow-auto grid grid-cols-3 gap-3 col-span-5 ">
      {data.map((el) => (
        <Card key={el.title} data={el} />
      ))}
    </div>
  );
}

export default MainContainer;
