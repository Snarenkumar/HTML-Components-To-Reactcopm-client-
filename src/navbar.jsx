import  { useState, useEffect } from "react";
import "./navbar.less"; // Import LESS file

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.body.classList.toggle("dark", newDarkMode);
    localStorage.setItem("mode", newDarkMode ? "dark-mode" : "light-mode");
  };

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  // Close Sidebar when clicking outside
  const closeSidebar = (e) => {
    if (!e.target.closest(".menu") && !e.target.closest(".sidebarOpen")) {
      setIsSidebarActive(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", closeSidebar);
    return () => {
      document.body.removeEventListener("click", closeSidebar);
    };
  }, []);

  // Restore Dark Mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark-mode") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <nav className={`nav ${isSidebarActive ? "active" : ""}`}>
      <div className="navBar">
        <i className="bx bx-menu sidebarOpen" onClick={toggleSidebar}></i>
        <span className="logo">
          <a href="#">CodingLab</a>
        </span>

        <div className={`menu ${isSidebarActive ? "active" : ""}`}>
          <div className="logoToggle">
            <span className="logo">
              <a href="#">CodingLab</a>
            </span>
            <i className="bx bx-x sidebarClose" onClick={toggleSidebar}></i>
          </div>

          <ul className="navLinks">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="darkLightSearchBox">
          <div className={`darkLight ${isDarkMode ? "active" : ""}`} onClick={toggleDarkMode}>
            <i className="bx bx-moon"></i>
            <i className="bx bx-sun"></i>
          </div>

          <div className="searchBox">
            <div className={`searchToggle ${isSearchActive ? "active" : ""}`} onClick={() => setIsSearchActive(!isSearchActive)}>
              <i className="bx bx-x"></i>
              <i className="bx bx-search"></i>
            </div>

            <div className={`searchField ${isSearchActive ? "active" : ""}`}>
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
