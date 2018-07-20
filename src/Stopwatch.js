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
             previousTick: new Date()
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
        let now = new Date();
        this.setState({
            // elapsedTime: this.state.elapsedTime + 10
            elapsedTime: this.state.elapsedTime + (now - this.state.previousTick),
            previousTick: now
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
                <ClearButton onClear={this.onClear} isdisabled={this.state.isRunning || this.state.elapsedTime === 0 }/>
            </div>
        );
    }
}

export default Stopwatch;