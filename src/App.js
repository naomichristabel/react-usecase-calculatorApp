import React, { useState } from 'react';
import OperatorsList from './Components/OperatorsList';
import OperatorBox from './Components/OperatorBox';
import ResetButton from './Components/ResetButton';
import './App.css';

function App() {
 const operators =['+','-','*','/'];
 const [opInBox, setOpInBox] = useState(operators[0]);
 const [isEditing,setIsEditing] = useState(false);
 let [input1, setInput1] = useState();
 let [input2, setInput2] = useState();
 let [result, setResult] = useState();
 let [count, setCount] = useState(0);

const onOpSelectHandler = (selOp) => {
   setOpInBox(selOp);
}


const submitHandler = (event) => {
  event.preventDefault();
  setCount(count+=1);

  input1 = parseFloat(input1);
  input2 = parseFloat(input2);

  switch (opInBox) {
    case '+':
      result=input1 + input2;
      setResult(result);
      break;
    case '-':
      result=input1 - input2;
      setResult(result);
      break;
    case '*':
      result=input1 * input2;
      setResult(result);
      break;
    case '/':
      result=input1 / input2;
      setResult(result);
      break;  
    default:
      result=0;
      break;
  }
  setIsEditing(true);
}
const resetClick = () => {
  setInput1('');
  setInput2('');
  setIsEditing(false);
  setOpInBox(operators[0]);
}
  return (
    <div className="full-page">
        <div className="title-div">
          <h2>Calculator App</h2>
        </div>
     
        <div data-testid="total-operations" className="count-div" >
          <h3>Total calculations performed: {count}</h3>
        </div>

        <div className="input-div">
          <input data-testid="app-input1" type="number" className="input-box" value={input1} onInput={(event)=>setInput1(event.target.value)}/>
          <OperatorBox opInBox={opInBox}/>
          <input data-testid="app-input2" type="number" className="input-box" value={input2} onInput={(event)=>setInput2(event.target.value)}/>
         </div>
       
    <div >
        <div data-testid="result" className="result">
          <form onSubmit={submitHandler}><OperatorsList operators={operators} onOpSelect={onOpSelectHandler}/></form>
          {isEditing && <div>RESULT: {result}</div> } 
        </div>  

        <div>
          <ResetButton input1={input1} input2={input2} resetClicked={resetClick}/>
        </div>
    </div>
    </div>
  );
}

export default App;
