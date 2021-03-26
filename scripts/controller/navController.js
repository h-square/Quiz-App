import {navModel} from "../model/navModel.js";
import { questionsModel } from "../model/questionsModel.js";
import {navView} from "../view/navView.js";
import {questionsController} from "./questionsController.js"

const navController = {
    init : function(){
        navView.init();
    },
    getNumberOfAnsweredQuestions : function(){
        return navModel.answered;
    },
    getNumberOfMarkedQuestions : function(){
        return navModel.marked;
    },
    getNumberOfUnansweredQuestions : function(){
        return this.getNumberOfQuestions()-this.getNumberOfAnsweredQuestions();
    },
    getAllQuestions : function(){
        return questionsController.getAllQuestions();
    },
    getNumberOfQuestions : function(){
        return questionsController.getNumberOfQuestions();
    },
    goToQuestion : function(idNumber){
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
    showEndTestWarning : function(){
        let warning;
        if(this.getNumberOfUnansweredQuestions() === 0){
            warning = "You have answered all the questions!";
        }
        else{
            warning = "You have not answered " + this.getNumberOfUnansweredQuestions() + " questions!";
        }
        warning = warning + "\nAre you sure you want to end the test?"
        if(confirm(warning)){
            window.close();
        }
    }
}

export {navController};