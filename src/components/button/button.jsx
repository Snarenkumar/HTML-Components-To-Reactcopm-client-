import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ type = "button", onClick, children }) => {
  return (
    <button className={styles.primary} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

// Props validation
Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func, // Click handler for opening modal
  children: PropTypes.node.isRequired, // Allows JSX, text, and icons
};

export default Button;
