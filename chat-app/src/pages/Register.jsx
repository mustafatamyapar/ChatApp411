import React from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if((password.length < 8 ))
    {
      console.log("NOOOOO")
      
    }
    else if(!(/[0-9]+/.test(password)) )
    {
      console.log("NOOOOO")
    }
    else if(!(/[A-Z]+/.test(password)) )
    {
      console.log("NOOOOO")
    }
    else if(!(/[a-z]+/.test(password)) )
    {
      console.log("NOOOOO")
    }
    else
    {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    
    await updateProfile(res.user, {
      displayName,
    });

    await setDoc(doc(db, "users", res.user.uid), {
      uid: res.user.uid,
      displayName,
      email,
    });

    await setDoc(doc(db, "userChats", res.user.uid), {});
   navigate("/");
  }
  }

    return (

        <div className="formContainer">
      <div className="formWrapper">
      <img src={require('./ourLogo.jpg')}width="100" 
     height="100"></img>
        <span className="logo">ChatWill</span>
  
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="What will be your name?" />
          <input required type="email" placeholder="Email" />
          <input required type="password" minLength="8" placeholder="Password" /> 
          <div class="tooltip">i
          <span class="tooltiptext">Password needs to include minimum 1 digit, 1 uppercase , 1 lowercase letter.</span>
        </div>
          <button >Sign up</button>
        </form>
        <p>
          If you have an account <Link to="/login">Login</Link>
        </p>
   
      </div>
    </div>
    );
};

export default Register;