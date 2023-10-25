import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    fetch('Brand.json')
      .then(res => res.json())
      .then(data => setBrands(data))
  }, [])
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6   mb-6 mt-6">
        {
          brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
        }
      </div>
    </div>
  );
};

export default Brands;