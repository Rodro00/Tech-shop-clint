
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const OneCard = () => {
  const cart = useLoaderData()
  const { name, brand, photo, description, price } = cart;

  const handleClickToaddData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const photo = formData.get("photo");
    const name = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");
    const brand = formData.get("brand")
    const newAddCart = { name, photo, price, description,brand }
    console.log(newAddCart);
    fetch('https://tech-shop-ax1justgo-rodros-projects.vercel.app/carts',{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(newAddCart)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Success',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }

 
  return (
    <div className="card card-side bg-base-100 shadow-xl items-center mt-6">
      <div className="border-2 border-rose-600 rounded-lg w-1/2">
      <figure><img className="w-full " src={cart.photo} alt="Movie" /></figure>
      </div>
      <div className="card-body w-1/2">
        <h2 className="text-3xl font-bold text-teal-500">{cart.name}</h2>
        <p className="font-bold text-orange-400">{cart.rating}</p>
        <p>{cart.description}</p>
        <div className="card-actions">
          <form onSubmit={handleClickToaddData}>
            <input type="text" name="name" value={name} hidden />
            <input type="text" name="price" value={price} hidden />
            <input type="text" name="photo" value={photo} hidden />
            <input type="text" name="brand" value={brand} hidden />
            <input type="text" name="description" value={description} hidden />
            <button className="btn btn-secondary" type="submit">
              Click to Add Cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OneCard;
