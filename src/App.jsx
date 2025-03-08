import { useState } from "react";
import Editor from "./components/Editor";
import styles from "./App.module.css";
import Button from "./components/button/button";
import ResultPage from "./components/resultpage/ResultPage";
import axios from "axios";

function App() {
  const [html, setHtml] = useState('<div class="box"><h1>Hello</h1></div>');
  const [css, setCss] = useState(".box { color: red; }");
  const [js, setJs] = useState('console.log("Hello, World!");');
  
  const [reactData, setReactData] = useState("");
  const [moduleCss, setModuleCss] = useState("");

  // Function to send data to backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/getReact", { html, css, js });
      setReactData(response.data.jsx);
      setModuleCss(response.data.css);
      console.log("Received JSX:", response.data.jsx);
      console.log("Received CSS:", response.data.css);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className={styles.app}>
      <h1>Template Editor</h1>
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
          <Button type="submit" />
        </div>
      </form>

      <div className="resultpage">
        <ResultPage jsxCode={reactData} cssCode={moduleCss} />
      </div>
    </div>
  );
}

export default App;
