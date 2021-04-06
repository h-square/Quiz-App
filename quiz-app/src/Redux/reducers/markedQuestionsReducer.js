const initState = {
    markedQuestions : new Set()
}

export const markedQuestionsReducer = (state = initState, action)=>{
    switch(action.type){
        case "TOGGLE_MARK":
            const markedQuestions = new Set(state.markedQuestions);
            if(markedQuestions.has(action.payload.questionID)){
                markedQuestions.delete(action.payload.questionID);
            }
            else{
                markedQuestions.add(action.payload.questionID);
            }
            return{
                ...state,
                markedQuestions : markedQuestions
            }
        default:
            return state;
    }
}