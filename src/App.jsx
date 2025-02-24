import { useState } from 'react';
import Editor from './components/Editor';
import styles from './App.module.css';

function App() {
  const [html, setHtml] = useState('<div>Hello, World!</div>');
  const [css, setCss] = useState('body { background-color: #f0f0f0; }');
  const [js, setJs] = useState('console.log("Hello, World!");');

  return (
    <div className={styles.app}>
      <h1>Template Editor</h1>
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
    </div>
  );
}

export default App;