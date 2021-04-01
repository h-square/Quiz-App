import React from 'react';

import Question from './Question.js';
import Options from './Options.js';

function QuestionWrapper(props){
    return(
        <div id="questionAndOptions">
            <Question 
                questions={props.questions} 
                currentQuestion={props.currentQuestion}
            />
            <Options 
                currentQuestion={props.currentQuestion} 
                selectedOptionOfQuestions={props.selectedOptionOfQuestions} 
                incrementNumberOfAnsweredQuestions={props.incrementNumberOfAnsweredQuestions} 
                setSelectedOptionOfCurrentQuestion={props.setSelectedOptionOfCurrentQuestion}
            />
        </div>
    );
}

export default QuestionWrapper;