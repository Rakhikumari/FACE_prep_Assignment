import React, { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
const Loaders = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="6"
      animationDuration="12.5"
      width="70"
      visible={true}
    />
  );
};
export default Loaders;
