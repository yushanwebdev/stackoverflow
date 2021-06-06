import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    console.log("Header Mounted");

    return () => {
      console.log("Header unMounted");
    };
  });
  return <div>Header</div>;
};

export default Header;
