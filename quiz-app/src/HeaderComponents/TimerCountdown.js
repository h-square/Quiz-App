import React, {Component} from 'react';
import '../App.css';

class TimerCountDown extends Component{
    constructor(props){
        super(props);

        this.state = {
            hours : 3,
            minutes : 0,
            seconds : 0
        }

        this.subtractASecond = this.subtractASecond.bind(this);
    }

    componentDidMount(){
        this.timer = setInterval(this.subtractASecond, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        alert("Your time is up!")
        //close the test after time after timer ends
        window.close();
    }
    
    subtractASecond(){
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;
        let hours = this.state.hours;
        seconds-=1;
        if(seconds < 0){
            seconds = 59;
            minutes-=1;
            if(minutes < 0){
                minutes = 59;
                hours-=1;
                if(hours < 0){
                    clearInterval(this.timer);
                    alert("Your time is up!")
                    //close the test after time after timer ends
                    window.close();
                }
            }
        }
        this.setState({
            seconds : seconds,
            minutes : minutes,
            hours : hours
        })
    };

    render(){
        const timeLeft = ("0" + this.state.hours).slice(-2) + " : " + ("0" + this.state.minutes).slice(-2) + " : " + ("0" + this.state.seconds).slice(-2);
        return(
            <div id="timerCountdown">
                {timeLeft}
            </div>
        );
    }
}

export default TimerCountDown;