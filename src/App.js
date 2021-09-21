import { useCallback, useState } from "react";
import "./App.css";
import CalculationWrapper from "./CalculationWrapper";
import RenderChildrenWrapper from "./RenderChildrenWrapper";
import withCalculation from "./withCalculation";

function App() {
  console.log("---------");
  console.log("App rendering");

  const [appStateCount, setAppStateCount] = useState(0);

  // [learn] if we dont use memo() and useCallback in the 2 wrapper, it will render everytime App render
  const incrementAppCount = () => {
    setAppStateCount(appStateCount + 1);
  };

  const calculationWrapperCallback = useCallback(
    ({ increment, decrement, count }) => {
      return (
        <div>
          <p> My CalculationWrapper props content with count {count}</p>
          <button onClick={increment}>Increment </button>
        </div>
      );
    },
    []
  );

  const renderChildrenWrapperCallback = useCallback(
    ({ increment, decrement, count }) => {
      return (
        <div>
          <p> My RenderChildrenWrapper props content with count {count}</p>
          <button onClick={increment}>Increment </button>
        </div>
      );
    },
    []
  );

  // Coding with HOC
  // [learn] RenderChildrenWrapper renders first, then go to HOC render
  const HocCalculation = ({ onClick, count }) => {
    console.log("HocCalculation rendering");
    return (
      <div>
        <p>Hoc calculation count {count}</p>
        <button onClick={onClick}>Hoc increment</button>
      </div>
    );
  };

  const WithHocCalculation = withCalculation(HocCalculation);

  return (
    <div className="App">
      <p>App state count {appStateCount}</p>
      <button onClick={incrementAppCount}>App State increment</button>
      {/* Using render props */}
      <CalculationWrapper render={calculationWrapperCallback} />

      {/* Using children render */}
      <RenderChildrenWrapper>
        {renderChildrenWrapperCallback}
      </RenderChildrenWrapper>

      <WithHocCalculation name="specific hoc name" />
    </div>
  );
}

export default App;
