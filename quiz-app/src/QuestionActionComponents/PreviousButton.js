import React from 'react';

class PreviousButton extends React.Component{
    render(){
        return(
            <button id="questionBottomButtonsPrevButton" onClick={this.props.handleClick}>
                <i className="fa fa-chevron-circle-left prevButtonIcon"></i>
                Previous
            </button>
        );
    }
}

export default PreviousButton;