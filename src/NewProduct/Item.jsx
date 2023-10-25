/* eslint-disable react/prop-types */

const Item = ({ item }) => {
  const { cover,name } = item;
  return (
    <div className="card bg-base-100  shadow-xl image-full">
      <img className="w-full h-80 " src={cover} alt="" />
      <div className="card-body m-auto">
        <button className="text-xl font-semibold">{name}</button>
      </div>
    </div>
  );
};

export default Item;