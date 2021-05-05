import React from 'react';
import './OperatorsList.css';

const OperatorsList = props => {

    const opClickHandler = (event) => {
      props.onOpSelect(event.target.value);
    }
  
    return (
    <div className="operators-list">
      <button data-testid="addButton" type="submit" className="operator-button" onClick={opClickHandler} value={props.operators[0]}>{props.operators[0]}</button>
      <button data-testid="subtractButton" type="submit" className="operator-button" onClick={opClickHandler} value={props.operators[1]}>{props.operators[1]}</button>
      <button data-testid="multiplyButton" type="submit" className="operator-button" onClick={opClickHandler} value={props.operators[2]}>{props.operators[2]}</button>
      <button data-testid="divideButton" type="submit" className="operator-button" onClick={opClickHandler} value={props.operators[3]}>{props.operators[3]}</button>
    </div>
    );
}

export default OperatorsList;