import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import React, { useState } from "react";
import "../CSS/Login.css";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";




const Login = () => {

    const [{}, dispatch] = useStateValue();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

  const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then(result => {
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            });
        })
    .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp-Clone</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>

    </div>
  );
};

export default Login;
