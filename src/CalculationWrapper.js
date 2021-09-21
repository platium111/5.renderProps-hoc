import React, { memo, useState } from "react";

const CalculationWrapper = (props) => {
  console.log("Calculation Wrapper rendering");
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return <>{props.render({ increment, decrement, count })}</>;
};

export default memo(CalculationWrapper);
