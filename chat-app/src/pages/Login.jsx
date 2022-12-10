import React from "react";

const Login = () => {
    return (
        <div className="formContainer">
      <div className="formWrapper">

        <span className="logo">HelloFromTheOtherSide</span>
        <span className="title">Login</span>
        <form >
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

export default Login;