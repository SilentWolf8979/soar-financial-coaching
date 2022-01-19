import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
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
import Error404 from './error404.js'

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
      if (document.getElementById('navbarToggler') && (document.getElementById('navbarToggler').className.indexOf('collapsed') < 0)) {
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
        
        <Routes>
          <Route exact path='/services/custom-coaching' element={<CustomCoaching/>}/>
          <Route exact path='/services/debt-elimination' element={<DebtElimination/>}/>
          <Route exact path='/services/financial-peace-university' element={<FinancialPeaceU/>}/>
          <Route exact path='/services/launching-into-adulthood' element={<LaunchingAdulthood/>}/>
          <Route exact path='/services/money-and-marriage' element={<MoneyMarriage/>}/>
          <Route exact path='/services/speaking' element={<Speaking/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/book' element={<Book/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/content' element={<Content/>}/>
          <Route path='/content/:postId' element={<Content key={window.location.pathname}/>}/>
          <Route exact path='/legal' element={<Legal/>}/>
          <Route exact path='/services' element={<Services/>}/>
          <Route exact path='/whatIs' element={<WhatIs/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>

        <FooterNav />
      </ScrollToTop>
    </Router>
  );
}

export default App;
