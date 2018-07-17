import React, { Component } from 'react';
export default function TimeDisplay(props){
    let seconds = Math.trunc(props.time/1000);
    let minutes = Math.trunc(seconds/60);
    let hours = Math.trunc(minutes/60);
    if (seconds>=60){
        seconds = seconds - (minutes * 60)
    }
    if (minutes>=60){
        minutes = minutes - (hours * 60)
    }
    return <div>
    <p>{hours}:{minutes}:{seconds}</p>
    </div>;
}