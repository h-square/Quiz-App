(function (){
    //0-based indexed
    let selectedOptionOfQuestions = [];

    //1-based indexed
    let currentQuestion = 1;

    let questions;

    function getQuestions(){
        fetch("./JSON/questions.json")
            .then(response => response.json())
            .then(data => {
                questions = data;
                loadQuestion(1);
                sectionSummary.loadSectionSummary();
                loadNavButtons();
            })
            .catch(err => console.log(err));
    }
    getQuestions();

    function createHTMLForQuestion(number){
        const questionAndOptionsQuestion = document.createElement("div");
        questionAndOptionsQuestion.className = "questionAndOptionsQuestion";
        questionAndOptionsQuestion.innerHTML = `
        <div class="questionAndOptionsQuestionHeader">
            <p id="questionAndOptionsQuestionNumber">`+ "Question " + number +`</p>
            <div class="QuestionAndOptionsQuestionAction">
                <div class="reportButtonWrapper">
                    <p>Report</p>
                </div>
            </div>
        </div>
        <p id="questionText">` + questions[number-1].question + `</p>`;
        return questionAndOptionsQuestion;
    }

    function createHTMLForOptions(number){
        const questionAndOptionsOptionsWrapper = document.createElement("div");
        questionAndOptionsOptionsWrapper.className = "questionAndOptionsOptionsWrapper";
        for(let i=0;i < questions[number-1].options.length; i++){
            questionAndOptionsOptionsWrapper.innerHTML += `
            <label>
                <div class="questionAndOptionsOption">
                    <span class="questionAndOptionsOptionSelector" aria-disabled="false">
                        <span class="questionAndOptionsOptionSelectorRadioButton">
                            <input name="questionAndOptionsOptionSelectorGroup" type="radio">
                        </span>
                    </span>
                    <div class="questionAndOptionsOptionText">`+ questions[number-1].options[i].value +`</div>
                </div>
            </label>`;
        }
        return questionAndOptionsOptionsWrapper;
    }

    function changeBackgroundOfAnsweredQuestion(){
        const questionSelector = document.getElementsByClassName("quizNavQuestionSelector")[currentQuestion-1];
        if(questionSelector.style.color === "rgb(8, 189, 128)"){
            questionSelector.style.backgroundColor = "rgb(255, 255, 255)";
            questionSelector.style.color = "#3C4852";
        }
        else{
            questionSelector.style.backgroundColor = "rgb(230, 248, 242)";
            questionSelector.style.color = "rgb(8, 189, 128)";
        }           
    }

    function loadQuestion(number){
        //change current question
        currentQuestion = number;

        const questionAndOptions = document.getElementById("questionAndOptions");
        const questionAndOptionsQuestion = createHTMLForQuestion(number);
        const questionAndOptionsOptionsWrapper = createHTMLForOptions(number);
        
        //update the view
        if(questionAndOptions.childElementCount === 0){
            questionAndOptions.appendChild(questionAndOptionsQuestion);
            questionAndOptions.appendChild(questionAndOptionsOptionsWrapper);
        }
        else{
            questionAndOptions.replaceChild(questionAndOptionsQuestion, questionAndOptions.children[0]);
            questionAndOptions.replaceChild(questionAndOptionsOptionsWrapper, questionAndOptions.children[1]);
        }

        //setup methods for radio buttons
        setRadioButtonsMethod();
    }

    function setRadioButtonsMethod(){
        const radioButton = document.getElementsByName("questionAndOptionsOptionSelectorGroup");
        radioButton.forEach((e,index) => {
            if(selectedOptionOfQuestions[currentQuestion-1] === index){
                e.checked = true;
            }
            else{
                e.checked = false;
            }
            e.onclick = function(){
                //check if question is selected for the first time
                if(selectedOptionOfQuestions[currentQuestion-1] === null){
                    sectionSummary.increamentNumberOfAnsweredQuestions();
                    //change background color of Question Selector in Nav Bar
                    changeBackgroundOfAnsweredQuestion();
                }
                selectedOptionOfQuestions[currentQuestion-1] = index;
            }
        })
    }

    let sectionSummary = {
        answered : 0,
        marked : 0,
        getNumberOfAnsweredQuestions : function (){
            return this.answered;
        },
        loadSectionSummary : function (){
            const summary = document.getElementsByClassName("quizNavSectionSummaryText");
            summary[0].innerHTML = this.answered + " answered";
            summary[1].innerHTML = this.marked + " marked";
            summary[2].innerHTML = (questions.length - this.answered) + " unanswered";
        },
        increamentNumberOfAnsweredQuestions : function (){
            this.answered+=1;
            this.loadSectionSummary();
        },
        decreamentNumberOfAnsweredQuestions : function (){
            this.answered-=1;
            this.loadSectionSummary();
        },
        increamentNumberOfMarkedQuestions : function (){
            this.marked+=1;
            this.loadSectionSummary();
        },
        decreamentNumberOfMarkedQuestions : function (){
            this.marked-=1;
            this.loadSectionSummary();
        }
    }

    function loadNavButtons(){
        for(let i=1; i<=questions.length;i++){
            var btn = document.createElement("button");
            btn.className = "quizNavQuestionSelector";
            btn.innerText = i;
            btn.onclick = function(){
                loadQuestion(i);
            };
            document.getElementById("quizNavQuestionSelectorBlock").appendChild(btn);
            selectedOptionOfQuestions.push(null);
        }
    }

    (function handlePreviousButton(){
        const prevButton = document.getElementById("questionBottomButtonsPrevButton");
        prevButton.onclick = function(){
            if(currentQuestion > 1){
                currentQuestion-=1;
                loadQuestion(currentQuestion);
            }
        }
    })();

    (function handleNextButton(){
        const nextButton = document.getElementById("questionBottomButtonsNextButton");
        nextButton.onclick = function(){
            if(currentQuestion < questions.length){
                currentQuestion +=1;
                loadQuestion(currentQuestion);
            }
        }
    })();

    (function handleClearButton(){
        const clearButton = document.getElementById("questionBottomButtonsClearButton");
        clearButton.onclick = function(){
            var radioButton = document.getElementsByName("questionAndOptionsOptionSelectorGroup");
            radioButton.forEach((e,index) => {
                if(e.checked){
                    e.checked = false;
                    selectedOptionOfQuestions[currentQuestion - 1] = null;
                    sectionSummary.decreamentNumberOfAnsweredQuestions();
                    changeBackgroundOfAnsweredQuestion();
                }
            })
        }
    })();

    (function handleMarkButton(){
        const markButton = document.getElementById("questionBottomButtonsMarkButton");
        markButton.onclick = function(){
            const questionSelector = document.getElementsByClassName("quizNavQuestionSelector")[currentQuestion-1];
            const bookmark = document.createElement("div");
            //If question is not marked then mark it
            if(questionSelector.childElementCount === 0){
                bookmark.innerHTML = '<svg viewBox="0 0 24 24" class="bookmarkIcon"><path d="M19 21L12 16L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z" fill="#FFAD3B" fill-rule="evenodd" clip-rule="evenodd" stroke="#FFAD3B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
                //assigning unique id to current icon to ease deletion
                bookmark.firstChild.id = "bookmarkIconOfQuestion" + currentQuestion;
                questionSelector.appendChild(bookmark.firstChild);
                sectionSummary.increamentNumberOfMarkedQuestions();
            }
            else{
                var bookmarkIconOfCurrentQuestion = document.getElementById("bookmarkIconOfQuestion" + currentQuestion);
                questionSelector.removeChild(bookmarkIconOfCurrentQuestion);
                sectionSummary.decreamentNumberOfMarkedQuestions();
            }
        }
    })();

    (function handleEndTestButton(){
        var endTestButton = document.getElementById("quizEndButton");
        endTestButton.onclick = function(){
            var warning;
            if(sectionSummary.getNumberOfAnsweredQuestions() === questions.length){
                warning = "You have answered all the questions!";
            }
            else{
                warning = "You have not answered " + (questions.length - sectionSummary.getNumberOfAnsweredQuestions()) + " questions!";
            }
            warning = warning + "\nAre you sure you want to end the test?"
            if(confirm(warning)){
                window.close();
            }
        }
    })();
})();