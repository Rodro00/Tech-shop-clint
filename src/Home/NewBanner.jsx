import { useLoaderData } from "react-router-dom";
import BannerCart from "./BannerCart";

const NewBanner = () => {
  const cart = useLoaderData()
  console.log(cart)
  return (
    <div>
      {
        cart.map(item=><BannerCart key={item._id} item={item}></BannerCart>)
      }
    </div>
  );
};

export default NewBanner;