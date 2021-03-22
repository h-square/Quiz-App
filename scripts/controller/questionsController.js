import {questionsModel} from "../model/questionsModel.js";
import {questionsView} from "../view/questionsView.js";
import {navController} from "./navController.js";
import {bottomButtonsView} from "../view/bottomButtonsView.js";

let questionsController = {
    getCurrentQuestion : function(){
        return questionsModel.currentQuestion;
    },
    setCurrentQuestion : function(idNumber){
        questionsModel.currentQuestion = questionsModel.questions[idNumber-1];
        questionsView.renderCurrentQuestion();
    },
    getNumberOfQuestions : function(){
        return questionsModel.questions.length;
    },
    getSelectedOptionOfCurrentQuestion : function(){
        return questionsModel.selectedOptionOfQuestions[this.getCurrentQuestion().id - 1];
    },
    setSelectedOptionOfCurrentQuestion : function(index){
        questionsModel.selectedOptionOfQuestions[this.getCurrentQuestion().id - 1] = index;
    },
    incrementNumberOfAnsweredQuestions : function(){
        navController.incrementNumberOfAnsweredQuestions();
    },
    handlePreviousClick : function(){
        const currentQuestion = this.getCurrentQuestion();
        if(currentQuestion.id > 1){
            this.setCurrentQuestion(currentQuestion.id - 1);
        }
    },
    handleNextClick : function(){
        const currentQuestion = this.getCurrentQuestion();
        if(currentQuestion.id < this.getNumberOfQuestions()){
            this.setCurrentQuestion(currentQuestion.id + 1);
        }
    },
    init : function(questions){
        questionsModel.init(questions);
        questionsView.init();
        bottomButtonsView.init();
    }
}

export {questionsController};