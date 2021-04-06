const initState = {
    questions : {},
    currentQuestion : null
}

export const questionsReducer = (state = initState, action)=>{
    switch(action.type){
        case "SET_QUESTIONS":
            return {
                ...state,
                questions : action.payload.questions
            }
        case "SET_CURRENT_QUESTION":
            if(state.questions[action.payload.questionID]){
                return{
                    ...state,
                    currentQuestion : {...state.questions}[action.payload.questionID]
                }
            }
            else{
                return state;
            }
        default : 
            return state;
    }
}