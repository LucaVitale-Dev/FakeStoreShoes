import React from "react";
import Card from "./Card";
import { useState } from "react";
import Error from "../components/Error";

function MainContainer({ datas, setDatas, error, setError }) {
  const [cart, setCart] = useState([]);

  function handleCart(store) {
    setCart((prevStat) => [...prevStat, store.title]);
    console.log(cart);
  }
  return (
    <div className="p-4 overflow-auto grid md:grid-cols-3 gap-3 col-span-7">
      {datas.map((el) => (
        <Card key={el.title} store={el} handleCart={handleCart} />
      ))}
      {error && <Error />}
    </div>
  );
}

export default MainContainer;
