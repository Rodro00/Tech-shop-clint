import { useEffect, useState } from "react";
import Mobile from "./Mobile";

const Mobiles = () => {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetch('/Mobiles.json')
      .then(res => res.json())
      .then(data => setMobiles(data))
  }, [])

  return (
    <div className="mt-12 ">
      <h2 className="text-center font-bold text-4xl mb-4  text-teal-500">Buy Electronic Products</h2>
      <div className="grid md:grid-cols-2 mb-6 gap-4">
        {
          mobiles.map(mobile => <Mobile key={mobile.id} mobile={mobile}></Mobile>)
        }
      </div>
    </div>
  );
};

export default Mobiles;