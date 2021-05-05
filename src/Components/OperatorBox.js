import React from 'react';
import './OperatorBox.css';

const OperatorBox = props => {

    return (
     <div className="operator-label-box">
         <label data-testid="selected-operator">{props.opInBox}</label>
     </div>
 );
}

export default OperatorBox;