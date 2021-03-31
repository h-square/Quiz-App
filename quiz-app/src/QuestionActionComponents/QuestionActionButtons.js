import React from 'react';
import '../App.css';
import ClearButton from './ClearButton';
import MarkButton from './MarkButton';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

function QuestionActionButtons(props){
    return(
        <div className="questionBottomButtonsWrapper">
            <PreviousButton currentQuestion={props.currentQuestion} setCurrentQuestion={props.setCurrentQuestion}/>
            <div className="questionBottomButtonsClearMarkNextButtonWrapper">
                <ClearButton setSelectedOptionOfCurrentQuestion={props.setSelectedOptionOfCurrentQuestion} 
                decrementNumberOfAnsweredQuestions={props.decrementNumberOfAnsweredQuestions}/>
                <MarkButton toggleMarkOfCurrentQuestion={props.toggleMarkOfCurrentQuestion}/>
                <NextButton currentQuestion={props.currentQuestion} numberOfQuestions={props.numberOfQuestions}
                    setCurrentQuestion={props.setCurrentQuestion}/>
            </div>
        </div>
    );
}

export default QuestionActionButtons;