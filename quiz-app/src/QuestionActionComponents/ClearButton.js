import React from 'react';

class ClearButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClearClick = this.handleClearClick.bind(this);
    }

    handleClearClick(){
        this.props.decrementNumberOfAnsweredQuestions();
        this.props.setSelectedOptionOfCurrentQuestion(null);
    }

    render(){
        return(
            <button id="questionBottomButtonsClearButton" onClick={this.handleClearClick}>
                Clear
            </button>
        );
    }
}

export default ClearButton;