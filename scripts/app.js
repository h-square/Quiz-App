(function (){
    //0-based indexed
    let selectedOptionOfQuestions = [];

    //1-based indexed
    let currentQuestion = 1;

    let questions;

    async function getQuestions(){
        const res = await fetch("./JSON/questions.json");
        if(res.status !== 200){
            throw new Error('Can not fetch the questions!');
        }
        questions = await res.json();
    }
    getQuestions()
        .then(() => {
            loadQuestion(1);
            sectionSummary.loadSectionSummary();
            loadNavButtons();
        })
        .catch(err => console.log(err));

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
            e.addEventListener('click', function(){
                //check if question is selected for the first time
                if(selectedOptionOfQuestions[currentQuestion-1] === null){
                    sectionSummary.increamentNumberOfAnsweredQuestions();
                    //change background color of Question Selector in Nav Bar
                    changeBackgroundOfAnsweredQuestion();
                }
                selectedOptionOfQuestions[currentQuestion-1] = index;
            }, true);
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
            const btn = document.createElement("button");
            btn.className = "quizNavQuestionSelector";
            btn.innerText = i;
            btn.addEventListener('click', function(){
                loadQuestion(i);
            },true);
            document.getElementById("quizNavQuestionSelectorBlock").appendChild(btn);
            selectedOptionOfQuestions.push(null);
        }
    }

    (function handlePreviousButton(){
        const prevButton = document.getElementById("questionBottomButtonsPrevButton");
        prevButton.addEventListener('click', function(){
            if(currentQuestion > 1){
                currentQuestion-=1;
                loadQuestion(currentQuestion);
            }
        },true);
    })();

    (function handleNextButton(){
        const nextButton = document.getElementById("questionBottomButtonsNextButton");
        nextButton.addEventListener('click', function(){
            if(currentQuestion < questions.length){
                currentQuestion +=1;
                loadQuestion(currentQuestion);
            }
        },true);
    })();

    (function handleClearButton(){
        const clearButton = document.getElementById("questionBottomButtonsClearButton");
        clearButton.addEventListener('click', function(){
            var radioButton = document.getElementsByName("questionAndOptionsOptionSelectorGroup");
            radioButton.forEach((e,index) => {
                if(e.checked){
                    e.checked = false;
                    selectedOptionOfQuestions[currentQuestion - 1] = null;
                    sectionSummary.decreamentNumberOfAnsweredQuestions();
                    changeBackgroundOfAnsweredQuestion();
                }
            })
        },true);
    })();

    (function handleMarkButton(){
        const markButton = document.getElementById("questionBottomButtonsMarkButton");
        markButton.addEventListener('click', function(){
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
        },true);
    })();

    (function handleEndTestButton(){
        var endTestButton = document.getElementById("quizEndButton");
        endTestButton.addEventListener('click', function(){
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
        },true);
    })();
})();