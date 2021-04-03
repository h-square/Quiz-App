import React from 'react';

function Question(props){
    const {questionNumber, questionText} = props;
    return(
        <div className="questionAndOptionsQuestion">
            <p id="questionAndOptionsQuestionNumber">Question {questionNumber}</p>
            <p id="questionText">{questionText}</p>
        </div>
    );
}

export default Question;