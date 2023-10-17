import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext);

  const handleRegister = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    console.log(email,name,password)

    createUser(email,password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.error(error);
    })
  }
  
  return (
    <div className="bg-slate-200 rounded-lg card-body  shadow-xl  p-6 mt-6">
      <div>
        <div>
          <h1 className="text-2xl font-bold text-center">Please Register</h1>
          <form onSubmit={handleRegister} className="w-2/4 m-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" name="name" required className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" required className="input input-bordered"  />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" required className="input input-bordered"  />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mt-4">Already have an account <Link className="font-bold text-blue-500" to="/login">login</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Register;