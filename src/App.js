import React, {Component} from 'react';
import Navbar from './Components/Layout/Navbar'
import './App.css';
import Users from './Components/users/Users';
import Search from './Components/users/search';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({loading: true});

   const res = await axios.get('https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&CLIENT_SECRET=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}')
    this.setState({users: res.data, loading: false});
   console.log(res.data);

  }

  render() {


     return (
    <div className="App">
      <Navbar title=" Github Finder" />
      <div className='container'>
        <Search/>
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
      
    </div>
  );
  }
 
}

export default App;
