import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {

    this.setState((prevState, props) => ({
        date: new Date(),
        count: prevState.count + 1
      }));

    // this.setState({
    //   date: new Date(),
    //   count: 
    // });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>count : {this.state.count}</h2>
      </div>
    );
  }
}


ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);