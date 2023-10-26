import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const cart = useLoaderData()
  const {_id,brand,price,type,description,photo,rating,name} = cart;
  const handleUpdateProduct = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const type = form.type.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    
    const updateProduct = {name,brand,price,type,description,photo,rating}

    console.log(updateProduct)

    fetch(`https://tech-shop-ax1justgo-rodros-projects.vercel.app/details/${_id}`,{
      method: 'PUT',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(updateProduct)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount >0){
        Swal.fire({
          title: 'Success',
          text: 'Updated Successfull',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
    
  }
  return (
    <div className="bg-sky-100 p-20 mt-2">
    <h2 className="text-3xl mb-4  font-bold">Update Product: {name}</h2>
    <form onSubmit={handleUpdateProduct} >
      {/* form name and brand name row */}
      <div className="md:flex gap-3  ">
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <label className="input-group">
            <input type="text" name="name" placeholder="Name" defaultValue={name} className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <label className="input-group">
            <input type="text" name="brand" placeholder="Brand Name" defaultValue={brand} className="input input-bordered w-full" />
          </label>
        </div>
      </div>
      {/* form supplier row */}
      <div className="md:flex gap-3 ">
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <label className="input-group">
            <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <label className="input-group">
            <input type="text" name="type" placeholder="Type" defaultValue={type} className="input input-bordered w-full" />
          </label>
        </div>
      </div>
      {/* form category and details row */}
      <div className="md:flex gap-3 ">
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <label className="input-group">
            <input type="text" name="description" placeholder="description" defaultValue={description} className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <label className="input-group">
            <input type="text" name="rating" placeholder="Rating" defaultValue={rating} className="input input-bordered w-full" />
          </label>
        </div>
      </div>
       {/* form photo url row */}
       <div >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <label className="input-group">
            <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo} className="input input-bordered w-full" />
          </label>
        </div>
      </div>
      <input type="submit" value="Update Product" className="btn btn-block bg-black text-white mt-8" />
    </form>
  </div>
  );
};

export default Update;