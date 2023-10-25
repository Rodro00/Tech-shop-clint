import Swal from 'sweetalert2'
const AddProduct = () => {

  const handleAddProduct = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const type = form.type.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    
    const newProduct = {name,brand,price,type,description,photo,rating}

    console.log(newProduct)

    fetch('https://tech-shop-rd6jjljbp-rodros-projects.vercel.app/product',{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(newProduct)
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
    <div className="bg-sky-100 p-20 mt-2">
    <h2 className="text-3xl  mb-4 font-bold">Add Product</h2>
    <form onSubmit={handleAddProduct} >
      {/* form name and brand name row */}
      <div className=" md:flex  gap-3  ">
        <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <label className="input-group">
            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <label className="input-group">
            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
          </label>
        </div>
      </div>
      {/* form supplier row */}
      <div className="md:flex gap-3 ">
        <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <label className="input-group">
            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <label className="input-group">
            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
          </label>
        </div>
      </div>
      {/* form category and details row */}
      <div className="md:flex gap-3 ">
        <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <label className="input-group">
            <input type="text" name="description" placeholder="description" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <label className="input-group">
            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
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
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
          </label>
        </div>
      </div>
      <input type="submit" value="Add Product" className="btn btn-block bg-black text-white mt-8" />
    </form>
  </div>
  );
};

export default AddProduct;