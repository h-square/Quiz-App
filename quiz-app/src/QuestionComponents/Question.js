import React, {Component} from 'react';
import '../App.css';

class Question extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        const question = <div className="questionAndOptionsQuestion">
            <p id="questionAndOptionsQuestionNumber">Question {this.props.currentQuestion.id}</p>
            <p id="questionText">{this.props.currentQuestion.question}</p>
        </div>;
        return(
            <div>
                {question}
            </div>
        );
    }
}

export default Question;