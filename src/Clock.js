import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Clock extends Component {
  constructor() {
    super();

    this.state = {
      dateTime: null,
      // new Date(),
      loading: true
    };

    this.tick = this.tick.bind(this);
    this.setTime = this.setTime.bind(this);
  }
  setTime(result) {
    this.setState({
      dateTime: new Date(result.currentDateTime),
      loading: false
    })
  this.intervalId = setInterval(this.tick, 1000);
  }
  componentDidMount() {
    let convertToJson = (res) => res.json();
    fetch("http://worldclockapi.com/api/json/est/now").then(convertToJson).then(this.setTime,
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    // console.log('Did somebody call for a big blue superhero!');
    this.setState({
      dateTime: new Date(this.state.dateTime.setSeconds(this.state.dateTime.setSeconds() + 1))
    });
  }

  render() {
    if(this.state.loading){
      return(
        <p>loading...</p>);
    }
    let time = this.state.dateTime.toLocaleTimeString();
    let formattedDate = this.state.dateTime.toLocaleDateString();

    return (
      <div>
        <Typography variant='display1'>{time}</Typography>
        <Typography variant='body2'>on</Typography>
        <Typography variant='display1'>{formattedDate}</Typography>
      </div>
    );
  }
}

export default Clock;
