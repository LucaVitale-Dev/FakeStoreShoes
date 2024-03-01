import React, { useState } from "react";
import data from "../utility/data";
import { FaShoppingBag } from "react-icons/fa";

function SideBar({ datas, setDatas, error, setError }) {
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
    if (filter.length === 0) {
      setError(true);
      setDatas(filter);
    } else {
      setDatas(filter);
    }
  }

  function handleBrand(el) {
    const filter = datas.filter((element) => element.company === el);
    if (filter.length === 0) {
      setError(true);
      setDatas(filter);
    } else {
      setDatas(filter);
    }
  }

  function handleColr(el) {
    const filter = datas.filter((element) => element.color === el);
    if (filter.length === 0) {
      setError(true);
      setDatas(filter);
    } else {
      setDatas(filter);
    }
  }

  const handleReset = () => {
    setDatas(data);
    setError(false);
  };

  return (
    <div className=" gap-10  overflow-hidden col-span-1 flex flex-col justify-center items-center">
      <FaShoppingBag />

      <h3 className=" text-4xl">Filter</h3>
      <button className=" uppercase" onClick={handleReset}>
        Reset Filter
      </button>
      <div className=" w-full flex flex-col gap-3 items-center">
        <h3 className=" text-2xl">Category</h3>
        {uniqueCategories.map((el) => (
          <button onClick={() => handleCategory(el)} key={el}>
            {el}
          </button>
        ))}
      </div>
      <div className=" w-full flex flex-col gap-3 items-center">
        <h3 className=" text-2xl">Brand</h3>
        {uniqueCompany.map((el) => (
          <button onClick={() => handleBrand(el)} key={el}>
            {el}
          </button>
        ))}
      </div>
      <div className=" w-full flex flex-col gap-3 items-center">
        <h3 className=" text-2xl">Color</h3>
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
