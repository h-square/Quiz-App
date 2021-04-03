import React from 'react';
import _ from 'lodash';

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
            "answeredQuestionSelectorColor" : "unansweredQuestionSelectorColor";
            
            return(
                <button key={key} id={key} className={"quizNavQuestionSelector " + buttonClass}>
                    {question.id}
                    {markedQuestions.has(question.id) && (
                        <svg viewBox="0 0 24 24" className="bookmarkIcon">
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
            <div id="quizNavQuestionSelectorBlock" onClick={this.handleClick}>
                {grid}
            </div>
        );
    }
}

export default QuestionSelectorGrid;