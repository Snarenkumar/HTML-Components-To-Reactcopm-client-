import  { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("mode", !isDarkMode ? "dark-mode" : "light-mode");
  };

  // Toggle search box
  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  // Close sidebar when clicking outside
  const closeSidebar = (e) => {
    if (
      !e.target.closest(`.${styles.menu}`) &&
      !e.target.closest(`.${styles.sidebarOpen}`)
    ) {
      setIsSidebarActive(false);
    }
  };

  // Add event listener for closing the sidebar
  useEffect(() => {
    document.body.addEventListener("click", closeSidebar);
    return () => {
      document.body.removeEventListener("click", closeSidebar);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${isSidebarActive ? styles.active : ""}`}>
      <div className={styles.navBar}>
        <i
          className={`bx bx-menu ${styles.sidebarOpen}`}
          onClick={toggleSidebar}
        ></i>
        <span className={styles.logo}>
          <a href="#">CodingLab</a>
        </span>

        <div className={`${styles.menu} ${isSidebarActive ? styles.active : ""}`}>
          <div className={styles.logoToggle}>
            <span className={styles.logo}>
              <a href="#">CodingLab</a>
            </span>
            <i
              className={`bx bx-x ${styles.sidebarClose}`}
              onClick={toggleSidebar}
            ></i>
          </div>

          <ul className={styles.navLinks}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.darkLightSearchBox}>
          <div className={styles.darkLight} onClick={toggleDarkMode}>
            <i className={`bx bx-moon ${styles.moon}`}></i>
            <i className={`bx bx-sun ${styles.sun}`}></i>
          </div>

          <div className={styles.searchBox}>
            <div
              className={`${styles.searchToggle} ${
                isSearchActive ? styles.active : ""
              }`}
              onClick={toggleSearch}
            >
              <i className={`bx bx-x ${styles.cancel}`}></i>
              <i className={`bx bx-search ${styles.search}`}></i>
            </div>

            <div
              className={`${styles.searchField} ${
                isSearchActive ? styles.active : ""
              }`}
            >
              <input type="text" placeholder="Search..." />
              <i className={`bx bx-search`}></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;