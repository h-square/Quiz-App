import React from 'react';

function Button(props){
    const {id, handleClick, iconClassList, name, children} = props;
    const iconClassName = iconClassList && iconClassList.reduce(function(total, className){
        return total + className + " ";
    },"");
    return(
        <button id={id} onClick={handleClick}>
            {iconClassList && <i className={iconClassName}></i>}
            {name}
            {children}
        </button>
    );
}

export default Button;