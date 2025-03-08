// Loginform.jsx
import { useState, useEffect } from "react";
import styles from "./loginform.module.css";

const Loginform = () => {
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const loginToggle = document.getElementById("login-form-toggler");
    const signupToggle = document.getElementById("signup-form-toggler");

    const handleSignupToggle = () => {
      setShowLogin(false);
    };

    const handleLoginToggle = () => {
      setShowLogin(true);
    };

    signupToggle.addEventListener("click", handleSignupToggle);
    loginToggle.addEventListener("click", handleLoginToggle);

    return () => {
      signupToggle.removeEventListener("click", handleSignupToggle);
      loginToggle.removeEventListener("click", handleLoginToggle);
    };
  }, []);

  return (
    <div className={styles["form-container"]}>
      <div
        className={styles["login-container"]}
        style={{ transform: showLogin ? "scale(1)" : "scale(0)" }}
        id="login-container"
      >
        <h1 className={styles.title}>Log In</h1>
        <p className={styles.desc}>
          Login to your account to upload or download pictures,videos or music
        </p>
        <div className={styles["input-container"]}>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            autoFocus
          />
        </div>
        <div className={styles["account-controls"]}>
          <a href="">Forgot Password?</a>
          <button>
            Next <i className="fas fa-solid fa-angle-right"></i>
          </button>
        </div>
        <span className={styles.line}></span>
        <span className={styles["other-login-text"]}>Or log in with</span>
        <div className={styles["social-logins"]}>
          <button className={styles["social-login"]}>
            <i
              style={{ color: "#1e7bf2" }}
              className="fas fa-brands fa-facebook-f"
            ></i>
          </button>
          <button className={styles["social-login"]}>
            <i
              style={{ color: "#ea4335" }}
              className="fas fa-brands fa-google"
            ></i>
          </button>
        </div>
        <span className={styles["signup-text"]}>
          <p>{`Don't have an account yet? `}</p>
          <a id="signup-form-toggler">Sign up</a>
        </span>
      </div>
      <div
        className={styles["placeholder-banner"]}
        id="banner"
        style={{ transform: `translateX(${showLogin ? "0%" : "-100%"})` }}
      >
        <img
          src="https://img.freepik.com/free-vector/abstract-flat-design-background_23-2148450082.jpg?size=626&ext=jpg&ga=GA1.1.1286474015.1708934801&semt=sph"
          alt=""
          className={styles.banner}
        />
      </div>
      <div
        className={styles["signup-container"]}
        style={{ transform: showLogin ? "scale(0)" : "scale(1)" }}
        id="signup-container"
      >
        <h1 className={styles.title}>Signup</h1>
        <p className={styles.desc}>
          Create your account to upload or download pictures,videos or music
        </p>
        <div className={styles["input-container"]}>
          <input type="email" placeholder="Enter Your Email Address" />
        </div>
        <div className={styles["input-container"]}>
          <input type="password" placeholder="Enter Your Password" />
        </div>
        <div className={styles["account-controls"]}>
          <button>
            Next <i className="fas fa-solid fa-angle-right"></i>
          </button>
        </div>
        <span className={styles.line}></span>
        <span className={styles["other-login-text"]}>Or Signup with</span>
        <div className={styles["social-logins"]}>
          <button className={styles["social-login"]}>
            <i
              style={{ color: "#1e7bf2" }}
              className="fas fa-brands fa-facebook-f"
            ></i>
          </button>
          <button className={styles["social-login"]}>
            <i
              style={{ color: "#ea4335" }}
              className="fas fa-brands fa-google"
            ></i>
          </button>
        </div>
        <span className={styles["signup-text"]}>
          Already have an account? <a id="login-form-toggler">Login here</a>
        </span>
      </div>
    </div>
  );
};

export default Loginform;
