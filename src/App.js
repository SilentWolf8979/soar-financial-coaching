import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MainNav from './components/mainNav.js';
import FooterNav from './components/footerNav';
import About from './pages/about.js';
import Bio from './pages/bio.js';
import Book from './pages/book.js';
import Contact from './pages/contact.js';
import Home from './pages/home.js';
import WhatIs from './pages/whatIs.js';

function App() {
  return (
    <Router>
      <MainNav />
      
      <Switch>
        <Route path='/about' render={() => <About/>}/>
        <Route path='/bio' render={() => <Bio/>}/>
        <Route path='/book' render={() => <Book/>}/>
        <Route path='/contact' render={() => <Contact/>}/>
        <Route path='/whatis' render={() => <WhatIs/>}/>
        <Route path='/' render={() => <Home/>}/>
      </Switch>

      <FooterNav />
    </Router>
  );
}

export default App;
