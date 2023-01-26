import'./App.css';

function App() {
  const name = '리엑트';
  return (
    // 소괄호로 "style ={}" 내부에서 한번더 감싸 준다 -> "style ={{}}"
    <div style ={{
      // background-color는 backgroundColor와 같이 '-'가 사라지고 카멜 표시법으로 작성
      backgroundColor:'black',
      color:'aqua',
      fontSize:'48px', //font-size
      fontWeight:'bold',//font-weight
      padding:16 // 단위를 생략 하면 px로 지정
    }}>
      {name}
    </div>
  )
}

export default App;