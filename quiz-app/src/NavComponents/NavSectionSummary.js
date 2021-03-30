import React from 'react';
import '../App.css';

function NavSectionSummary(props){
    return(
        <div className="quizNavSectionSummaryRow">
            <div className="quizNavSectionSummary">
                <div className="quizNavSectionSummaryDotAnswered"></div>
                <h6 className="quizNavSectionSummaryText">
                    {props.answeredCount} answered
                </h6>
            </div>
            <div className="quizNavSectionSummary">
                <div className="quizNavSectionSummaryDotMarked"></div>
                <h6 className="quizNavSectionSummaryText">
                    {props.markedCount} marked
                </h6>
            </div>
            <div className="quizNavSectionSummary">
                <div className="quizNavSectionSummaryDotUnanswered"></div>
                <h6 className="quizNavSectionSummaryText">
                    {props.unansweredCount} unanswered
                </h6>
            </div>
        </div>
    );
}

export default NavSectionSummary;