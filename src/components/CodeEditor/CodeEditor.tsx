import { Editor } from "@monaco-editor/react";

interface ICodeEditorProps {
  boilerPlateCode?: string;
  width?: number | string;
  fontSize?: number;
  language?: string;
}
export default function CodeEditor({
  boilerPlateCode = "",
  width = "50%",
  language = "javascript",
  fontSize = 14,
}: ICodeEditorProps) {
  return (
    <Editor
      height="90vh"
      width={width}
      defaultLanguage="javascript"
      language={language}
      defaultValue={boilerPlateCode}
      theme="vs-dark"
      options={{
        fontSize: fontSize,
      }}
    />
  );
}
