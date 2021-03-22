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
            quizNavQuestionSelector.setAttribute("class","quizNavQuestionSelector");
            quizNavQuestionSelector.innerText = i;
            document.getElementById("quizNavQuestionSelectorBlock").appendChild(quizNavQuestionSelector);
        }
    },
    handleQuestionSelectors : function(){
        document.getElementById("quizNavQuestionSelectorBlock").addEventListener('click', (e) =>{
            const idNumber = parseInt(e.target.innerText);
            navController.renderQuestion(idNumber);
        },true);
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
            questionSelector.setAttribute("style","background-color : rgb(255, 255, 255); color : rgb(60, 72, 82);");
        }
        else{
            questionSelector.setAttribute("style","background-color : rgb(230, 248, 242); color : rgb(8, 189, 128);");
        }
    },
    init : function(){
        this.handleEndTestButton();
        this.renderSectionSummary();
        this.createAndAppendNavButtons();
        this.handleQuestionSelectors();
    }
}

export {navView};