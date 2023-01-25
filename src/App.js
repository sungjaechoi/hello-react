import { Fragment } from "react"; 
const name ='리웩트';

function App() {
  return (    
    <>
    {name === '리엑트' ? <h1>리엑트 입니다.</h1>:<h1>리엑트가 아닙니다.</h1>}
    </>
  );
}

export default App;
