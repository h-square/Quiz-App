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
        <div class="questionAndOptionsQuestionHeader">
            <p id="questionAndOptionsQuestionNumber">`+ "Question " + currentQuestion.id +`</p>
            <div class="QuestionAndOptionsQuestionAction">
                <div class="reportButtonWrapper">
                    <p>Report</p>
                </div>
            </div>
        </div>
        <p id="questionText">` + currentQuestion.question + `</p>`;
        return questionAndOptionsQuestion;
    },
    createOptions : function(){
        const currentQuestion = questionsController.getCurrentQuestion();
        const questionAndOptionsOptionsWrapper = document.createElement("div");
        questionAndOptionsOptionsWrapper.setAttribute("id","questionAndOptionsOptionsWrapper");
        for(let i=0;i < currentQuestion.options.length; i++){
            questionAndOptionsOptionsWrapper.innerHTML += `
            <label>
                <div class="questionAndOptionsOption">
                    <span class="questionAndOptionsOptionSelector" aria-disabled="false">
                        <span class="questionAndOptionsOptionSelectorRadioButton">
                            <input name="questionAndOptionsOptionSelectorGroup" type="radio">
                        </span>
                    </span>
                    <div class="questionAndOptionsOptionText">`+ currentQuestion.options[i].value +`</div>
                </div>
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