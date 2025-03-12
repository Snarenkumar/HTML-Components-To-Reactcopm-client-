import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
const LivePreviewer = ({ htmlcode = "", csscode = "", jscode = "" }) => {
  // Initialize local state with default values
  const [html, setHtml] = useState(htmlcode);
  const [css, setCss] = useState(csscode);
  const [js, setJs] = useState(jscode);
  const [srcDoc, setSrcDoc] = useState("");

  // Update local state when props change
  useEffect(() => {
    if (htmlcode !== undefined) setHtml(htmlcode);
    if (csscode !== undefined) setCss(csscode);
    if (jscode !== undefined) setJs(jscode);
  }, [htmlcode, csscode, jscode]);

  // Function to update iframe preview
  const updatePreview = () => {
    const source = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;
    setSrcDoc(source);
  };

  return (
    <div style={{ padding: "10px", color: "white", background: "#282c34", borderRadius: "10px" }}>
      <h2>Live Preview</h2>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {/* Editors */}
        <div style={{ width: "45%", background: "#1e1e1e", padding: "10px", borderRadius: "8px" }}>
          <h3>HTML</h3>
          <textarea 
            value={html} 
            onChange={(e) => setHtml(e.target.value)} 
            rows="4" 
            style={{ width: "100%", padding: "5px", background: "#333", color: "white", border: "none" }}
          />

          <h3>CSS</h3>
          <textarea 
            value={css} 
            onChange={(e) => setCss(e.target.value)} 
            rows="4" 
            style={{ width: "100%", padding: "5px", background: "#333", color: "white", border: "none" }}
          />

          <h3>JavaScript</h3>
          <textarea 
            value={js} 
            onChange={(e) => setJs(e.target.value)} 
            rows="4" 
            style={{ width: "100%", padding: "5px", background: "#333", color: "white", border: "none" }}
          />

          <button 
            onClick={updatePreview} 
            style={{ marginTop: "10px", padding: "10px", cursor: "pointer", background: "#4CAF50", border: "none", color: "white", borderRadius: "5px" }}>
            🔍 Run Code
          </button>
        </div>

        {/* Preview Panel */}
        <div style={{ width: "50%", background: "#1e1e1e", padding: "10px", borderRadius: "8px" }}>
          <h3>Output</h3>
          <iframe
            title="preview"
            srcDoc={srcDoc}
            style={{ width: "100%", height: "300px", background: "white", border: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

// ✅ **Props Validation**
LivePreviewer.propTypes = {
    htmlcode: PropTypes.string.isRequired, // Ensures htmlcode is a string and required
    csscode: PropTypes.string.isRequired,  // Ensures csscode is a string and required
    jscode: PropTypes.string.isRequired,   // Ensures jscode is a string and required
  };
  

export default LivePreviewer;
