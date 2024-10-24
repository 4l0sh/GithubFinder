import React, { useState, Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import './App.css';
import Users from './Components/users/Users';
import User from './Components/users/User';
import Search from './Components/users/search';
import axios from 'axios';
import Alert from './Components/Layout/Alert';
import About from './Components/Pages/About';

import GithubState from './context/gitHub/GithubState';

  const App = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);


 

  // async componentDidMount() {
  //   this.setState({ loading: true });
    

    // const res = await axios.get(
    //   `https://api.github.com/users?client_id=${
    //     process.env.REACT_APP_GITHUB_CLIENT_ID
    //   }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    // );

    useEffect(() => async () => {
      const fetchUsers = async () => {
        try{
          setLoading(true);
          const res = await axios.get(
            `https://api.github.com/users?client_id=${
              process.env.REACT_APP_GITHUB_CLIENT_ID
            }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
          );
          setUsers(res.data);
          setLoading(false);

        }catch(err){
          console.log(err)
          setUsers([])
          setLoading(false)
        }

     
    };
    
    fetchUsers();
  }, []);

    
 
 

  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(true);
  };

  const getUserRepos = async (username) => {
      setLoading (true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);

  };

 

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
                      
                      setAlert={showAlert}
                    />
                    <Users />
                  </Fragment>
                }
              />
              <Route path='/about' element={<About />} />
              <Route
                path='/user/:login'
                element={
                  <User
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    repos={repos}
                    user={user}
                    loading={loading}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </Router> 
     </GithubState>
    );
  
}

export default App;
