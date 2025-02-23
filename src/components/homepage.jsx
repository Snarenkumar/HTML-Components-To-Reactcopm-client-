
import styles from "./HomePage.module.css";
import Navbar from "../components/navbar"; // Importing Navbar

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <header className={styles.hero}>
        <h1>Html template to react components</h1>
       
        <button className={styles.ctaButton}>Get Started</button>
      </header>

      <section className={styles.content}>
        <h2>About This Project</h2>
        <p>
          This is a basic React project starter page with modular styling, a navbar, a hero section, and a footer.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
