import {questionsController} from "../controller/questionsController.js";
import {ids} from "../registry.js";

const questionsView = {
    init : function(){
        this.renderCurrentQuestion();
    },
    createQuestion : function(){
        const currentQuestion = questionsController.getCurrentQuestion();
        const questionAndOptionsQuestion = document.createElement("div");
        questionAndOptionsQuestion.setAttribute("class","questionAndOptionsQuestion");
        questionAndOptionsQuestion.innerHTML = `
            <p id="questionAndOptionsQuestionNumber">`+ "Question " + currentQuestion.id +`</p>
            <p id="questionText"> ${currentQuestion.question} </p>`;
        return questionAndOptionsQuestion;
    },
    createOptions : function(){
        const currentQuestion = questionsController.getCurrentQuestion();
        const questionAndOptionsOptionsWrapper = document.createElement("div");
        questionAndOptionsOptionsWrapper.setAttribute("id","questionAndOptionsOptionsWrapper");
        questionAndOptionsOptionsWrapper.innerHTML = currentQuestion.options.reduce((total, option)=>{
            return total +
            `<label class="questionAndOptionsOption">
                <input class="questionAndOptionsOptionSelector" name="questionAndOptionsOptionSelectorGroup" type="radio">
                <p class="questionAndOptionsOptionText">`+ option.value +`</p>
            </label>`;
        },"");
        return questionAndOptionsOptionsWrapper;
    },
    renderRadioButtons : function(){
        const radioButton = document.getElementsByName("questionAndOptionsOptionSelectorGroup");
        radioButton.forEach((e,index) => {
            if(questionsController.getSelectedOptionOfCurrentQuestion() === index){
                e.checked = true;
            }
            else{
                e.checked = false;
            }
            e.addEventListener('click', function(){
                //check if question is selected for the first time
                if(questionsController.getSelectedOptionOfCurrentQuestion() === null){
                    questionsController.incrementNumberOfAnsweredQuestions();
                }
                questionsController.setSelectedOptionOfCurrentQuestion(index);
            }, true);
        });
    },
    renderCurrentQuestion : function(){
        const questionAndOptions = document.getElementById(ids.QUESTIONS_AND_OPTIONS);
        const questionAndOptionsQuestion = this.createQuestion();
        const questionAndOptionsOptionsWrapper = this.createOptions();
        questionAndOptions.innerHTML = "";
        questionAndOptions.appendChild(questionAndOptionsQuestion);
        questionAndOptions.appendChild(questionAndOptionsOptionsWrapper);
        this.renderRadioButtons();
    }
}

export {questionsView};