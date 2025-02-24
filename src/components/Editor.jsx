import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import styles from './Editor.module.css';

// Import Ace Editor modes and themes
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const Editor = ({ mode, value, onChange }) => {
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
    />
  );
};

// PropTypes validation
Editor.propTypes = {
  mode: PropTypes.oneOf(['html', 'css', 'javascript']).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

// Default props
Editor.defaultProps = {
  value: '',
};

export default Editor;