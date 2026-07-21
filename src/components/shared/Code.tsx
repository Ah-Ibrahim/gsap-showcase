import ShikiHighlighter, { type Language } from "react-shiki";

function Code({
  children,
  language = "tsx",
}: {
  children: string;
  language?: Language;
}) {
  return (
    <ShikiHighlighter language={language} theme="github-dark">
      {children.trim()}
    </ShikiHighlighter>
  );
}
export default Code;
