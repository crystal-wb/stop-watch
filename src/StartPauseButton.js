import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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
    return <Button variant='contained' style={{margin: '1em'}} color="primary" type="button" onClick={this.props.onStartOrPause}>{text}</Button>;
    }
}

export default StartPauseButton;