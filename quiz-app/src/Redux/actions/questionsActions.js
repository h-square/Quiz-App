export const setQuestions = (questions) =>{
    return{
        type : "SET_QUESTIONS",
        payload : {
            questions : questions
        }
    }
}

export const setCurrentQuestion = (questionID) =>{
    return {
        type : "SET_CURRENT_QUESTION",
        payload : {
            questionID : questionID
        }
    }
}