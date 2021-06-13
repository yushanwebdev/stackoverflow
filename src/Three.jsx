import { useEffect } from "react";
import { Link } from "react-router-dom";

const Three = () => {
  useEffect(() => {
    console.log("Three Mounted");

    return () => {
      console.log("Three unMounted");
    };
  });
  return (
    <>
      <div>Three</div>
      <Link to="/one">One</Link>
    </>
  );
};

export default Three;
