import React from 'react';
import { classLists, classNames, ids } from '../registry';

import Button from './Button';

class QuestionActionButtons extends React.Component{
    constructor(props){
        super(props);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    handlePreviousClick(){
        const {questionIDs, currentQuestion, gotoQuestion} = this.props;
        const prevIndex = questionIDs.indexOf(currentQuestion.id.toString()) - 1;
        gotoQuestion(questionIDs[prevIndex]);
    }

    handleNextClick(){
        const {questionIDs, currentQuestion, gotoQuestion} = this.props;
        const nextIndex = questionIDs.indexOf(currentQuestion.id.toString()) + 1;
        gotoQuestion(questionIDs[nextIndex]);
    }

    render(){
        const {currentQuestion, handleClearClick, handleMarkClick} = this.props;
        return(
            <div className={classNames.BOTTOM_BUTTONS_WRAPPER}>
                <Button 
                    id={ids.PREV_BUTTON} 
                    handleClick={this.handlePreviousClick}
                    name="Previous"
                    iconClassList={classLists.PREV_ICON}
                />
                <div className={classNames.CLEAR_MARK_NEXT_BUTTON}>
                    <Button 
                        id={ids.CLEAR_BUTTON} 
                        handleClick={()=>{handleClearClick(currentQuestion.id)}}
                        name="Clear"
                    />
                    <Button 
                        id={ids.MARK_BUTTON} 
                        handleClick={()=>{handleMarkClick(currentQuestion.id)}}
                        name="Mark"
                        iconClassList={classLists.MARK_ICON}
                    />
                    <Button 
                        id={ids.NEXT_BUTTON} 
                        handleClick={this.handleNextClick}
                        name="Next"
                        iconClassList={classLists.NEXT_ICON}
                    />
                </div>
            </div>
        );
    }
}

export default QuestionActionButtons;