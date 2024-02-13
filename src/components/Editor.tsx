import Editor from "@monaco-editor/react";
import { useRef } from "react";

const MonacoEditor = () => {
    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
      editorRef.current = editor;
    }

    function showValue() {
      alert(editorRef.current.getValue());
    }
  return (
    <div className=" row-span-6 col-span-2 border-4 border-black  ">
      <button onClick={showValue}>Show value</button>
      <Editor
        defaultLanguage="json"
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default MonacoEditor;
