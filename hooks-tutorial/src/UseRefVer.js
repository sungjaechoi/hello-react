import React, { useRef, useState } from 'react';

function UseRefVer() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]);

  const nextId = useRef(4);

  const usernameInput = useRef();

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    console.log(user);

    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
    usernameInput.current.focus();
  };

  const UserList = users.map((user) => {
    return (
      <li key={user.id}>
        <span>{user.username}</span>
        <span>({user.email})</span>
      </li>
    );
  });

  return (
    <>
      <h2>useRef 컴포넌트 안의 변수 만들기</h2>
      <div>
        <input
          name="username"
          placeholder="계정명"
          onChange={onChange}
          value={username}
          ref={usernameInput}
        />
        <input
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
        />
        <button onClick={onCreate}>등록</button>
      </div>
      <ul>{UserList}</ul>
    </>
  );
}

export default UseRefVer;