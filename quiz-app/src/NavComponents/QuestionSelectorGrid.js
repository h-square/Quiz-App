import React from 'react';
import {nanoid} from 'nanoid';

class QuestionSelectorGrid extends React.Component{
    constructor(props){
        super(props);

        this.handleQuestionSelectorGrid = this.handleQuestionSelectorGrid.bind(this);
    }

    handleQuestionSelectorGrid(e){
        const idNumber = parseInt(e.target.innerText);
        this.props.setCurrentQuestion(idNumber);
    }

    render(){
        const grid = this.props.questions.map((question)=>{
            const buttonClass = (this.props.selectedOptionOfQuestions[question.id-1] === null) ?
            "unansweredQuestionSelectorColor" : "answeredQuestionSelectorColor";
            
            const bookmarkIcon = <svg viewBox="0 0 24 24" className="bookmarkIcon">
                <path d="M19 21L12 16L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z" 
                fill="#FFAD3B" fillRule="evenodd" clipRule="evenodd" 
                stroke="#FFAD3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                </path>
            </svg>;
            
            return(
                <button key={nanoid()} className={"quizNavQuestionSelector " + buttonClass}>
                    {question.id}
                    {question.marked && bookmarkIcon}
                </button>
            );
        });
        return(
            <div id="quizNavQuestionSelectorBlock" onClick={this.handleQuestionSelectorGrid}>
                {grid}
            </div>
        );
    }
}

export default QuestionSelectorGrid;