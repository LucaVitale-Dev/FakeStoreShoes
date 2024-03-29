import { FaShoppingCart } from "react-icons/fa";

function Card({ store, handleCart }) {
  return (
    <div className=" justify-items-end rounded-xl gap-6 h-[400px] border shadow-xl flex flex-col justify-center items-center">
      <div>
        <img className="w-[200px]" src={store.img} alt="" />
      </div>
      <div>
        <p className=" text-center text-lg font-bold">{store.title}</p>
        <div className=" flex gap-5 items-center">
          <p className="line-through">${store.prevPrice}</p>
          <p>${store.newPrice}</p>
          <FaShoppingCart onClick={() => handleCart(store)} />
        </div>
      </div>
    </div>
  );
}

export default Card;
