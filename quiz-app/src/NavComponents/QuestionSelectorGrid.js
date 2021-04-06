import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { classNames, ids } from '../registry';
import {connect} from 'react-redux';
import { setCurrentQuestion } from '../Redux/actions/questionsActions';

function QuestionSelectorGrid(props){
    const {questions, answeredQuestions, markedQuestions, handleClick} = props;
    const grid = _.keys(questions).map((key)=>{
        const question = questions[key];
        const buttonClass = answeredQuestions.has(question.id) ?
        classNames.ANSWERED_QUESTION_SELECTOR : classNames.UNANSWERED_QUESTION_SELECTOR;
        
        return(
            <button key={key} id={key} className={classNames.QUESTION_SELECTOR + " " + buttonClass}>
                {question.id}
                {markedQuestions.has(question.id) && (
                    <svg viewBox="0 0 24 24" className={classNames.COLORED_BOOKMARK_ICON}>
                        <path d="M19 21L12 16L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z" 
                        fill="#FFAD3B" fillRule="evenodd" clipRule="evenodd" 
                        stroke="#FFAD3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                    </svg>
                )}
            </button>
        );
    });
    return(
        <div id={ids.QUESTION_SELECTOR_GRID} onClick={(e)=>{handleClick(e.target.id)}}>
            {grid}
        </div>
    );
}

QuestionSelectorGrid.propTypes = {
    questions : PropTypes.objectOf(PropTypes.shape({
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
    })).isRequired,

    answeredQuestions : PropTypes.instanceOf(Map).isRequired,

    markedQuestions : PropTypes.instanceOf(Set).isRequired,

    handleClick : PropTypes.func.isRequired
}

const mapStateToProps = (state) =>{
    return{
        questions : state.questionsReducer.questions,
        answeredQuestions : state.answeredQuestionsReducer.answeredQuestions,
        markedQuestions : state.markedQuestionsReducer.markedQuestions
    }
}

const mapDispathToProps = (dispatch) =>{
    return{
        handleClick : (questionID)=>{dispatch(setCurrentQuestion(questionID))}
    }
}

export default connect(mapStateToProps, mapDispathToProps)(QuestionSelectorGrid);