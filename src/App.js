import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import './App.css';
import Users from './Components/users/Users';
import User from './Components/users/User';
import Search from './Components/users/search';
import Alert from './Components/Layout/Alert';
import About from './Components/Pages/About';
import GithubState from './context/gitHub/GithubState';
import AlertState from './context/gitHub/alert/AlertState';


  const App = () => {
   
   
    const [alert, setAlert] = useState(null);




  // const showAlert = (msg, type) => {
  //   setAlert({ msg, type });

  //   setTimeout(() => setAlert( null ), 3000);
  // };



    return (

     <GithubState>
      <AlertState> 

    
      <Router>
        <div className='App'>
          <Navbar title='Github Finder' />
          <div className='container'>
            <Alert alert={alert} />
            <Routes>
              <Route
                path='/'
                element={
                  <Fragment>
                    <Search/>
                    <Users />
                  </Fragment>
                }
              />
              <Route path='/about' element={<About />} />
              <Route
                path='/user/:login' element={<User/>} />
            </Routes>
          </div>
        </div>
      </Router> 
      </AlertState> 
     </GithubState>
    );
  
}

export default App;