import React from 'react';
import PropTypes from 'prop-types';

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

QuestionWrapper.propTypes = {
    questionNumber : PropTypes.number.isRequired,

    currentQuestion : PropTypes.shape({
        id : PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,

        question : PropTypes.string.isRequired,

        options : PropTypes.arrayOf(PropTypes.shape({
            id : PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]).isRequired,

            value : PropTypes.any.isRequired
        })).isRequired
    }).isRequired,

    answeredOption : PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    changeAnswer : PropTypes.func.isRequired,
}

export default QuestionWrapper;