import RenderChildrenWrapper from "./RenderChildrenWrapper";

const withCalculation = (Component) => (props) => {
  console.log("hoc name inside withCalculation ", props.name);
  return (
    <RenderChildrenWrapper>
      {({ increment, count }) => {
        return <Component onClick={increment} count={count} {...props} />;
      }}
    </RenderChildrenWrapper>
  );
};

export default withCalculation;
