import React, {Component} from 'react';
// import timer from '../App.css';
import styles from '../App.module.css';

class Timer extends Component {
    state = {
        hours: 48,
        minutes: 30,
        seconds: 4
    }

    componentDidMount() {
        document.body.style.backgroundColor = "black"
        this.myInterval = setInterval(() => {
            const { hours, minutes, seconds } = this.state

            if(seconds > 0 ) {
                this.setState(( { seconds }) => ({
                    seconds: seconds - 1
                }))
            }

            if(seconds === 0 ) {
                if(minutes === 0 ) {
                    if(hours === 0) {
                        clearInterval(this.myInterval)
                    } else {
                        this.setState( ({ hours }) => ({
                            hours: hours - 1,
                            seconds: 59,
                            minutes: 59
                        }))
                    }
                } else {
                    this.setState( ({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { hours, minutes, seconds } = this.state
        return (
            <div className={styles.timer}>
                <h1>Time Remaining: { hours } : { minutes } : { seconds } </h1>
            </div>
        )
    }
}

export default Timer;

