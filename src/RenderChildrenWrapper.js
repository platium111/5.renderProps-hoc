import React, { useState, memo } from "react";

const RenderChildrenWrapper = ({ children }) => {
  console.log("RenderChildrenWrapper rendering");
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return <>{children({ increment, decrement, count })}</>;
};

export default memo(RenderChildrenWrapper);
