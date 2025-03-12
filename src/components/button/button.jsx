import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ type = "button", text }) => {
  return (
    <button className={styles.primary} type={type}>
      {text}
    </button>
  );
};

// Props validation
Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]), // Restricts type to valid HTML button types
  text: PropTypes.string.isRequired, // Ensures text prop is always passed
};

export default Button;
