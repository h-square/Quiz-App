import {questionsController} from "../controller/questionsController.js";
import {navController} from "../controller/navController.js";

let bottomButtonsView = {
    init : function(){
        this.handlePreviousButton();
        this.handleNextButton();
        this.handleClearButton();
        this.handleMarkButton();
    },
    handlePreviousButton : function (){
        const prevButton = document.getElementById("questionBottomButtonsPrevButton");
        prevButton.addEventListener('click', function(){
            questionsController.handlePreviousClick();
        },true);
    },
    handleNextButton : function (){
        const nextButton = document.getElementById("questionBottomButtonsNextButton");
        nextButton.addEventListener('click', function(){
            questionsController.handleNextClick();
        },true);
    },
    handleClearButton : function (){
        const clearButton = document.getElementById("questionBottomButtonsClearButton");
        clearButton.addEventListener('click', function(){
            const radioButton = document.getElementsByName("questionAndOptionsOptionSelectorGroup");
            radioButton.forEach(e => {
                if(e.checked){
                    e.checked = false;
                    questionsController.setSelectedOptionOfCurrentQuestion(null);
                    navController.decrementNumberOfAnsweredQuestions();
                }
            })
        },true);
    },
    handleMarkButton : function (){
        const markButton = document.getElementById("questionBottomButtonsMarkButton");
        markButton.addEventListener('click', function(){
            const currentQuestion = questionsController.getCurrentQuestion();
            const questionSelector = document.getElementsByClassName("quizNavQuestionSelector")[currentQuestion.id-1];
            const bookmark = document.createElement("div");
            //If question is not marked then mark it
            if(questionSelector.childElementCount === 0){
                bookmark.innerHTML = '<svg viewBox="0 0 24 24" class="bookmarkIcon"><path d="M19 21L12 16L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z" fill="#FFAD3B" fill-rule="evenodd" clip-rule="evenodd" stroke="#FFAD3B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
                //assigning unique id to current icon to ease deletion
                bookmark.firstChild.id = "bookmarkIconOfQuestion" + currentQuestion.id;
                questionSelector.appendChild(bookmark.firstChild);
                navController.incrementNumberOfMarkedQuestions();
            }
            else{
                const bookmarkIconOfCurrentQuestion = document.getElementById("bookmarkIconOfQuestion" + currentQuestion.id);
                questionSelector.removeChild(bookmarkIconOfCurrentQuestion);
                navController.decrementNumberOfMarkedQuestions();
            }
        },true);
    }
}

export {bottomButtonsView};