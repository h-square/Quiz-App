import React from 'react';
import NavHeader from './NavHeader.js';
import NavSectionSummary from './NavSectionSummary.js';
import QuestionSelectorGrid from './QuestionSelectorGrid.js';
import _ from 'lodash';

function NavWrapper(props){
    const {questions, answeredQuestions, markedQuestions, setCurrentQuestion} = props;
    const unansweredCount = _.size(questions) - answeredQuestions.size;
    return(
        <div className="quizNavWrapper">
            <div className="quizNavWrapperFixed">
                <NavHeader
                    unansweredCount={unansweredCount}
                />
                <div id="quizNav">
                    <div className="quizNavSection">
                        <div className="quizNavSectionInfo">
                            <h5 className="quizNavSectionName">Mathematics</h5>
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
                </div>
            </div>
        </div>
    );
}

export default NavWrapper;