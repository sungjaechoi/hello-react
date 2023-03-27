import { useReducer } from "react";

function reducer(state, action) {
  console.log("action", action);
  console.log("action.type", action.type);
  console.log("action.type(typeof)", typeof action.type);
  console.log("action.value", action.value);
  return {
    ...state,
    [action.name]: action.value,
  };
}

const InfoReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    number: "",
  });

  const {name, number} = state;

  console.log("state", state);
  console.log("state.name(input의 value)", state.name);

  const onChange = (e) => {
    dispatch(e.target);
    console.log("e.target", e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="number" value={number} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>군번:</b> {number}
        </div>
      </div>
    </div>
  );
};

export default InfoReducer;
