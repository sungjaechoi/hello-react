import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log('랜더링이 완료되었습니다.')
    console.log({name, nickname})
  })

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
