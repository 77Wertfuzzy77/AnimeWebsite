import React, { Component } from 'react';
import logo from './logo.svg';

import ReactDOM from 'react-dom';
import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';

import './App.css';

//charts(FusionCharts)


class App extends Component {

  constructor() {
    super();
    this.state = {
      "user_name" :''
    };
  }

  user_nameChange(e) {
     this.setState({user_name: e.target.value});
  }

  handleSubmit() {
    console.log("user_name: " + this.state.user_name);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MAL Recommendation</h1>
        </header>
        <form className="App-form" onSubmit={this.handleSubmit.bind(this)}>
          <label>
            MAL Username:
            <input type="text" name="user_name"/>
          </label>
        <button type="submit">Submit</button>
        </form>
        <p>{this.state.user_name}</p>
        <div id='chart-container'></div>
      </div>
    );
  }
}


export default App;
