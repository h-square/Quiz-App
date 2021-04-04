import React from 'react';
import { classNames, ids } from '../registry';

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
            <div className={classNames.END_TEST}>
                <h6 className={classNames.QUIZ_TITLE}>Mock Test - 1</h6>
                <button id={ids.END_BUTTON} onClick={this.handleEndTest}>End test</button>
            </div>
        );
    }
}

export default NavHeader;