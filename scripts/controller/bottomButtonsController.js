import {questionsController} from "../controller/questionsController.js";
import {navController} from "../controller/navController.js";

const bottomButtonsController = {
    clearCheckedOption : function(radioButton){
        const selectedOption = questionsController.getSelectedOptionOfCurrentQuestion();
        if(radioButton[selectedOption]){
            radioButton[selectedOption].checked = false;
            questionsController.setSelectedOptionOfCurrentQuestion(null);
            navController.decrementNumberOfAnsweredQuestions();
        }
    },
    getCurrentQuestion : function(){
        return questionsController.getCurrentQuestion();
    },
    incrementNumberOfMarkedQuestions : function(){
        navController.incrementNumberOfMarkedQuestions();
    },
    decrementNumberOfMarkedQuestions : function(){
        navController.decrementNumberOfMarkedQuestions();
    }
}

export {bottomButtonsController};