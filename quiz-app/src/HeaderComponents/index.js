import React from 'react';
import {classNames} from '../registry.js'

import TimerCountDown from './TimerCountdown.js';

function Header(){
    return(
        <div className={classNames.QUIZ_HEADER}>
            <p className={classNames.APP_LOGO}>Let's Quiz!</p>
            <TimerCountDown/>
        </div>
    );
}

export default Header;