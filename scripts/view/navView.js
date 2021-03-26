import {navController} from "../controller/navController.js";
import {ids} from "../registry.js";

const navView = {
    init : function(){
        this.handleEndTestButton();
        this.renderSectionSummary();
        this.createQuestionsNavigator();
        this.handleQuestionSelectors();
    },
    renderSectionSummary : function(){
        const summary = document.getElementsByClassName("quizNavSectionSummaryText");
        summary[0].innerHTML = navController.getNumberOfAnsweredQuestions() + " answered";
        summary[1].innerHTML = navController.getNumberOfMarkedQuestions() + " marked";
        summary[2].innerHTML = navController.getNumberOfUnansweredQuestions() + " unanswered";
    },
    createQuestionsNavigator : function(){
        const questionsNavigator = document.getElementById(ids.QUESTION_NAVIGATOR);
        const questions = navController.getAllQuestions();
        questions.forEach((question) => {
            const quizNavQuestionSelector = document.createElement("button");
            quizNavQuestionSelector.setAttribute("class","quizNavQuestionSelector");
            quizNavQuestionSelector.innerText = question.id;
            questionsNavigator.appendChild(quizNavQuestionSelector);
        });
    },
    handleQuestionSelectors : function(){
        document.getElementById(ids.QUESTION_NAVIGATOR).addEventListener('click', (e) =>{
            const idNumber = parseInt(e.target.innerText);
            navController.goToQuestion(idNumber);
        });
    },
    handleEndTestButton : function(){
        const endTestButton = document.getElementById(ids.END_BUTTON);
        endTestButton.addEventListener('click', function(){
            navController.showEndTestWarning();
        });
    },
    changeColorOfQuestionSelector : function(){
        const currentQuestion = navController.getCurrentQuestion();
        const questionSelector = document.getElementsByClassName("quizNavQuestionSelector")[currentQuestion.id-1];
        if(questionSelector.style.color === "rgb(8, 189, 128)"){
            questionSelector.setAttribute("style","background-color : rgb(255, 255, 255); color : rgb(60, 72, 82);");
        }
        else{
            questionSelector.setAttribute("style","background-color : rgb(230, 248, 242); color : rgb(8, 189, 128);");
        }
    }
}

export {navView};