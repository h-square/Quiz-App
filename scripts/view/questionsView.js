import {questionsController} from "../controller/questionsController.js";

let questionsView = {
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
        for(let i=0;i < currentQuestion.options.length; i++){
            questionAndOptionsOptionsWrapper.innerHTML += `
                <label class="questionAndOptionsOption">
                    <input class="questionAndOptionsOptionSelector" name="questionAndOptionsOptionSelectorGroup" type="radio">
                    <p class="questionAndOptionsOptionText">`+ currentQuestion.options[i].value +`</p>
                </label>`;
        }
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
        const questionAndOptions = document.getElementById("questionAndOptions");
        const questionAndOptionsQuestion = this.createQuestion();
        const questionAndOptionsOptionsWrapper = this.createOptions();
        
        //update the view
        if(questionAndOptions.childElementCount === 0){
            questionAndOptions.appendChild(questionAndOptionsQuestion);
            questionAndOptions.appendChild(questionAndOptionsOptionsWrapper);
        }
        else{
            questionAndOptions.replaceChild(questionAndOptionsQuestion, questionAndOptions.children[0]);
            questionAndOptions.replaceChild(questionAndOptionsOptionsWrapper, questionAndOptions.children[1]);
        }
        this.renderRadioButtons();
    }
}

export {questionsView};