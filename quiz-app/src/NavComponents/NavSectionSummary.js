import React from 'react';

function NavSectionSummary(props){
    const {answeredCount, markedCount, unansweredCount} = props;
    return(
        <div className="quizNavSectionSummaryRow">
            <div className="quizNavSectionSummary">
                <div className="quizNavSectionSummaryDotAnswered"></div>
                <h6 className="quizNavSectionSummaryText">
                    {answeredCount} answered
                </h6>
            </div>
            <div className="quizNavSectionSummary">
                <div className="quizNavSectionSummaryDotMarked"></div>
                <h6 className="quizNavSectionSummaryText">
                    {markedCount} marked
                </h6>
            </div>
            <div className="quizNavSectionSummary">
                <div className="quizNavSectionSummaryDotUnanswered"></div>
                <h6 className="quizNavSectionSummaryText">
                    {unansweredCount} unanswered
                </h6>
            </div>
        </div>
    );
}

export default NavSectionSummary;