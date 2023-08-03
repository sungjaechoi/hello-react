import React, { useRef, useState } from "react";

function UseRefRender() {
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

  const useNameRef = useRef('');
  const useEmailRef = useRef('');

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username: useNameRef.current.value,
      email: useEmailRef.current.value,
    };


    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
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
      <h2>useRef 리렌더링 방지</h2>
      <div>
        <input
          name="username"
          placeholder="계정명"
          onChange={onChange}
          value={username}
          ref={useNameRef}
        />
        <input
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
          ref={useEmailRef}
        />
        <button onClick={onCreate}>등록</button>
      </div>
      <ul>{UserList}</ul>
    </>
  );
}

export default UseRefRender;
