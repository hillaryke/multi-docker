import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
   return (
      <div className="App">
         <Router>
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo"/>
               <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Learn React 3
               </a>
               <Link to="/">Home </Link>
               <Link to="/otherpage">Other Page</Link>
            </header>
            <Switch>
               <Route exact path="/" component={Fib}/>
               <Route path="/otherpage" component={OtherPage} />
            </Switch>
         </Router>
      </div>

   );
}

export default App;