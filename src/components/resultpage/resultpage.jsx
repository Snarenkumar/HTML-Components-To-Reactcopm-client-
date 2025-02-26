import styles from "../Editor.module.css";
import Editor from "../Editor";
import { useState } from "react";

function Resultpage() {


     const [react, setreact] = useState('<div>, World!</div>')
  return (
    <div>





        <div className={styles.editorContainer}>
                    <h2>HTML</h2>
                    <Editor mode="html" value={react} onChange={setreact} />
                    </div>
    </div>
  )
}

export default Resultpage