import { useState } from "react";
import Editor from "../components/Editor";
import styles from "./Homepage.module.css";
import Button from "../components/button/button";
import ResultPage from "../components/resultpage/resultpage";
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
    event.preventDefault(); // ✅ Prevents form from reloading the page

    try {
      const response = await axios.post("http://localhost:5001/getReact", {
        html,
        css,
        js,
      });

      setReactData(response.data.jsx);
      setModuleCss(response.data.css);
      console.log("Received JSX:", response.data.jsx);
      console.log("Received CSS:", response.data.css);

      setActive(true); // ✅ Only activate after getting response
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className={styles.Homepage}>
      <h1>Template Editor</h1>



      <section id="wrapper" className="skewed">

      <div className="layer bottom">
        
      </div>

      <div className="layer top">
        
      </div>

      
    </section>
      <form onSubmit={handleSubmit}>
        <div className={styles.contoleditor}>
          <div className={styles.editorContainer}>
            <h2>HTML</h2>
            <Editor mode="html" value={html} onChange={setHtml} />
          </div>
          <div className={styles.editorContainer}>
            <h2>CSS</h2>
            <Editor mode="css" value={css} onChange={setCss} />
          </div>
          <div className={styles.editorContainer}>
            <h2>JavaScript</h2>
            <Editor mode="javascript" value={js} onChange={setJs} />
          </div>
        </div>

        <div className="buttonmoving">
          {/* ✅ Ensure the button submits the form correctly */}
          <Button type="submit" />
        </div>
      </form>

      {/* ✅ Show ResultPage only when active is true */}
      {active && (
        <div className="resultpage">
          <ResultPage jsxCode={reactData} cssCode={moduleCss} />
        </div>
      )}
    </div>
  );
}

export default Homepage;
