import { combineReducers } from 'redux';
import { questionsReducer } from './questionsReducer.js';
import { answeredQuestionsReducer } from './answeredQuestionsReducer.js';
import { markedQuestionsReducer } from './markedQuestionsReducer.js';

export default combineReducers({questionsReducer, answeredQuestionsReducer, markedQuestionsReducer});