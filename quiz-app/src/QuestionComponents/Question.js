import React from 'react';
import { classNames, ids } from '../registry';

function Question(props){
    const {questionNumber, questionText} = props;
    return(
        <div className={classNames.QUESTION_WRAPPER}>
            <p id={ids.QUESTION_NUMBER}>Question {questionNumber}</p>
            <p id={ids.QUESTION_TEXT}>{questionText}</p>
        </div>
    );
}

export default Question;