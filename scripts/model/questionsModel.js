const questionsModel = {
    questions : null,
    currentQuestion : null,
    selectedOptionOfQuestions : [],
    init : function(questions){
        this.questions = questions;
        this.currentQuestion = this.questions[0];
        this.questions.forEach(() => {
            this.selectedOptionOfQuestions.push(null);
        });
    }
}

export {questionsModel};