import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Article } from './components/article';



class App extends Component {
  state = {
    type: null
  };

  changeType (event) {
    this.setState({ type: event.target.value });
  }

  render() {
    const movies = [
      { movie: 'hook', description: 'peter pan' },
      { movie: 'frozen', description: 'una de dseny' }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={event => this.changeType(event)} />
        <br />
        <Article movie="Despicable me" description="una pelicula" type={this.state.type} />
        <Article movie="Jurasic park" description="otra pelicula" type={this.state.type} />
        {movies.map((item, i) => (
          <Article
            key={i}
            movie={item.movie}
            description={item.description}
            type={this.state.type}
          />
        ))}
      </div>
    );
  }
}

export default App;
