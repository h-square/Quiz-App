import React from 'react';
import '../App.css';

class NextButton extends React.Component{
    constructor(props){
        super(props);
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    handleNextClick(){
        if(this.props.currentQuestion.id < this.props.numberOfQuestions){
            this.props.setCurrentQuestion(this.props.currentQuestion.id + 1);
        }
    }

    render(){
        return(
            <button id="questionBottomButtonsNextButton" onClick={this.handleNextClick}>
                Next
                <i className="fa fa-chevron-circle-right nextButtonIcon"></i>
            </button>
        );
    }
}

export default NextButton;