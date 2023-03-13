import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log('마운트될 때만 실행됩니다.')
  },[])

  const onChangName = (e) => {
    setName(e.target.value);
  };

  const onChangNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangName} />
        <input value={nickname} onChange={onChangNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>군번:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
