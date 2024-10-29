import React, { useState, Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import './App.css';
import Users from './Components/users/Users';
import User from './Components/users/User';
import Search from './Components/users/search';
import Alert from './Components/Layout/Alert';
import About from './Components/Pages/About';

import GithubState from './context/gitHub/GithubState';

  const App = () => {
   
   
    const [alert, setAlert] = useState(null);


  //   const getUserRepos = async (username) => {
  //     setLoading (true);
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   setRepos(res.data);
  //   setLoading(false);

  // };



  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert( null ), 3000);
  };



    return (

     <GithubState>

    
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
                    <Search
                      // searchUsers={searchUsers}
                      
                      setAlert={showAlert}
                    />
                    <Users />
                  </Fragment>
                }
              />
              <Route path='/about' element={<About />} />
              <Route
                path='/user/:login' component= {User} />
            </Routes>
          </div>
        </div>
      </Router> 
     </GithubState>
    );
  
}

export default App;