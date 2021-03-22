import {navModel} from "../model/navModel.js";
import {navView} from "../view/navView.js";
import {questionsController} from "./questionsController.js"

let navController = {
    getNumberOfAnsweredQuestions : function(){
        return navModel.answered;
    },
    getNumberOfMarkedQuestions : function(){
        return navModel.marked;
    },
    getNumberOfUnansweredQuestions : function(){
        return this.getNumberOfQuestions()-this.getNumberOfAnsweredQuestions();
    },
    getNumberOfQuestions : function(){
        return questionsController.getNumberOfQuestions();
    },
    renderQuestion : function(idNumber){
        questionsController.setCurrentQuestion(idNumber);
    },
    getCurrentQuestion : function(){
        return questionsController.getCurrentQuestion();
    },
    incrementNumberOfAnsweredQuestions : function(){
        navModel.answered++;
        navView.renderSectionSummary();
        navView.changeColorOfQuestionSelector();
    },
    decrementNumberOfAnsweredQuestions : function(){
        navModel.answered--;
        navView.renderSectionSummary();
        navView.changeColorOfQuestionSelector();
    },
    incrementNumberOfMarkedQuestions : function(){
        navModel.marked += 1;
        navView.renderSectionSummary();
    },
    decrementNumberOfMarkedQuestions: function(){
        navModel.marked -= 1;
        navView.renderSectionSummary();
    },
    init : function(){
        navView.init();
    }
}

export {navController};