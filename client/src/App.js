import React, { Component } from "react";
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Fib from "./Fib";
import OtherPage from "./OtherPage";


class App extends Component {
   render() {
      return (
         <Router>
            <div className="App">
               <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
                  <Link to="/">Home</Link>
                  <Link to="/otherpage">Other Page</Link>
               </header>
               <div>
                  <Route path="/" exact component={Fib}></Route>
                  <Route path="/otherpage" exact component={OtherPage}></Route>
               </div>
            </div>
         </Router>
      );
   }
};

export default App;