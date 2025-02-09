import React, { useRef } from "react";

const MemoCount = () => {
  const renderCount = useRef(0);
  console.log("Count in memo ", renderCount);
  return (
    <div>
      <h3>Memo Count function in react js </h3>
      <h3> {renderCount.current++} </h3>
    </div>
  );
};

export default React.memo(MemoCount);
