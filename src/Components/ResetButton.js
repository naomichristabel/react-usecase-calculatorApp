import React from 'react';
import './ResetButton.css';

const ResetButton = props => {
    
    const resetHandler = () => {
        props.resetClicked();
    }
    return (
        <div className="reset-button-div">
        <input data-testid="resetButton" type="button" className="reset-button" value="Reset" onClick={resetHandler}/>
        </div>
    );
}

export default ResetButton;