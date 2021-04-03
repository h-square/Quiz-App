import React from 'react';
import _ from 'lodash';

import Question from './Question.js';
import Options from './Options.js';

function QuestionWrapper(props){
    const {questionNumber, currentQuestion, answeredOption, changeAnswer} = props;
    return(
        <div id="questionAndOptions">
            <Question
                questionNumber = {questionNumber}
                questionText = {currentQuestion.question}
            />
            <Options
                currentQuestion={currentQuestion}
                answeredOption={answeredOption}
                changeAnswer={changeAnswer}
            />
        </div>
    );
}

export default QuestionWrapper;