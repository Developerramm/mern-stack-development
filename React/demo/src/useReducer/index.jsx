import { useReducer } from "react";

export const ReducerComp = () => {
  const reducer = (state, action) => {
    if (action.type === "Increment") {
      return state + 1;
    }
    if (action.type === "Decrement") {
      return state - 1;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="row">
      <div className="col">
        <h3>Hello use Reducer hook </h3>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "Increment" })}
        >
          {" "}
          Increment{" "}
        </button>
        <span> count value : {count} </span>
        <button
          onClick={() => dispatch({ type: "Decrement" })}
          className="btn btn-primary"
        >
          Decrement{" "}
        </button>
      </div>
    </div>
  );
};
