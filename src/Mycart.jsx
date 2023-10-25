import { useLoaderData } from "react-router-dom";
import MyAddCartDetails from "./MyAddCartDetails";
import { useState } from "react";

const Mycart = () => {
  const cartDetails = useLoaderData()
  const [productCart,setProductCart] = useState(cartDetails)
  return (
    <div className="mt-6 grid md:grid-cols-3 gap-4">
    {
      cartDetails.map(item=><MyAddCartDetails
        productCart={productCart}
        setProductCart={setProductCart}
       key={item._id} item={item }></MyAddCartDetails>)
    }
    </div>
  );
};

export default Mycart;