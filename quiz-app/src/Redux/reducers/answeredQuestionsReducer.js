const initState = {
    answeredQuestions : new Map()
}

export const answeredQuestionsReducer = (state = initState, action)=>{
    const answeredQuestions = new Map(state.answeredQuestions);
    switch(action.type){
        case "ADD_ANSWER":
            answeredQuestions.set(action.payload.questionID, action.payload.optionID);
            return{
                ...state,
                answeredQuestions : answeredQuestions
            }
        case "DELETE_ANSWER":
            answeredQuestions.delete(action.payload.questionID)
            return{
                ...state,
                answeredQuestions : answeredQuestions
            }
        default:
            return state;
    }
}