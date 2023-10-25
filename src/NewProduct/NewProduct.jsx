import { useEffect, useState } from "react";
import Item from "./Item";

const NewProduct = () => {
  const [newProduct, setNewProduct] = useState([])
  useEffect(() => {
    fetch('/New.json')
      .then(res => res.json())
      .then(data => setNewProduct(data))
  }, [])
  return (
    <div>
      <h1 className="text-4xl font-bold text-sky-500 text-center mb-4 mt-11">Our New Products</h1>
      <div className="grid md:grid-cols-3 gap-4 mb-6 ">
        {
          newProduct.map(item => <Item key={item.id} item={item}></Item>)
        }
      </div>
    </div>
  );
};

export default NewProduct;