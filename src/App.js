import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import './App.css';
import User from './Components/users/User';
import Alert from './Components/Layout/Alert';
import About from './Components/Pages/About';
import GithubState from './context/gitHub/GithubState';
import AlertState from './context/gitHub/alert/AlertState';
import Home from './Components/Pages/home';
import NotFound from  './Components/Pages/NotFound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='Github Finder' />
            <div className='container'>
              <Alert alert={alert} />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='NotFound' element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
