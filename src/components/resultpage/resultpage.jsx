import styles from "../Editor.module.css";
import Editor from "../Editor";
import { useState } from "react";

function Resultpage() {


     const [react, setreact] = useState('<div>Hello, World!</div>')
  return (
    <div>





        <div className={styles.editorContainer}>
                    <h2>HTML</h2>
                    <Editor mode="html" value={html} onChange={setHtml} />
                    </div>
    </div>
  )
}

export default Resultpage