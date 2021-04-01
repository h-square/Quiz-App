import React from 'react';

class PreviousButton extends React.Component{
    constructor(props){
        super(props);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
    }

    handlePreviousClick(){
        if(this.props.currentQuestion.id > 1){
            this.props.setCurrentQuestion(this.props.currentQuestion.id - 1);
        }
    }

    render(){
        return(
            <button id="questionBottomButtonsPrevButton" onClick={this.handlePreviousClick}>
                <i className="fa fa-chevron-circle-left prevButtonIcon"></i>
                Previous
            </button>
        );
    }
}

export default PreviousButton;