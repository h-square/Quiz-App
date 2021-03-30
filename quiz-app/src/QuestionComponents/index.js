import React from 'react';
import '../App.css';

import Question from './Question.js';
import Options from './Options.js';

function QuestionWrapper(props){
    return(
        <div className="questionViewWrapper">
            <div id="questionAndOptions">
                <Question questions={props.questions} currentQuestion={props.currentQuestion}/>
                <Options questions={props.questions} currentQuestion={props.currentQuestion} selectedOptionOfQuestions={props.selectedOptionOfQuestions} 
                incrementNumberOfAnsweredQuestions={props.incrementNumberOfAnsweredQuestions} setSelectedOptionOfCurrentQuestion={props.setSelectedOptionOfCurrentQuestion}/>
            </div>
        </div>
    );
}

export default QuestionWrapper;