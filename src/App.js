import { Fragment } from "react"; 
const name ='리엑트';

function App() {
  return (    
    <>{/* Fragment -> 단축 <></>  : 상위 'import { Fragment } from "react"' 추가 필요 */}
      <h1>{name}안녕!</h1>
      <h2>잘 작동 하니?</h2>
    </>
  );
}

export default App;
