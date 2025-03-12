import { useState } from "react";
import Editor from "../../components/Editor";
import styles from "./Homepage.module.css";
import Button from "../../components/button/button";
import ResultPage from "../../components/resultpage/resultpage";
import axios from "axios";

function Homepage() {
  const [html, setHtml] = useState('<div class="box"><h1>Hello</h1></div>');
  const [css, setCss] = useState(".box { color: red; }");
  const [js, setJs] = useState('console.log("Hello, World!");');

  const [reactData, setReactData] = useState("");
  const [moduleCss, setModuleCss] = useState("");
  const [active, setActive] = useState(false);

  // Function to send data to backend
  const handleSubmit = async (event) => {
    event.preventDefault(); 
  
    try {
      const response = await axios.post("http://localhost:5001/api/react/getReact", { 
        html, 
        css, 
        js 
      });
      
  
      setReactData(response.data.jsx);
      setModuleCss(response.data.css);
      console.log("✅ Received JSX:", response.data.jsx);
      console.log("✅ Received CSS:", response.data.css);

      setActive(true); 
    } catch (error) {
      console.error("❌ Error sending data:", error);
    }
  };
  

  return (
    <div className={styles.Homepage}>
     

      {/* Skewed Background */}
      <section id="wrapper" className={styles.skewed}>

        
        <div className={`${styles.layer} ${styles.bottom}`}>
        
          <div className={styles.contentWrap}>
            <div className={styles.contentBody}>
              <h1>Bottom Layer</h1>
            </div>
          </div>
        </div>

        <div className={`${styles.layer} ${styles.top}`}>
          <div className={styles.contentWrap}>
            <div className={styles.contentBody}>
              <h1>Top Layer</h1>
            </div>
          </div>
        </div>


      </section>

      
      <div className={styles.content}>
        <div className={styles.textContent}>
        <h1>Instant React Comp<span className={styles.diffcolor}>onent Generator</span></h1>
        <div className={styles.textContentinner}>
          <p>Instantly Convert Your HTML, CSS & JS into Well-Structured React Components!</p>
        </div>
        </div>

        
        <form onSubmit={handleSubmit}>
          <div className={styles.contoleditor}>
            <div className={`${styles.html} ${styles.editorContainer}`}>
              <h2>HTML</h2>
              <Editor mode="html" value={html} onChange={setHtml} />
            </div>
            <div className={`${styles.css} ${styles.editorContainer}`}>
              <h2>CSS</h2>
              <Editor mode="css" value={css} onChange={setCss} />
            </div>
            <div className={`${styles.js} ${styles.editorContainer}`}>
              <h2>JavaScript</h2>
              <Editor mode="javascript" value={js} onChange={setJs} />
            </div>
          </div>

          <div className={styles.buttonmoving}>
            <Button type="submit" />
          </div>
        </form>
      </div>

      
      {active && (
        <div className={styles.resultpage}>
          <ResultPage jsxCode={reactData} cssCode={moduleCss} />
        </div>
      )}
    </div>
  );
}

export default Homepage;
