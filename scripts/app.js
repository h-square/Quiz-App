(function (){
    //0-based indexed
    let selectedOption = [];

    //1-based indexed
    let currentQuestion = 1;

    let questions;
    let answered = 0, marked = 0;

    function getQuestions(){
        fetch("./JSON/questions.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                questions = data;
                loadQuestion(1);
                loadSectionSummary();
                setRadioButtonsMethod();
                loadNavButtons();
            })
            .catch(err => console.log(err));
    }
    getQuestions();

    function loadNavButtons(){
        for(let i=1; i<=questions.length;i++){
            var btn = document.createElement("BUTTON");
            btn.className = "quizNavQuestionSelector";
            btn.innerText = i;
            btn.onclick = function(){
                loadQuestion(i);
            };
            document.getElementById("quizNavQuestionSelectorBlock").appendChild(btn);
            selectedOption.push(null);
        }
    }

    function loadQuestion(number){
        document.getElementById("questionAndOptionsQuestionNumber").innerText = "Question " + number;
        document.getElementById("questionText").innerText = questions[number-1].question;
        for(let i=0; i < document.getElementsByClassName("questionAndOptionsOptionText").length;i++){
            document.getElementsByClassName("questionAndOptionsOptionText")[i].innerHTML = questions[number-1].options[i].value;
        }
        //change current question
        currentQuestion = number;

        var radioButton = document.getElementsByName("questionAndOptionsOptionSelectorGroup");
        for(var i=0;i<radioButton.length;i++){
            if(selectedOption[currentQuestion-1] === i){
                radioButton[i].checked = true;
            }
            else{
                radioButton[i].checked = false;
            }
        }
    }

    function loadSectionSummary(){
        var summary = document.getElementsByClassName("quizNavSectionSummaryText");
        summary[0].innerHTML = answered + " answered";
        summary[1].innerHTML = marked + " marked";
        summary[2].innerHTML = (questions.length - answered) + " unanswered";
    }

    function setRadioButtonsMethod(){
        var radioButton = document.getElementsByName("questionAndOptionsOptionSelectorGroup");
        radioButton.forEach((e,index) => {
            e.onclick = function(){
                //check if question is selected for the first time
                if(selectedOption[currentQuestion-1]===null){
                    answered += 1;
                    loadSectionSummary();
                    //change color of the Question
                    document.getElementsByClassName("quizNavQuestionSelector")[currentQuestion-1].style.backgroundColor = "rgb(230, 248, 242)";
                    document.getElementsByClassName("quizNavQuestionSelector")[currentQuestion-1].style.color = "rgb(8, 189, 128)";
                }
                selectedOption[currentQuestion-1] = index;
            }
        })
    }

    (function handleBottomButtons(){
        const prevButton = document.getElementById("questionBottomButtonsPrevButton");
        prevButton.onclick = function(){
            if(currentQuestion > 1){
                currentQuestion-=1;
                loadQuestion(currentQuestion);
            }
        }

        const nextButton = document.getElementById("questionBottomButtonsNextButton");
        nextButton.onclick = function(){
            if(currentQuestion < questions.length){
                currentQuestion +=1;
                loadQuestion(currentQuestion);
            }
        }

        const clearButton = document.getElementById("questionBottomButtonsClearButton");
        clearButton.onclick = function(){
            var radioButton = document.getElementsByName("questionAndOptionsOptionSelectorGroup");
            radioButton.forEach((e,index) => {
                if(e.checked){
                    e.checked = false;
                    selectedOption[currentQuestion - 1] = null;
                    answered -=1;
                    loadSectionSummary();
                    const questionSelector = document.getElementsByClassName("quizNavQuestionSelector")[currentQuestion-1];
                    questionSelector.style.backgroundColor = "rgb(255, 255, 255)";
                    questionSelector.style.color = "#3C4852";
                }
            })
        }

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
                marked += 1;
                loadSectionSummary();
            }
            else{
                marked -= 1;
                loadSectionSummary();
                var bookmarkIconOfCurrentQuestion = document.getElementById("bookmarkIconOfQuestion" + currentQuestion);
                questionSelector.removeChild(bookmarkIconOfCurrentQuestion);
            }
        }
    })();

    (function handleEndTestButton(){
        var endTestButton = document.getElementById("quizEndButton");
        endTestButton.onclick = function(){
            var warning;
            if(answered === questions.length){
                warning = "You have answered all the questions!";
            }
            else{
                warning = "You have not answered " + (questions.length - answered) + " questions!";
            }
            warning = warning + "\nAre you sure you want to end the test?"
            if(confirm(warning)){
                window.close();
            }
        }
    })();
})();