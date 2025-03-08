import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const getMode = localStorage.getItem("mode");
    if (getMode && getMode === "dark-mode") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("mode", "dark-mode");
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("mode", "light-mode");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  // const handleBodyClick = (e) => {
  //   if (!e.target.classList.contains("sidebarOpen") && !e.target.closest(".menu")) {
  //     setIsMenuOpen(false);
  //   }
  // };


  return (
    <nav>
      <div className={styles.navBar}>
        <i className={styles.sidebarOpen} onClick={handleMenuOpen}>
          <span className="bx bx-menu"></span>
        </i>
        <span className={styles.logoNavLogo}>
          <a href="#">CodingLab</a>
        </span>

        <div className={styles.menu} style={{left: isMenuOpen ? '0%' : '-100%'}}>
          <div className={styles.logoToggle}>
            <span className={styles.logo}>
              <a href="#">CodingLab</a>
            </span>
            <i className={styles.siderbarClose} onClick={handleMenuClose}>
              <span className="bx bx-x"></span>
            </i>
          </div>

          <ul className={styles.navLinks}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className={styles.darkLightSearchBox}>
          <div className={`${styles.darkLight} ${isDarkMode ? styles.active : ''}`} onClick={handleModeToggle}>
            <i className="bx bx-moon moon"></i>
            <i className="bx bx-sun sun"></i>
          </div>

          <div className={`${styles.searchBox} ${isSearchOpen ? styles.active : ''}`} onClick={handleSearchToggle}>
            <div className={`${styles.searchToggle} ${isSearchOpen ? styles.active : ''}`}>
              <i className="bx bx-x cancel"></i>
              <i className="bx bx-search search"></i>
            </div>

            <div className={styles.searchField} style={{opacity: isSearchOpen ? 1 : 0, bottom: isSearchOpen ? '-74px' : '-85px'}}>
              <input type="text" placeholder="Search..." />
              <i className="bx bx-search"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;