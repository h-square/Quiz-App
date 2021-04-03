import React from 'react';
import {nanoid} from 'nanoid';

class Options extends React.Component{
    render(){
        const {currentQuestion, answeredOption, changeAnswer} = this.props;
        const options = currentQuestion.options.map((option,index)=>{
            return(
                <label key={nanoid()} className="questionAndOptionsOption">
                    <input
                        className="questionAndOptionsOptionSelector" 
                        name="questionAndOptionsOptionSelectorGroup" 
                        type="radio" 
                        value={index} 
                        onChange={()=>{changeAnswer(currentQuestion.id,option.id)}} 
                        checked={option.id===answeredOption}
                    />
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