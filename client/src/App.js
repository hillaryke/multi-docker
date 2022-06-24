import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
   return (

         <Router>
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo"/>
               <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Fib calculator Version 2
               </a>
               <Link to="/">Home</Link>
               <Link to="/otherpage">Other Page</Link>
            </header>
            <Routes >
               <Route exact path="/" element={<Fib/>}/>
               <Route path="/otherpage" element={<OtherPage/>}/>
            </Routes>
         </Router>
   );
}

export default App;