import React from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
    }catch(err){
      setErr(true);
    }

  }

    return (
        <div className="formContainer">
      <div className="formWrapper">

        <span className="logo">HelloFromTheOtherSide</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <span>Add an avatar</span>
          </label>
          <button >Sign up</button>
        </form>
        <p>
          You do have an account? 
        </p>
      </div>
    </div>
    );
};

export default Register;