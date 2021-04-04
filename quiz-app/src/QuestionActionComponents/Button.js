import React from 'react';
import PropTypes from 'prop-types';

function Button(props){
    const {id, handleClick, iconClassList, name} = props;
    const iconClassName = iconClassList && iconClassList.reduce(function(total, className){
        return total + className + " ";
    },"");
    return(
        <button id={id} onClick={handleClick}>
            {iconClassList && <i className={iconClassName}></i>}
            {name}
        </button>
    );
}

Button.propTypes = {
    id : PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,

    handleClick : PropTypes.func.isRequired,

    iconClassList : PropTypes.arrayOf(PropTypes.string),

    name : PropTypes.string,
}

export default Button;