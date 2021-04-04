import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import NavHeader from './NavHeader.js';
import NavSectionSummary from './NavSectionSummary.js';
import QuestionSelectorGrid from './QuestionSelectorGrid.js';
import { classNames } from '../registry.js';

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

NavWrapper.propTypes = {
    questions : PropTypes.objectOf(PropTypes.shape({
        id : PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,

        question : PropTypes.string.isRequired,

        options : PropTypes.arrayOf(PropTypes.shape({
            id : PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]).isRequired,

            value : PropTypes.any.isRequired
        })).isRequired
    })).isRequired,

    answeredQuestions : PropTypes.instanceOf(Map).isRequired,

    markedQuestions : PropTypes.instanceOf(Set).isRequired,

    setCurrentQuestion : PropTypes.func.isRequired
}

export default NavWrapper;