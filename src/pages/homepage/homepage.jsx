import { useState } from "react";
import Editor from "../../components/Editor";
import styles from "./homepage.module.css";
import Button from "../../components/button/button";
import Modal from "../models/model";
import LivePreviewer from "../livepreview/LivePreviewer";
import ResultPage from "../resultpage/resultpage";
import axios from "axios";

function Homepage() {
  const [html, setHtml] = useState('<div class="box"><h1>Hello</h1></div>');
  const [css, setCss] = useState(".box { color: red; }");
  const [js, setJs] = useState('console.log("Hello, World!");');

  const [reactData, setReactData] = useState("");
  const [moduleCss, setModuleCss] = useState("");
  const [active, setActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

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
      <div className={styles.content}>
        <h1>Instant React Component Generator</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.contoleditor}>
            <Editor mode="html" value={html} onChange={setHtml} />
            <Editor mode="css" value={css} onChange={setCss} />
            <Editor mode="javascript" value={js} onChange={setJs} />
          </div>

          <div className={styles.buttonmoving}>
            <div className={styles.finalbtns}>
              {/* Convert Button */}
              <Button type="submit">Convert fields</Button>

              {/* Preview Button (Opens Modal) */}
              <Button onClick={() => setIsModalOpen(true)}>
                .°˖✧ Preview the code
              </Button>
            </div>
          </div>
        </form>
      </div>

      {active && <ResultPage jsxCode={reactData} cssCode={moduleCss} />}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <LivePreviewer htmlcode={html} csscode={css} jscode={js} />
</Modal>


    </div>
  );
}

export default Homepage;
