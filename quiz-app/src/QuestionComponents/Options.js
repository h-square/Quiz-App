import React from 'react';
import '../App.css';

class Options extends React.Component{
    constructor(props){
        super(props);

        this.handleRadioButtons = this.handleRadioButtons.bind(this);
    }

    handleRadioButtons(e){
        if(this.props.selectedOptionOfQuestions[this.props.currentQuestion.id-1]===null){
            this.props.incrementNumberOfAnsweredQuestions();
        }
        this.props.setSelectedOptionOfCurrentQuestion(parseInt(e.target.value));
    }

    render(){
        const options = this.props.currentQuestion.options.map((option,index)=>{
            return(
                <label key={index} className="questionAndOptionsOption">
                    <input className="questionAndOptionsOptionSelector" name="questionAndOptionsOptionSelectorGroup" type="radio" 
                    value={index} onClick={this.handleRadioButtons} checked={this.props.selectedOptionOfQuestions[this.props.currentQuestion.id - 1]===index} onChange={()=>{}}/>
                    <p className="questionAndOptionsOptionText">{option.value}</p>
                </label>
            );
        });
        return(
            <div id="questionAndOptionsOptionsWrapper">
                {options}
            </div>
        );
    }
}

export default Options;