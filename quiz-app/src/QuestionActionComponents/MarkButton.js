import React from 'react';

class MarkButton extends React.Component{
    constructor(props){
        super(props);
        this.handleMarkClick = this.handleMarkClick.bind(this);
    }

    handleMarkClick(){
        this.props.toggleMarkOfCurrentQuestion();
    }

    render(){
        return(
            <button id="questionBottomButtonsMarkButton" onClick={this.handleMarkClick}>
                <i className="fa fa-bookmark-o markButtonIcon"></i>
                Mark
            </button>
        );
    }
}

export default MarkButton;