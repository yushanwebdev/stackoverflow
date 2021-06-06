import { useEffect } from "react";
import { Link } from "react-router-dom";

const ActivityDisplay = (props) => {
  useEffect(() => {
    console.log("ActivityDisplay mounted");

    return () => {
      console.log("ActivityDisplay unMounted");
    };
  });

  return (
    <>
      <h2>ActivityDisplay</h2>
      <button onClick={props.updateMachineList}>Increase</button>
      <Link to="/">Click Me</Link>
    </>
  );
};

export default ActivityDisplay;
