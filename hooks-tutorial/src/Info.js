import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    console.log('Effect')
    return () => {
      console.log('CleanUp - Unmount')
    }
  },[]);

  const onChangName = (e) => {
    setName(e.target.value);
  };

  const onChangNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangName} />
        <input value={number} onChange={onChangNumber} />
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

export default Info;
