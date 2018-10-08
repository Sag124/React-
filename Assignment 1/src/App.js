import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = {username: 'Max'}

  switchNameHandler = () => {
    this.setState({username: 'Mark'})
  }
  nameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }
 
  render() {
    const style = {
      backgroundColor: 'gray',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: 'black'
    }

    return (
      <div className="App">
      <p>Assignment 1</p>
      <button style={style} onClick={this.switchNameHandler}>Switch State</button>

        <UserInput click={this.switchNameHandler} changed={this.nameChangedHandler}/>
        <UserOutput username="Max"/>
        <UserOutput username={this.state.username}/>
        <UserOutput username="Tony"/>
      </div>
    );
  }
}

export default App;
