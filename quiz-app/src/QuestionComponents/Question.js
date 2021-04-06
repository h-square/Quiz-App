import React from 'react';
import PropTypes from 'prop-types';
import { classNames, ids } from '../registry';
import {connect} from 'react-redux';
import _ from 'lodash';

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

const mapStateToProps = (state) =>{
    return{
        questionNumber : _.keys(state.questionsReducer.questions).indexOf(state.questionsReducer.currentQuestion.id.toString()) + 1,
        questionText : state.questionsReducer.currentQuestion.question
    }
}

export default connect(mapStateToProps)(Question);