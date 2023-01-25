import { Fragment } from "react"; 
const name ='리엑트';

function App() {
  return (    
    <>{/* Fragment -> 단축 <></>  : 상위 'import { Fragment } from "react"' 추가 필요 */}
    {/* if 문 x -> 삼항 연산자 o */}
    {name === '리엑트' ? (
      <h1>리엑트 입니다.</h1>
    ):(
      <h1>리엑트가 아닙니다.</h1>
    )}
      
      <h2>잘 작동 하니?</h2>
    </>
  );
}

export default App;
