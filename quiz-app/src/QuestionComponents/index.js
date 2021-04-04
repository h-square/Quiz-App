import React from 'react';

import Question from './Question.js';
import Options from './Options.js';
import { ids } from '../registry.js';

function QuestionWrapper(props){
    const {questionNumber, currentQuestion, answeredOption, changeAnswer} = props;
    return(
        <div id={ids.QUESTION_AND_OPTIONS}>
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