import React from 'react';
import './App.css';

import Header from './HeaderComponents/index.js';
import QuestionWrapper from './QuestionComponents/index.js';
import QuestionActionButtons from './QuestionActionComponents/QuestionActionButtons.js';
import NavHeader from './NavComponents/NavHeader.js';
import NavSectionSummary from './NavComponents/NavSectionSummary.js';
import QuestionSelectorGrid from './NavComponents/QuestionSelectorGrid.js';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			questions : [],
			currentQuestion : null,
			selectedOptionOfQuestions : [],
			answeredCount : 0,
			markedCount : 0,
			loading : true
		}

		this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
		this.setSelectedOptionOfCurrentQuestion = this.setSelectedOptionOfCurrentQuestion.bind(this);
		this.incrementNumberOfAnsweredQuestions = this.incrementNumberOfAnsweredQuestions.bind(this);
		this.decrementNumberOfAnsweredQuestions = this.decrementNumberOfAnsweredQuestions.bind(this);
		this.toggleMarkOfCurrentQuestion = this.toggleMarkOfCurrentQuestion.bind(this);
	}

	componentDidMount(){
		fetch('./JSON/questions.json')
			.then( response => response.json())
			.then( (data) => {
				const selectedOptionOfQuestions = [];
				data.forEach((element) => {
					selectedOptionOfQuestions.push(null);
					element.marked = false;
				});
				this.setState({
					questions : data,
					currentQuestion : data[0],
					selectedOptionOfQuestions : selectedOptionOfQuestions
				});
			})
			.catch( err=>{
				console.log(err);
			})
			.finally( ()=>{
				this.setState({
					loading : false
				})
			} );
	}

	setCurrentQuestion(idNumber){
		if(idNumber>=1 && idNumber<=this.state.questions.length){
			this.setState((state)=>({
				currentQuestion : state.questions[idNumber-1]
			}));
		}
	}

	setSelectedOptionOfCurrentQuestion(optionID){
		const selectedOptionOfQuestions = this.state.selectedOptionOfQuestions;
		selectedOptionOfQuestions[this.state.currentQuestion.id - 1] = optionID;
		this.setState(prevState => ({
			selectedOptionOfCurrentQuestion : selectedOptionOfQuestions
		}));
	}

	incrementNumberOfAnsweredQuestions(){
		this.setState((prevState)=>({
			answeredCount : prevState.answeredCount + 1
		}));
	}

	decrementNumberOfAnsweredQuestions(){
		if(this.state.selectedOptionOfQuestions[this.state.currentQuestion.id - 1] !== null){
			this.setState((prevState)=>({
				answeredCount : prevState.answeredCount - 1
			}));
		}
	}

	toggleMarkOfCurrentQuestion(){
		const currentQuestion = this.state.currentQuestion;
		let markedCount = this.state.markedCount;
		if(currentQuestion.marked){
			markedCount -= 1;
		}
		else{
			markedCount += 1;
		}
		currentQuestion.marked = !currentQuestion.marked;
		this.setState({
			currentQuestion : currentQuestion,
			markedCount : markedCount
		});
	}

	render(){
		if(this.state.loading){
			return(
				<div>
					loading...
				</div>
			);
		}
		return (
			<div className="container">
				<div className="quizAttemptWrapper">
					<div className="quizQuestionWrapper">
						<Header />
						<QuestionWrapper 
							questions={this.state.questions} 
							currentQuestion={this.state.currentQuestion} 
							selectedOptionOfQuestions={this.state.selectedOptionOfQuestions}
							incrementNumberOfAnsweredQuestions={this.incrementNumberOfAnsweredQuestions} 
							setSelectedOptionOfCurrentQuestion={this.setSelectedOptionOfCurrentQuestion}
						/>
						<QuestionActionButtons 
							currentQuestion={this.state.currentQuestion} 
							numberOfQuestions={this.state.questions.length} 
							setCurrentQuestion={this.setCurrentQuestion} 
							setSelectedOptionOfCurrentQuestion={this.setSelectedOptionOfCurrentQuestion}
							decrementNumberOfAnsweredQuestions={this.decrementNumberOfAnsweredQuestions} 
							toggleMarkOfCurrentQuestion={this.toggleMarkOfCurrentQuestion}
						/>
					</div>
					<div className="quizNavWrapper">
						<div className="quizNavWrapperFixed">
							<NavHeader 
								unansweredCount={this.state.questions.length - this.state.answeredCount}
							/>
							<div id="quizNav">
                        		<div className="quizNavSection">
									<div className="quizNavSectionInfo">
										<h5 className="quizNavSectionName">Mathematics</h5>
									</div>
									<NavSectionSummary 
										answeredCount={this.state.answeredCount} 
										markedCount={this.state.markedCount} 
										unansweredCount={this.state.questions.length - this.state.answeredCount}
									/>
									<QuestionSelectorGrid 
										questions={this.state.questions} 
										selectedOptionOfQuestions={this.state.selectedOptionOfQuestions}
										setCurrentQuestion={this.setCurrentQuestion}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;