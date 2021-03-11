(function (){
    //0-based indexed
    var selectedOption = [];

    //1-based indexed
    var currentQuestion = 1;

    var questions;
    var answered = 0, marked = 0;

    async function getQuestions(){
        await fetch("./questions.json")
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
            .catch(err =>{
                console.log(err);
            });
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
                //check if question is marked for the first time
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
        var prevButton = document.getElementById("questionBottomButtonsPrevButton");
        prevButton.onclick = function(){
            if(currentQuestion > 1){
                currentQuestion-=1;
                loadQuestion(currentQuestion);
            }
        }

        var nextButton = document.getElementById("questionBottomButtonsNextButton");
        nextButton.onclick = function(){
            if(currentQuestion < questions.length){
                currentQuestion +=1;
                loadQuestion(currentQuestion);
            }
        }

        var markButton = document.getElementById("questionBottomButtonsMarkButton");
        markButton.onclick = function(){
            
        }
    })();
})();