
import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";
import data from "./data.json";
const Chart = React.forwardRef((props, ref) => {
  return (
    <>{data.map((content) => ReactHtmlParser(DOMPurify.sanitize(content)))}</>  );
});

const App = () => {
  const componentRef = useRef();

  return (
    <React.Fragment>
      <Chart ref={componentRef} />
      <button
        style={{ margin: "30px" }}
        onClick={() =>
          exportComponentAsPNG(componentRef, {
            html2CanvasOptions: {
              onclone: (clonedDoc) => {
                clonedDoc.getElementById("legend").style.visibility = "visible";
              },
            },
          })
        }
      >
        Export As PNG
      </button>
    </React.Fragment>
  );
};

export default App;
