import React, { Component } from 'react';
import logo from './assets/dancers.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (      
      <div id="root" className="container">
        <nav>
          <div>
            <a href="#" target="_blank">Project Connect Dancers</a>
          </div>
        
          <div className="logo">
            <a href="#" target="_blank"><img id="logo" src={logo} alt=""></img></a>
          </div>
          
          <div className="links">
            <a className="mission" href="./mission" target="_blank">
              Mission
            </a>
            <a className="dancers" href="./dancers" target="_blank">
              Dancers
            </a>
            <a className="sponsors" href="./sponsors" target="_blank">
              Sponsors
            </a>
            <a className="contact" href="./contact" target="_blank">
              Contact
            </a>
          </div>
        
        </nav>
      
        <main className="content">
          
        </main>
      </div>
      
    );
  }
}

export default App;
