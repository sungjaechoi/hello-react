import {useState} from 'react' // useMemo 사용시 import

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 99999999; i++) {} // 의미없는 for 문 -> 생각하는 시간
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("쉬운 계산");
  return number + 1;
};

function Average(){
  const [hardNumber, setHardNumber] = useState('1');
  const[easyNumber, setEasyNumber] =useState('1')

  // 주석 지워서 확인
  const hardSum = hardCalculate(hardNumber); 
  ///useMome 사용
  // const hardSum = useMemo(() => {
  //   return hardCalculate(hardNumber);
  // }, [hardNumber]);

  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기(Test)</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>
      {/*  */}
      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}


export default Average;
