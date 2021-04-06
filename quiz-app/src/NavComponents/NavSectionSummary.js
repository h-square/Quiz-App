import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../registry';
import {nanoid} from 'nanoid';
import {connect} from 'react-redux';
import _ from 'lodash';

function NavSectionSummary(props){
    const {answeredCount, markedCount, unansweredCount} = props;
    const summaries = [
        {
            dotClass : "greyDot",
            text : answeredCount + " answered"
        },
        {
            dotClass : "yellowDot",
            text : markedCount + " marked"
        },
        {
            dotClass : "whiteDot",
            text : unansweredCount + " unanswered"
        }
    ];
    return(
        <div className={classNames.SECTION_SUMMARY_ROW}>
            {summaries.map((summary)=>{
                return (
                    <div key={nanoid()} className={classNames.SECTION_SUMMARY}>
                        <div className={"dot " + summary.dotClass}></div>
                        <h6 className={classNames.SECTION_SUMMARY_TEXT}>
                            {summary.text}
                        </h6>
                    </div>
                );
            })}
        </div>
    );
}

NavSectionSummary.propTypes = {
    answeredCount : PropTypes.number.isRequired,

    markedCount : PropTypes.number.isRequired,

    unansweredCount : PropTypes.number.isRequired
}

const mapStateToProps = (state) =>{
    return{
        answeredCount : state.answeredQuestionsReducer.answeredQuestions.size,
        markedCount : state.markedQuestionsReducer.markedQuestions.size,
        unansweredCount : _.size(state.questionsReducer.questions) - state.answeredQuestionsReducer.answeredQuestions.size
    }
}

export default connect(mapStateToProps)(NavSectionSummary);