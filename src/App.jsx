import { useState } from "react";
import Editor from "./components/Editor";
import styles from "./App.module.css";
import Button from "./components/button/button";
import Resultpage from "./components/resultpage/resultpage";

function App() {
  const [html, setHtml] = useState('<div>Hello, World!</div>');


  const [css, setCss] = useState("body { background-color: #f0f0f0; }");


  const [js, setJs] = useState('console.log("Hello, World!");');

  // Function to send data to backend
  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = { html, css, js };
    console.log(html)
    console.log(css)
    console.log(js)

    try {
      const response = await fetch("http://localhost:5000/getReact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        
      });

      const result = await response.json();
      console.log("Server Response:", result);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className={styles.app}>
      <h1>Template Editor</h1>
      <form onSubmit={handleSubmit}> {/* Attach handleSubmit to form */}
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
          <Button type="submit" /> {/* Ensure it's a submit button */}
        </div>
      </form>


      <div className="resultpage">
        <Resultpage/>
      </div>
    </div>
  );
}

export default App;
