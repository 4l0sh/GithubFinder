import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import './App.css';
import Users from './Components/users/Users';
import Search from './Components/users/search';
import axios from 'axios';
import Alert from './Components/Layout/Alert';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };
  async componentDidMount() {
    this.setState({loading: true});

   const res = await axios.get('https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&CLIENT_SECRET=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}')
    this.setState({users: res.data, loading: false});
   console.log(res.data);

  }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&CLIENT_SECRET=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
    console.log(res.data.items);
    // console.log(text);
  };
  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
      this.setState({alert: {msg, type}});

      setTimeout(() => this.setState({alert: null}), 3000);
  }

  render() {
    const { users, loading} = this.state

    return (
      <div className='App'>
        <Navbar title=' Github Finder' />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
