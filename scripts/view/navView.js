import {navController} from "../controller/navController.js";

let navView = {
    renderSectionSummary : function(){
        const summary = document.getElementsByClassName("quizNavSectionSummaryText");
        summary[0].innerHTML = navController.getNumberOfAnsweredQuestions() + " answered";
        summary[1].innerHTML = navController.getNumberOfMarkedQuestions() + " marked";
        summary[2].innerHTML = navController.getNumberOfUnansweredQuestions() + " unanswered";
    },
    createAndAppendNavButtons : function(){
        for(let i=1; i<=navController.getNumberOfQuestions();i++){
            const quizNavQuestionSelector = document.createElement("button");
            quizNavQuestionSelector.className = "quizNavQuestionSelector";
            quizNavQuestionSelector.innerText = i;
            quizNavQuestionSelector.addEventListener('click', function(){
                navController.renderQuestion(i);
            },true);
            document.getElementById("quizNavQuestionSelectorBlock").appendChild(quizNavQuestionSelector);
        }
    },
    handleEndTestButton : function(){
        const endTestButton = document.getElementById("quizEndButton");
        endTestButton.addEventListener('click', function(){
            let warning;
            if(navController.getNumberOfUnansweredQuestions() === 0){
                warning = "You have answered all the questions!";
            }
            else{
                warning = "You have not answered " + (navController.getNumberOfUnansweredQuestions()) + " questions!";
            }
            warning = warning + "\nAre you sure you want to end the test?"
            if(confirm(warning)){
                window.close();
            }
        },true);
    },
    changeColorOfQuestionSelector : function(){
        const currentQuestion = navController.getCurrentQuestion();
        const questionSelector = document.getElementsByClassName("quizNavQuestionSelector")[currentQuestion.id-1];
        if(questionSelector.style.color === "rgb(8, 189, 128)"){
            questionSelector.style.backgroundColor = "rgb(255, 255, 255)";
            questionSelector.style.color = "#3C4852";
        }
        else{
            questionSelector.style.backgroundColor = "rgb(230, 248, 242)";
            questionSelector.style.color = "rgb(8, 189, 128)";
        }
    },
    init : function(){
        this.handleEndTestButton();
        this.renderSectionSummary();
        this.createAndAppendNavButtons();
    }
}

export {navView};