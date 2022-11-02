import React, { useRef, useState } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!email || !password || !confirmPassword) {
      return;
    }

    if (confirmPassword !== password) {
      alert("Passwords do not match");
      return;
    }
    if (isLogin) {
      // do smth...
    } else {
      const createUser = async () => {
        try {
          const res = fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.REACT_APP_API_KEY}`,
            {
              method: "POST",
              body: JSON.stringify({
                email,
                password,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await res.json();

          if (data.error) {
            alert(data.error);
          }
        } catch {
          alert("Invalid email or password");
        }
      };
      createUser();

      // return () => {
      //   second
      // }
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="confirmPassword">Confirm your Password</label>
            <input
              type="password"
              id="confirmPassword"
              required
              ref={confirmPasswordRef}
            />
          </div>
        )}
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
