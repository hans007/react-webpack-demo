import React from 'react';
import ReactDOM from 'react-dom';


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleClick2() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
        <div>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            <button onClick={(e) => this.handleClick2(e)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        </div>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);