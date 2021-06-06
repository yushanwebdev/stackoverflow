import { useEffect } from "react";
import { Link } from "react-router-dom";

const Two = () => {
  useEffect(() => {
    console.log("Two Mounted");

    return () => {
      console.log("Two unMounted");
    };
  });
  return (
    <>
      <div>Two</div>
      <Link to="/three">Three</Link>
    </>
  );
};

export default Two;
