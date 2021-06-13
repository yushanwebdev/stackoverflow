import { useEffect } from "react";
import { Link } from "react-router-dom";

const One = () => {
  useEffect(() => {
    console.log("One Mounted");

    return () => {
      console.log("One unMounted");
    };
  });
  return (
    <>
      <div>One</div>
      <Link to="/two">Two</Link>
    </>
  );
};

export default One;
