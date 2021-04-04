import React from 'react';
import { classNames } from '../registry';

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
                    <div className={classNames.SECTION_SUMMARY}>
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

export default NavSectionSummary;