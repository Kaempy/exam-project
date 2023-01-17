import { useState, useEffect } from "react";
import { auth, provider, signInWithPopup, signOut } from "../config";

const useAuth = () => {
  const initialState = {
    user: null,
    name: null,
    email: null,
    profilePic: null,
  };
  const [state, setState] = useState(initialState);
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      console.log(result.user);

      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("username", result.user.displayName);
      localStorage.setItem("email", result.user.email);
      localStorage.setItem("profilePic", result.user.photoURL);

      return setState({
        ...state,
        user: result.user,
        name: result.user.displayName,
        email: result.user.email,
        profilePic: result.user.photoURL,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const logoutHandler = async () => {
    try {
      const result = await signOut(auth);
      // Sign-out successful.
      localStorage.clear();
      setState({
        ...state,
        user: null,
        name: null,
        email: null,
        profilePic: null,
      });
      console.log(result);
      alert("signout successful!");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    return setState({
      ...state,
      user: JSON.parse(localStorage.getItem("user")),
      name: localStorage.getItem("username"),
      email: localStorage.getItem("email"),
      profilePic: localStorage.getItem("profilePic"),
    });
  }, []);

  return { state, signInWithGoogle, logoutHandler };
};

export default useAuth;
