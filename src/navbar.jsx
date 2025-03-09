
import './Navbar.css'; // Import the CSS file for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="logo">Free<span>lancer</span></div>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="menu-btn">
            <i className="material-icons">menu</i>
          </label>
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">API<span className="span-nav">(BETA)</span></a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#" className="active">Login</a></li>
            <li><a href="#">SignUp</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;