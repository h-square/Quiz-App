export const addAnswerOfQuestion = (questionID, optionID) =>{
    return{
        type : "ADD_ANSWER",
        payload : {
            questionID : questionID,
            optionID : optionID
        }
    }
}

export const removeAnswerOfQuestion = (questionID) =>{
    return{
        type : "DELETE_ANSWER",
        payload : {
            questionID : questionID
        }
    }
}