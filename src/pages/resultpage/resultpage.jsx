import styles from "../../components/Editor.module.css";
import Editor from "../../components/Editor";
import PropTypes from "prop-types";


function ResultPage({ jsxCode, cssCode }) {
  return (
    <div className={styles.outer}>
      <div className={styles.editorContainer}>
        <h2>React Component</h2>
        <Editor mode="jsx" value={jsxCode} onChange={() => {}} />
      </div>
      <div className={styles.editorContainer}>
        <h2>CSS Module</h2>
        <Editor mode="css" value={cssCode} onChange={() => {}} />
      </div>
    </div>
  );
}


ResultPage.propTypes = {
  jsxCode: PropTypes.string.isRequired, // Ensures jsxCode is a required string
  cssCode: PropTypes.string.isRequired, // Ensures cssCode is a required string
};

// ✅ Default Props (Avoids crashes if no data is passed)
ResultPage.defaultProps = {
  jsxCode: "// No React component generated yet",
  cssCode: "/* No CSS generated yet */",
};

export default ResultPage;
