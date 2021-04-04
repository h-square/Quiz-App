import React from 'react';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';
import { classNames, ids } from '../registry';

function Options(props){
    const {currentQuestion, answeredOption, changeAnswer} = props;
    const options = currentQuestion.options.map((option,index)=>{
        return(
            <label key={nanoid()} className={classNames.OPTION}>
                <input
                    className={classNames.OPTION_RADIO_BUTTON} 
                    name="questionAndOptionsOptionSelectorGroup" 
                    type="radio" 
                    value={index} 
                    onChange={()=>{changeAnswer(currentQuestion.id,option.id)}} 
                    checked={option.id===answeredOption}
                />
                <p className={classNames.OPTION_TEXT}>{option.value}</p>
            </label>
        );
    });
    return(
        <div id={ids.OPTIONS_WRAPPER}>
            {options}
        </div>
    );
}

Options.propTypes = {
    currentQuestion : PropTypes.shape({
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
    }).isRequired,

    answeredOption : PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    changeAnswer : PropTypes.func.isRequired
}

export default Options;