import React from 'react';
import '../App.css';

class QuestionActionButtons extends React.Component{
    constructor(props){
        super(props);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
        this.handleMarkClick = this.handleMarkClick.bind(this);
    }

    handlePreviousClick(){
        if(this.props.currentQuestion.id > 1){
            this.props.setCurrentQuestion(this.props.currentQuestion.id - 1);
        }
    }

    handleNextClick(){
        if(this.props.currentQuestion.id < this.props.numberOfQuestions){
            this.props.setCurrentQuestion(this.props.currentQuestion.id + 1);
        }
    }

    handleClearClick(){
        this.props.setSelectedOptionOfCurrentQuestion(null);
        this.props.decrementNumberOfAnsweredQuestions();
    }

    handleMarkClick(){
        this.props.toggleMarkOfCurrentQuestion();
    }

    render(){
        return(
            <div className="questionBottomButtonsWrapper">
                <button id="questionBottomButtonsPrevButton" onClick={this.handlePreviousClick}>
                    <i className="fa fa-chevron-circle-left prevButtonIcon"></i>
                    Previous
                </button>
                <div className="questionBottomButtonsClearMarkNextButtonWrapper">
                    <button id="questionBottomButtonsClearButton" onClick={this.handleClearClick}>
                        Clear
                    </button>
                    <button id="questionBottomButtonsMarkButton" onClick={this.handleMarkClick}>
                        <i className="fa fa-bookmark-o markButtonIcon"></i>
                        Mark
                    </button>
                    <button id="questionBottomButtonsNextButton" onClick={this.handleNextClick}>
                        Next
                        <i className="fa fa-chevron-circle-right nextButtonIcon"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default QuestionActionButtons;