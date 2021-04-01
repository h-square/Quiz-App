import React from 'react';

class NavHeader extends React.Component{
    constructor(props){
        super(props);
        this.handleEndTest = this.handleEndTest.bind(this);
    }

    handleEndTest(){
        let warning;
        if(!this.props.unansweredCount){
            warning = "You have answered all the questions!";
        }
        else{
            warning = "You have not answered " + this.props.unansweredCount + " questions!";
        }
        warning = warning + "\nAre you sure you want to end the test?"
        if(window.confirm(warning)){
            window.close();
        }
    }

    render(){
        return(
            <div className="quizEndTest">
                <h6 className="quizTitle">Mock Test - 1</h6>
                <button id="quizEndButton" onClick={this.handleEndTest}>End test</button>
            </div>
        );
    }
}

export default NavHeader;