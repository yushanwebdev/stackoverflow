import { Line } from "react-chartjs-2";
import { exportComponentAsPNG } from "react-component-export-image";
import React, { useRef } from "react";
import { data } from "./data";

const Chart = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ maxWidth: "800px" }}>
      <Line data={data} height={80} />
      <div id="legend" style={{ textAlign: "center", visibility: "hidden" }}>
        Legend
      </div>
    </div>
  );
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
