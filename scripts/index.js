import {questionsController} from "./controller/questionsController.js";
import {navController} from "./controller/navController.js";

async function fetchQuestions(){
    const res = await fetch("./JSON/questions.json");
    if(res.status !== 200){
        throw new Error('Can not fetch the questions!');
    }
    let questions = null;
    return questions = await res.json();
}

fetchQuestions()
    .then(questions => {
        questionsController.init(questions);
        navController.init(questions.length);
    })
    .catch(err => console.log(err));
