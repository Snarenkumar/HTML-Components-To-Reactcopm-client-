import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import styles from './Editor.module.css';

// Import Ace Editor modes and themes
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
const Editor = ({ mode, value, onChange, id }) => {
  return (
    <AceEditor
      mode={mode}
      theme="monokai"
      value={value}
      onChange={onChange}
      name={`${mode}_editor`}
      editorProps={{ $blockScrolling: true }}
      className={styles.editor}
      setOptions={{
        showLineNumbers: true,
        tabSize: 2,
      }}
      id={id} // Pass the id prop to AceEditor
    />
  );
};



// PropTypes validation
Editor.propTypes = {
  mode: PropTypes.oneOf(['html', 'css', 'javascript']).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string, // Add id prop validation
};

// Default props
Editor.defaultProps = {
  value: '',
  id: '', // Default id
};

export default Editor;