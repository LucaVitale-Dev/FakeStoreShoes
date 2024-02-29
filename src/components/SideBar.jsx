import React, { useState } from "react";
import data from "../utility/data";

function SideBar({ datas, setDatas }) {
  const [sideBar, setSideBar] = useState(data);

  //
  const uniqueCategories = Array.from(
    new Set(sideBar.map((el) => el.category))
  );
  const uniqueCompany = Array.from(new Set(sideBar.map((el) => el.company)));
  const uniqueColor = Array.from(new Set(sideBar.map((el) => el.color)));
  //
  function handleCategory(el) {
    const filter = datas.filter((element) => element.category === el);
    setDatas(filter);
  }

  function handleBrand(el) {
    const filter = datas.filter((element) => element.company === el);
    setDatas(filter);
  }

  function handleColr(el) {
    const filter = datas.filter((element) => element.color === el);
    setDatas(filter);
  }
  const handleReset = () => {
    setDatas(data);
  };

  return (
    <div className=" gap-10  overflow-hidden col-span-1 flex flex-col justify-center items-center">
      <h3 className=" text-4xl">Filter</h3>
      <button onClick={handleReset}>Reset Filter</button>
      <div className=" flex flex-col gap-3 items-start">
        <h3>Category</h3>
        {uniqueCategories.map((el) => (
          <button onClick={() => handleCategory(el)} key={el}>
            {el}
          </button>
        ))}
      </div>
      <div className=" flex flex-col gap-3 items-start">
        <h3>Brand</h3>
        {uniqueCompany.map((el) => (
          <button onClick={() => handleBrand(el)} key={el}>
            {el}
          </button>
        ))}
      </div>
      <div className=" flex flex-col gap-3 items-start">
        <h3>Color</h3>
        {uniqueColor.map((el) => (
          <button onClick={() => handleColr(el)} key={el}>
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
