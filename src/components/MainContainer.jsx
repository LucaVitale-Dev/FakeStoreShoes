import React from "react";
import Card from "./Card";

function MainContainer({ datas, setDatas }) {
  return (
    <div className="p-4 overflow-auto grid grid-cols-3 gap-3 col-span-5">
      {datas.map((el) => (
        <Card key={el.title} store={el} />
      ))}
    </div>
  );
}

export default MainContainer;
