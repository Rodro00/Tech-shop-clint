/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

const MyAddCartDetails = ({ item ,productCart,setProductCart}) => {
  const { photo, name,_id ,price} = item;

    const handleDelete = _id => {
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        console.log("delete confirm")
        fetch(`https://tech-shop-ax1justgo-rodros-projects.vercel.app/delete/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = productCart.filter(product=>product._id !== _id)
              setProductCart(remaining)
              
            }
          })
      }
    })
  }
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure><img className="w-full h-80" src={photo} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{name}</h2>
        <p className="font-semibold text-xl text-red-400">Price: {price}$</p>
        <button
            onClick={() => handleDelete(_id)}
            className="btn btn-primary ">Delete</button>
      </div>
    </div>
  );
};

export default MyAddCartDetails;