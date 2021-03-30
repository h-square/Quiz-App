import React from 'react';
import "../App.css";
import TimerCountDown from './TimerCountdown.js';

function Header(){
    return(
        <div className="quizHeader">
            <p className="quizAppTitle">Let's Quiz!</p>
            {/* <TimerCountDown/> */}
        </div>
    );
}

export default Header;