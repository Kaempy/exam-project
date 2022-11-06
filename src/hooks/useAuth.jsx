import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
} from "../config";

const useAuth = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  const handleSignIn = async () => {
    console.log("signing in...");
    await signInWithRedirect(auth, provider);
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setIsAuth(false);
  };

  useEffect(() => {
    const getRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          console.log("signed in successful!", result.user);
          setUser({ ...result.user });
          setIsAuth(true);
          navigate("/users");
          console.log(isAuth);
        }
      } catch (err) {
        return console.log(err.message);
      }
    };
    getRedirect();
  }, [auth]);

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          console.log(user);
          setUser({ ...user });
          //   navigate("/users");
        }
      },
      (error) => console.log(error),
      (completed) => console.log(completed)
    );
  }, [auth]);
  return { isAuth, user, handleSignOut, handleSignIn };
};
export default useAuth;
