import {questionsController} from "./controller/questionsController.js";
import {navController} from "./controller/navController.js";
import {dataFiles} from "./registry.js";

async function fetchQuestions(){
    const res = await fetch(dataFiles.mathQuestions);
    if(res.status !== 200){
        throw new Error('Can not fetch the questions!');
    }
    const questions = await res.json();
    return questions;
}

fetchQuestions()
    .then(questions => {
        questionsController.init(questions);
        navController.init();
    })
    .catch(err => console.log(err));