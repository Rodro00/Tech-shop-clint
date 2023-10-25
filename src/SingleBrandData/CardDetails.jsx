/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CardDetails = ({ item }) => {
  // console.log(item)
  const { _id,name,photo,brand,price,type,rating} = item;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
      <figure><img className="w-full h-96" src={photo} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title font-semibold text-xl">{name}</h2>
        <h2 className="text-xl text-red-600">Type: {type}</h2>
        <h1 className="font-semibold text-xl">Rating: {rating}</h1>
        <div className="flex mb-4 items-center">
        <p className="text-2xl font-bold">Brand: {brand}</p>
        <p className="text-red-400 text-xl ">Price: {price}</p>
        </div>
        <div className="flex justify-between">
          <Link to={`/update/${_id}`}>
          <button className="p-2 text-lg font-bold  rounded-md bg-teal-400">Update</button>
          </Link>
        <Link to={`/details/${_id}`}>
          <div className="card-actions justify-end">
            <button className="p-2 text-xl font-semibold rounded-md bg-cyan-400">View Details</button>
          </div>
        </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardDetails;