import React, { Component } from 'react';
// export default function StartPauseButton(props) {
//     let text;
//     if(props.isRunning) {
//         text = 'Pause'
//     } else{
//         text = 'Start'
//     }
//     return <button type="button">{text}</button>;
// }

class StartPauseButton extends Component {
     
    render (){
    let text = 'Start';
    if(this.props.isRunning) {
        text = 'Pause'
    }
    return <button type="button" onClick={this.props.onStartOrPause}>{text}</button>;
    }
}

export default StartPauseButton;