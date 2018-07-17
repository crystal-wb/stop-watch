import React, { Component } from 'react';
import StartPauseButton from './StartPauseButton';
import ClearButton from './ClearButton';
import TimeDisplay from "./TimeDisplay.js";
class Stopwatch extends Component {
    constructor(){
        super();
        this.state = {
             isRunning: false,
             elapsedTime: 0,
         }
         
        this.onStartOrPause=this.onStartOrPause.bind(this);
        this.tick = this.tick.bind(this);
        this.onClear = this.onClear.bind(this);
        
    }
    onStartOrPause(){
        let isRunning = !this.state.isRunning;
        
        this.setState({
            //  isRunning: !this.state.isRunning,
            isRunning: isRunning,
         });
        if (isRunning){
            this.intervalId= setInterval(this.tick, 10);
        } else {
            clearInterval(this.intervalId);
        }
     }
    tick() {
        this.setState({
            elapsedTime: this.state.elapsedTime + 10
        });
    }
    
    onClear() {
        this.setState({
            elapsedTime: 0,
            isRunning: false
        });
    }
    render() {
        return(
            <div>
                <br/>
                <TimeDisplay time={this.state.elapsedTime} />
                <br/>
                <StartPauseButton isRunning={this.state.isRunning} onStartOrPause={this.onStartOrPause}/>
                <ClearButton onClick={this.onClear} />
            </div>
        );
    }
}

export default Stopwatch;