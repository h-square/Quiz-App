import React from 'react';

class ClearButton extends React.Component{
    render(){
        return(
            <button id="questionBottomButtonsClearButton" onClick={this.props.handleClick}>
                Clear
            </button>
        );
    }
}

export default ClearButton;