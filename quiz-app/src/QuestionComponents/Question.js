import React from 'react';

function Question(props){
    return(
        <div className="questionAndOptionsQuestion">
            <p id="questionAndOptionsQuestionNumber">Question {props.currentQuestion.id}</p>
            <p id="questionText">{props.currentQuestion.question}</p>
        </div>
    );
}

export default Question;