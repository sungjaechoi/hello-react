import { useReducer } from "react";

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  console.log("state", state);
  console.log("action", action);
  console.log("action.type", action.type);
  
  switch (action.type) { 
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      //아무것도 해당되지 않을 때 기존 상태 변환
      return state;
  }
}

const CountReducer = () => {
  const [state, dispatch] = useReducer(reducer, {value : 0});

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{state.value}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default CountReducer;
