import'./App.css';

function App() {
  const name = '리엑트';
  return (
    <>
      <div className='react'>{name}</div>
      {/* <input> -> Parsing error: Unterminated JSX contents. (구문오류)*/}
      {/* <input></input> -> 정상적 출력 */}
      <input/>{/*태그사이의 별도의 내용이 들어가지 않는 경우 사용 가능(self-closing)*/}
    </>
  );
}

export default App;