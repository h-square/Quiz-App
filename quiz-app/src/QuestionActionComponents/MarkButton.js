import React from 'react';

class MarkButton extends React.Component{
    render(){
        return(
            <button id="questionBottomButtonsMarkButton" onClick={this.props.handleClick}>
                <i className="fa fa-bookmark-o markButtonIcon"></i>
                Mark
            </button>
        );
    }
}

export default MarkButton;