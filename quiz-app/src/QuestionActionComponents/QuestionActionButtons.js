import React from 'react';

import ClearButton from './ClearButton';
import MarkButton from './MarkButton';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

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
            <div className="questionBottomButtonsWrapper">
                <PreviousButton 
                    handleClick={this.handlePreviousClick}/>
                <div className="questionBottomButtonsClearMarkNextButtonWrapper">
                    <ClearButton
                        handleClick={()=>{handleClearClick(currentQuestion.id)}}
                    />
                    <MarkButton 
                        handleClick={()=>{handleMarkClick(currentQuestion.id)}}
                    />
                    <NextButton 
                        handleClick={this.handleNextClick}
                    />
                </div>
            </div>
        );
    }
}

export default QuestionActionButtons;