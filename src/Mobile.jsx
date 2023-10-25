/* eslint-disable react/prop-types */
import { FaShoppingCart } from "react-icons/fa";
const Mobile = ({ mobile }) => {
  const { name, cover, price} = mobile;
  return (
    <div className="flex gap-4 border-2 ">
      <div className="w-1/2">
        <img className="w-full h-40 " src={cover} alt="" />
      </div>
      <div className="m-auto">
          <h1 className="text-2xl font-semibold text-violet-400">{name}</h1>
          <p className="text-xl font-semibold">${price}</p>
          <button className="p-2 flex items-center gap-2 rounded-md bg-teal-400"><FaShoppingCart></FaShoppingCart>Buy Now</button>
      </div>
    </div>
  );
};

export default Mobile;