import React from 'react';
import PropTypes from 'prop-types';
import { classNames, ids } from '../registry';

function Question(props){
    const {questionNumber, questionText} = props;
    return(
        <div className={classNames.QUESTION_WRAPPER}>
            <p id={ids.QUESTION_NUMBER}>Question {questionNumber}</p>
            <p id={ids.QUESTION_TEXT} dangerouslySetInnerHTML={{__html : questionText}}></p>
        </div>
    );
}

Question.propTypes = {
    questionNumber : PropTypes.number.isRequired,

    questionText : PropTypes.string.isRequired
}

export default Question;