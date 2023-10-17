import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./Login-Register/firebase.config";


const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null)

  const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut = () =>{
    return signOut(auth);
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
      console.log('user in the state',currentUser);
      setUser(currentUser)
    })
    return () =>{
      unSubscribe();
    }

  },[])

  const userInfo = {
    user,
    createUser,
    signIn,
    logOut,
  }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;