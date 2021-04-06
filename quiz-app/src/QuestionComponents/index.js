import React from 'react';

import Question from './Question.js';
import Options from './Options.js';
import { ids } from '../registry.js';

function QuestionWrapper(){
    return(
        <div id={ids.QUESTION_AND_OPTIONS}>
            <Question/>
            <Options/>
        </div>
    );
}

export default QuestionWrapper;