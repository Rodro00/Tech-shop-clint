/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { image, title } = brand;
  return (
    <Link to={`/products/${title}`}>
      <div className="card border-solid border-2 border-indigo-600  card-compact bg-base-100 shadow-xl">
        <figure><img className="w-full h-80" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <div className="card-actions justify-end">
            <button className="btn bg-gray-200 w-full">{title}</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Brand;