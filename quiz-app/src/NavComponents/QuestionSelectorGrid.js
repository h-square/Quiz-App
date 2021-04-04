import React from 'react';
import _ from 'lodash';
import { classNames, ids } from '../registry';

class QuestionSelectorGrid extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.handleClick(e.target.id);
    }

    render(){
        const {questions, answeredQuestions, markedQuestions} = this.props;
        const grid = _.keys(questions).map((key)=>{
            const question = questions[key];
            const buttonClass = answeredQuestions.has(question.id) ?
            classNames.ANSWERED_QUESTION_SELECTOR : classNames.UNANSWERED_QUESTION_SELECTOR;
            
            return(
                <button key={key} id={key} className={classNames.QUESTION_SELECTOR + " " + buttonClass}>
                    {question.id}
                    {markedQuestions.has(question.id) && (
                        <svg viewBox="0 0 24 24" className={classNames.COLORED_BOOKMARK_ICON}>
                            <path d="M19 21L12 16L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z" 
                            fill="#FFAD3B" fillRule="evenodd" clipRule="evenodd" 
                            stroke="#FFAD3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                        </svg>
                    )}
                </button>
            );
        });
        return(
            <div id={ids.QUESTION_SELECTOR_GRID} onClick={this.handleClick}>
                {grid}
            </div>
        );
    }
}

export default QuestionSelectorGrid;