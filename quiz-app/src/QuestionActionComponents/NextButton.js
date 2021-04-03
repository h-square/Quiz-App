import React from 'react';

class NextButton extends React.Component{
    render(){
        return(
            <button id="questionBottomButtonsNextButton" onClick={this.props.handleClick}>
                Next
                <i className="fa fa-chevron-circle-right nextButtonIcon"></i>
            </button>
        );
    }
}

export default NextButton;