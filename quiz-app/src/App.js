import React from 'react';
import './App.css';
import _ from 'lodash';
import { connect } from 'react-redux';
import { classNames, dataLinks } from './registry.js';

import Header from './HeaderComponents/index.js';
import QuestionWrapper from './QuestionComponents/index.js';
import QuestionActionButtons from './QuestionActionComponents/index.js';
import NavWrapper from './NavComponents/index.js';
import { setCurrentQuestion, setQuestions } from './Redux/actions/questionsActions';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			loading : true
		}
	}

	componentDidMount(){
		fetch(dataLinks.MATHS)
			.then( response => response.json())
			.then( data => {
				const questions = _.keyBy(data,function(o){
					return o.id.toString();
				});
				this.props.setQuestions(questions);
				this.props.setCurrentQuestion(data[0].id);
			})
			.catch( err=>{console.log(err);})
			.finally(()=>{
				this.setState({
					loading : false
				})
			} );
	}

	render(){
		if(this.state.loading){
			return(
				<div>loading...</div>
			);
		}
		return (
			<div className={classNames.CONTAINER}>
				<div className={classNames.QUIZ_WRAPPER}>
					<div className={classNames.LEFT_VIEW_WRAPPER}>
						<Header />
						<QuestionWrapper/>
						<QuestionActionButtons/>
					</div>
					<NavWrapper/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
}

const mapDispathToProps = (dispatch) =>{
	return{
		setQuestions : (questions) =>{ dispatch(setQuestions(questions)) },
		setCurrentQuestion : (questionID) =>{
			dispatch(setCurrentQuestion(questionID))
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(App);