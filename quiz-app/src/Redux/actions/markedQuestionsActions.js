export const toggleMark = (questionID) =>{
    return{
        type : "TOGGLE_MARK",
        payload : {
            questionID : questionID
        }
    }
}