import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./Loginform.module.css";

const Loginform = () => {
  const [isLog, setIsLog] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  // Use useEffect to navigate when isLog changes
  useEffect(() => {
    if (isLog) {
      navigate("/login"); // Navigate to /login
    } else {
      navigate("/signup"); // Navigate to /signup
    }
  }, [isLog, navigate]);

  const handleCheckboxChange = () => {
    setIsLog(!isLog); // Toggle isLog state
  };

  return (
    <section>
      <div className={styles.container}>
        <div
          className={`${styles.row} ${styles.fullScreen} ${styles.alignItemsCenter}`}
        >
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
          <div className={styles.right}>
            <div className={styles.form}>
              <div className={styles.textCenter}>
                <h6>
                  <span>Log In</span> <span>Sign Up</span>
                </h6>

                <input
                  type="checkbox"
                  className={styles.checkbox}
                  id="reg-log"
                  onChange={handleCheckboxChange}
                  checked={!isLog}
                />
                <label htmlFor="reg-log"></label>
                <div className={styles["card-3d-wrap"]}>
                  <div className={styles["card-3d-wrapper"]}>
                    {/* Login Form */}
                    <div className={styles["card-front"]}>
                      <div className={styles["center-wrap"]}>
                        <h4 className={styles.heading}>Log In</h4>

                        <p className={styles.textCenter}>
                          <a href="#" className={styles.link}>
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
                          </a>
                          <p className={styles.textCenter}>
                            <a href="#" className={styles.link}>
                              Or
                            </a>
                          </p>
                        </p>
                        <div className={styles["form-group"]}>
                          <input
                            type="email"
                            className={styles["form-style"]}
                            placeholder="Your Email"
                            autoComplete="off"
                          />
                          <i
                            className={`${styles["input-icon"]} material-icons`}
                          >
                            alternate_email
                          </i>
                        </div>

                        <div className={styles["form-group"]}>
                          <input
                            type="password"
                            className={styles["form-style"]}
                            placeholder="Your Password"
                            autoComplete="off"
                          />
                          <i
                            className={`${styles["input-icon"]} material-icons`}
                          >
                            lock
                          </i>
                        </div>

                        <a href="#" className={styles.btn}>
                          Submit
                        </a>
                        <p className={styles.textCenter}>
                          <a href="#" className={styles.link}>
                            Forgot your password?
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Sign Up Form */}
                    <div className={styles["card-back"]}>
                      <div className={styles["center-wrap"]}>
                        <h4 className={styles.heading}>Sign Up</h4>
                        <p className={styles.textCenter}>
                          <a href="#" className={styles.link}>
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
                          </a>
                          <p className={styles.textCenter}>
                            <a href="#" className={styles.link}>
                              Or
                            </a>
                          </p>
                        </p>
                        <div className={styles["form-group"]}>
                          <input
                            type="text"
                            className={styles["form-style"]}
                            placeholder="Your Name"
                            autoComplete="off"
                          />
                          <i
                            className={`${styles["input-icon"]} material-icons`}
                          >
                            perm_identity
                          </i>
                        </div>

                        <div className={styles["form-group"]}>
                          <input
                            type="email"
                            className={styles["form-style"]}
                            placeholder="Your Email"
                            autoComplete="off"
                          />
                          <i
                            className={`${styles["input-icon"]} material-icons`}
                          >
                            alternate_email
                          </i>
                        </div>

                        <div className={styles["form-group"]}>
                          <input
                            type="password"
                            className={styles["form-style"]}
                            placeholder="Your Password"
                            autoComplete="off"
                          />
                          <i
                            className={`${styles["input-icon"]} material-icons`}
                          >
                            lock
                          </i>
                        </div>

                        <a href="#" className={styles.btn}>
                          Submit
                        </a>
                      </div>
                    </div>
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
