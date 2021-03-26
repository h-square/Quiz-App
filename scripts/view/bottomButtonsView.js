import {questionsController} from "../controller/questionsController.js";
import {navController} from "../controller/navController.js";
import {icons, ids} from "../registry.js";
import { bottomButtonsController } from "../controller/bottomButtonsController.js";

const bottomButtonsView = {
    init : function(){
        this.handlePreviousButton();
        this.handleNextButton();
        this.handleClearButton();
        this.handleMarkButton();
    },
    handlePreviousButton : function (){
        const prevButton = document.getElementById(ids.PREV_BUTTON);
        prevButton.addEventListener('click', function(){
            questionsController.handlePreviousClick();
        });
    },
    handleNextButton : function (){
        const nextButton = document.getElementById(ids.NEXT_BUTTON);
        nextButton.addEventListener('click', function(){
            questionsController.handleNextClick();
        });
    },
    handleClearButton : function (){
        const clearButton = document.getElementById(ids.CLEAR_BUTTON);
        clearButton.addEventListener('click', function(){
            const radioButton = document.getElementsByName("questionAndOptionsOptionSelectorGroup");
            bottomButtonsController.clearCheckedOption(radioButton);
        });
    },
    createBookmarkIconOfQuestion : function(idNumber){
        const bookmark = document.createElement("div");
        bookmark.innerHTML = icons.coloredBookmarkIcon;
        bookmark.firstChild.id = "bookmarkIconOfQuestion" + idNumber;
        return bookmark.firstChild;
    },
    handleMarkButton : function (){
        const markButton = document.getElementById(ids.MARK_BUTTON);
        markButton.addEventListener('click', ()=>{
            const currentQuestion = bottomButtonsController.getCurrentQuestion();
            const questionSelector = document.getElementsByClassName("quizNavQuestionSelector")[currentQuestion.id-1];
            const bookmarkIconOfCurrentQuestion = this.createBookmarkIconOfQuestion(currentQuestion.id);
            //If question is not marked then mark it
            if(questionSelector.childElementCount === 0){
                questionSelector.appendChild(bookmarkIconOfCurrentQuestion);
                bottomButtonsController.incrementNumberOfMarkedQuestions();
            }
            else{
                questionSelector.innerHTML = currentQuestion.id;
                bottomButtonsController.decrementNumberOfMarkedQuestions();
            }
        });
    }
}

export {bottomButtonsView};