import React from 'react';
import './App.css';
import _ from 'lodash';

import Header from './HeaderComponents/index.js';
import QuestionWrapper from './QuestionComponents/index.js';
import QuestionActionButtons from './QuestionActionComponents/QuestionActionButtons.js';
import NavWrapper from './NavComponents/index.js';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			questions : {},
			currentQuestion : null,
			answeredQuestions : new Map(),
			markedQuestions : new Set(),
			loading : true
		}
		
		this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
		this.insertIntoAnsweredQuestions = this.insertIntoAnsweredQuestions.bind(this);
		this.removeFromAnsweredQuestions = this.removeFromAnsweredQuestions.bind(this);
		this.toggleMark = this.toggleMark.bind(this);
	}

	componentDidMount(){
		fetch('./JSON/questions.json')
			.then( response => response.json())
			.then( data => {
				const questions = _.keyBy(data,function(o){
					return o.id.toString();
				});
				this.setState({
					questions : questions,
					currentQuestion : questions[data[0].id]
				});
			})
			.catch( err=>{console.log(err);})
			.finally(()=>{
				this.setState({
					loading : false
				})
			} );
	}

	setCurrentQuestion(questionID){
		if(this.state.questions[questionID]){
			this.setState((prevState)=>({
				currentQuestion : prevState.questions[questionID]
			}));
		}
	}

	insertIntoAnsweredQuestions(questionID, optionID){
		const answeredQuestions = new Map(this.state.answeredQuestions);
		answeredQuestions.set(questionID, optionID);
		this.setState({
			answeredQuestions : answeredQuestions
		});
	}

	removeFromAnsweredQuestions(questionID){
		const answeredQuestions = new Map(this.state.answeredQuestions);
		answeredQuestions.delete(questionID);
		this.setState({
			answeredQuestions : answeredQuestions
		});
	}

	toggleMark(questionID){
		const markedQuestions = new Set(this.state.markedQuestions);
		if(markedQuestions.has(questionID)){
			markedQuestions.delete(questionID);
		}
		else{
			markedQuestions.add(questionID);
		}
		this.setState({
			markedQuestions : markedQuestions
		})
	}

	render(){
		if(this.state.loading){
			return(
				<div>loading...</div>
			);
		}
		return (
			<div className="container">
				<div className="quizAttemptWrapper">
					<div className="quizQuestionWrapper">
						<Header />
						<QuestionWrapper
							questionNumber = {_.keys(this.state.questions).indexOf(this.state.currentQuestion.id.toString()) + 1}
							currentQuestion = {this.state.currentQuestion}
							answeredOption = {this.state.answeredQuestions.get(this.state.currentQuestion.id)}
							changeAnswer = {this.insertIntoAnsweredQuestions}
						/>
						<QuestionActionButtons
							questionIDs = {_.keys(this.state.questions)}
							currentQuestion = {this.state.currentQuestion}
							gotoQuestion = {this.setCurrentQuestion}
							handleClearClick = {this.removeFromAnsweredQuestions}
							handleMarkClick = {this.toggleMark}
						/>
					</div>
					<NavWrapper 
						questions = {this.state.questions}
						answeredQuestions = {this.state.answeredQuestions}
						markedQuestions = {this.state.markedQuestions}
						setCurrentQuestion = {this.setCurrentQuestion}
					/>
				</div>
			</div>
		);
	}
}

export default App;