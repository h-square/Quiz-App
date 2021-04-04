import React from 'react';
import NavHeader from './NavHeader.js';
import NavSectionSummary from './NavSectionSummary.js';
import QuestionSelectorGrid from './QuestionSelectorGrid.js';
import _ from 'lodash';
import { classLists, classNames } from '../registry.js';

function NavWrapper(props){
    const {questions, answeredQuestions, markedQuestions, setCurrentQuestion} = props;
    const unansweredCount = _.size(questions) - answeredQuestions.size;
    return(
        <div className={classNames.NAV_WRAPPER}>
            <NavHeader
                unansweredCount={unansweredCount}
            />
            <div className={classNames.SECTION_INFO}>
                <h5 className={classNames.SECTION_NAME}>Mathematics</h5>
            </div>
            <NavSectionSummary
                answeredCount = {answeredQuestions.size} 
                markedCount = {markedQuestions.size} 
                unansweredCount = {unansweredCount}
            />
            <QuestionSelectorGrid
                questions = {questions}
                answeredQuestions = {answeredQuestions}
                markedQuestions = {markedQuestions}
                handleClick = {setCurrentQuestion}
            />
        </div>
    );
}

export default NavWrapper;