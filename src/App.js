import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";
import data from "./data.json";

function App() {
  return (
    <>{data.map((content) => ReactHtmlParser(DOMPurify.sanitize(content)))}</>
  );
}

export default App;
