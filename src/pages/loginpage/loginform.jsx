import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Loginform.module.css";

const Loginform = () => {
  const [isLog, setIsLog] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ Toggle between Login & Signup
  const handleCheckboxChange = () => {
    setIsLog(!isLog);
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLog ? "/auth/login" : "/auth/register";
      const userData = isLog
        ? { email, password }
        : { username, email, password };

      const { data } = await axios.post(
        `http://localhost:5001${endpoint}`,
        userData,
        {
          withCredentials: true,
        }
      );

      alert(data.message);
      if (isLog) navigate("/dashboard");
    } catch (error) {
      console.error(
        "Registration/Login Error:",
        error.response?.data || error.message
      ); // Log the full error
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section>
      <div className={styles.container}>
        <div
          className={`${styles.row} ${styles.fullScreen} ${styles.alignItemsCenter}`}
        >
          {/* Left Section */}
          <div className={styles.left}>
            <span className={styles.line}></span>
            <h2>
              Hello, I m Naren Kumar, <br /> a <span>Web Developer</span>
            </h2>
            <p>Web Design Tutorial using HTML & CSS</p>
            <a href="#" className={styles.btn}>
              Contact
            </a>
            <div className={styles.socialMedia}>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Right Section (Login & Signup Forms) */}
          <div className={styles.right}>
            <div className={styles.form}>
              <div className={styles.textCenter}>
                <h6>
                  <span
                    className={isLog ? styles.activeTab : ""}
                    onClick={() => setIsLog(true)}
                  >
                    Log In
                  </span>{" "}
                  |{" "}
                  <span
                    className={!isLog ? styles.activeTab : ""}
                    onClick={() => setIsLog(false)}
                  >
                    Sign Up
                  </span>
                </h6>
              </div>

              <input
                type="checkbox"
                className={styles.checkbox}
                id="reg-log"
                onChange={handleCheckboxChange}
                checked={!isLog}
              />
              <label htmlFor="reg-log"></label>

              {/* 3D Card Wrapper with Flip Effect */}
              <div
                className={`${styles["card-3d-wrap"]} ${
                  !isLog ? styles.flip : ""
                }`}
              >
                <div className={styles["card-3d-wrapper"]}>
                  {/* Login Form */}
                  <div className={styles["card-front"]}>
                    <form
                      className={styles["center-wrap"]}
                      onSubmit={handleSubmit}
                    >
                      <h4 className={styles.heading}>Log In</h4>

                      <div className={styles.textCenter}>
                        <a href="#" className={styles.link}>
                          Login with:
                        </a>
                        <div className={styles.socialicon}>
                          <i
                            className={`fa-brands fa-google ${styles.iconsClr}`}
                          ></i>
                          <i
                            className={`fa-brands fa-github ${styles.iconsClr}`}
                          ></i>
                          <i
                            className={`fa-brands fa-x-twitter ${styles.iconsClr}`}
                          ></i>
                        </div>
                      </div>

                      <div className={styles["form-group"]}>
                        <input
                          type="email"
                          placeholder="Your Email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className={styles["form-group"]}>
                        <input
                          type="password"
                          placeholder="Your Password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <button type="submit" className={styles.btn}>
                        Log In
                      </button>

                      <p className={styles.textCenter}>
                        <a href="#" className={styles.link}>
                          Forgot your password?
                        </a>
                      </p>
                    </form>
                  </div>

                  {/* Sign Up Form */}
                  <div className={styles["card-back"]}>
                    <form
                      className={styles["center-wrap"]}
                      onSubmit={handleSubmit}
                    >
                      <h4 className={styles.heading}>Sign Up</h4>

                      <div className={styles.textCenter}>
                        <a href="#" className={styles.link}>
                          Sign up with:
                        </a>
                        <div className={styles.socialicon}>
                          <i
                            className={`fa-brands fa-google ${styles.iconsClr}`}
                          ></i>
                          <i
                            className={`fa-brands fa-github ${styles.iconsClr}`}
                          ></i>
                          <i
                            className={`fa-brands fa-x-twitter ${styles.iconsClr}`}
                          ></i>
                        </div>
                      </div>

                      <div className={styles["form-group"]}>
                        <input
                          type="text"
                          placeholder="Your Name"
                          required
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>

                      <div className={styles["form-group"]}>
                        <input
                          type="email"
                          placeholder="Your Email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className={styles["form-group"]}>
                        <input
                          type="password"
                          placeholder="Your Password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <button type="submit" className={styles.btn}>
                        Sign Up
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loginform;
