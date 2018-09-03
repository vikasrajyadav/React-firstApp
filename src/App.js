import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
      persons: [
      { name: 'Max', age: 20 },
      { name: 'Manu', age: 21 },
      { name: 'vikas', age: 23 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked');
    this.setState({
      persons: [
        { name: 'Max123', age: 20 },
        { name: 'Manu', age: 21 },
        { name: 'vikas', age: 234 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Hi, every one</h1>
      <p>Hi everyone it's working</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: gaming</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      
    );
    // return React.createElement('div',{ className: 'App' },React.createElement('h1', null, 'This will work'));
  }
}

export default App;
