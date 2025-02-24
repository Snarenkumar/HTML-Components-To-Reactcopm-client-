import styles from "./Button.module.css";

const Button = ({ type = "button" }) => {
  return (
    <button className={styles.primary} type={type}>
      Submit Data
    </button>
  );
};

export default Button;
