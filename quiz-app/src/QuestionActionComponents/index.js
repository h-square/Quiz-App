import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { classLists, classNames, ids } from '../registry';

import Button from './Button';
import {removeAnswerOfQuestion} from '../Redux/actions/answeredQuestionsActions';
import { toggleMark } from '../Redux/actions/markedQuestionsActions';
import _ from 'lodash';
import { setCurrentQuestion } from '../Redux/actions/questionsActions';

class QuestionActionButtons extends React.Component{
    constructor(props){
        super(props);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    handlePreviousClick(){
        const {questionIDs, currentQuestion, gotoQuestion} = this.props;
        const prevIndex = questionIDs.indexOf(currentQuestion.id.toString()) - 1;
        gotoQuestion(questionIDs[prevIndex]);
    }

    handleNextClick(){
        const {questionIDs, currentQuestion, gotoQuestion} = this.props;
        const nextIndex = questionIDs.indexOf(currentQuestion.id.toString()) + 1;
        gotoQuestion(questionIDs[nextIndex]);
    }

    render(){
        const {currentQuestion, handleClearClick, handleMarkClick} = this.props;
        return(
            <div className={classNames.BOTTOM_BUTTONS_WRAPPER}>
                <Button 
                    id={ids.PREV_BUTTON} 
                    handleClick={this.handlePreviousClick}
                    name="Previous"
                    iconClassList={classLists.PREV_ICON}
                />
                <div className={classNames.CLEAR_MARK_NEXT_BUTTON}>
                    <Button 
                        id={ids.CLEAR_BUTTON} 
                        handleClick={()=>{handleClearClick(currentQuestion.id)}}
                        name="Clear"
                    />
                    <Button 
                        id={ids.MARK_BUTTON} 
                        handleClick={()=>{handleMarkClick(currentQuestion.id)}}
                        name="Mark"
                        iconClassList={classLists.MARK_ICON}
                    />
                    <Button 
                        id={ids.NEXT_BUTTON} 
                        handleClick={this.handleNextClick}
                        name="Next"
                        iconClassList={classLists.NEXT_ICON}
                    />
                </div>
            </div>
        );
    }
}

QuestionActionButtons.propTypes = {
    questionIDs : PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])).isRequired,

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

    handleClearClick : PropTypes.func.isRequired,

    handleMarkClick : PropTypes.func.isRequired,

    gotoQuestion : PropTypes.func.isRequired
}

const mapStateToProps = (state) =>{
    return{
        questionIDs : _.keys(state.questionsReducer.questions),
        currentQuestion : state.questionsReducer.currentQuestion
    }
}

const mapDispathToProps = (dispatch) =>{
    return{
        gotoQuestion : (questionID) => {dispatch(setCurrentQuestion(questionID))},
        handleClearClick : (questionID) => {dispatch(removeAnswerOfQuestion(questionID))},
        handleMarkClick : (questionID) => {dispatch(toggleMark(questionID))}
    }
}

export default connect(mapStateToProps, mapDispathToProps)(QuestionActionButtons);