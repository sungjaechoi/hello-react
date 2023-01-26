import'./App.css';

function App() {
  const name = '리엑트';
  const style = {
    // background-color는 backgroundColor와 같이 '-'가 사라지고 카멜 표시법으로 작성
    backgroundColor:'black',
    color:'aqua',
    fontSize:'48px', //font-size
    fontWeight:'bold',//font-weight
    padding:16 // 단위를 생략 하면 px로 지정
  }
  return (
    <div style ={style}>{name}</div>
  )
}

export default App;