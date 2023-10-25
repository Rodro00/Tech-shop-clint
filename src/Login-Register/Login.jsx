import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "./firebase.config";
import {FaGoogle} from "react-icons/fa"

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  console.log('location form',location)

  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const handleGoogleLogIn = ()=>{
    signInWithPopup(auth,provider)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.error(error)
    })
  }

  const handleSignIn = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    signIn(email,password)
    .then(result=>{
      console.log(result.user)
      navigate(location.state ? location.state : '/')
    })
    .catch(error=>{
      console.error(error);
    })
  }

  return (
    <div>
    <div className="bg-slate-200 rounded-lg card-body  shadow-xl mt-6  p-6">
    <h1 className="text-2xl font-bold text-center">Login</h1>
      <form onSubmit={handleSignIn} className="w-2/4 m-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" required className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-secondary">Login</button>
        </div>
      </form>
      <div  className="flex text-center m-auto items-center mt-3">
        <button onClick={handleGoogleLogIn} className="btn" ><FaGoogle className="text-red-500"></FaGoogle>Google</button> 
      </div>
      <p className="text-center mt-4">Create an account <Link className="font-bold text-blue-500" to="/register">Register</Link> </p>
    </div>
    </div>
  );
};

export default Login;