import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MainNav from './components/mainNav.js';
import FooterNav from './components/footerNav';
import ScrollToTop from './components/scrollToTop.js';
import About from './pages/about.js';
import Book from './pages/book.js';
import Contact from './pages/contact.js';
import Content from './pages/content.js';
import Home from './pages/home.js';
import Legal from './pages/legal.js';
import Services from './pages/services.js';
import WhatIs from './pages/whatIs.js';
import CustomCoaching from './pages/services/custom-coaching.js'
import DebtElimination from './pages/services/debt-elimination.js'
import FinancialPeaceU from './pages/services/financial-peace-university.js'
import LaunchingAdulthood from './pages/services/launching-into-adulthood.js'
import MoneyMarriage from './pages/services/money-and-marriage.js'
import Speaking from './pages/services/speaking.js'

function App() {
  window.addEventListener(
    'message',
    function(e) {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        window.scrollTo(0, 0);
      }
    }
  );
  window.addEventListener(
    'click',
    function(e) {
      if (document.getElementById('navbarToggler').className.indexOf('collapsed') < 0) {
        if (e.path && e.path[0] && (e.path[0].className !== 'nav-link active')) {
          if (!e.path.includes(document.getElementById('navbarToggler'))) {
            document.getElementById('navbarToggler').click();
          }
        }
      }
    }
  );
  
  return (
    <Router>
      <ScrollToTop>
        <MainNav />
        
        <Switch>
          <Route path='/services/custom-coaching' render={() => <CustomCoaching/>}/>
          <Route path='/services/debt-elimination' render={() => <DebtElimination/>}/>
          <Route path='/services/financial-peace-university' render={() => <FinancialPeaceU/>}/>
          <Route path='/services/launching-into-adulthood' render={() => <LaunchingAdulthood/>}/>
          <Route path='/services/money-and-marriage' render={() => <MoneyMarriage/>}/>
          <Route path='/services/speaking' render={() => <Speaking/>}/>
          <Route path='/about' render={() => <About/>}/>
          <Route path='/book' render={() => <Book/>}/>
          <Route path='/contact' render={() => <Contact/>}/>
          <Route path='/content' render={() => <Content/>}/>
          <Route path='/legal' render={() => <Legal/>}/>
          <Route path='/services' render={() => <Services/>}/>
          <Route path='/whatis' render={() => <WhatIs/>}/>
          <Route path='/' render={() => <Home/>}/>
        </Switch>

        <FooterNav />
      </ScrollToTop>
    </Router>
  );
}

export default App;
