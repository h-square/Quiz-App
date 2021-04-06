import React from 'react';
import PropTypes from 'prop-types';
import { classNames, ids } from '../registry';
import _ from 'lodash';
import {connect} from 'react-redux';

class NavHeader extends React.Component{
    constructor(props){
        super(props);
        this.handleEndTest = this.handleEndTest.bind(this);
    }

    handleEndTest(){
        const {unansweredCount} = this.props;
        let warning;
        if(!unansweredCount){
            warning = "You have answered all the questions!";
        }
        else{
            warning = "You have not answered " + unansweredCount + " questions!";
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

NavHeader.propTypes = {
    unansweredCount : PropTypes.number.isRequired
}

const mapStateToProps = (state)=>{
    return{
        unansweredCount : _.size(state.questionsReducer.questions) - state.answeredQuestionsReducer.answeredQuestions.size
    }
}

export default connect(mapStateToProps)(NavHeader);