import React, {useReducer} from "react";
import axios from 'axios';
import githubContext from './githubContext';
import GithubReduces from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
}  from '../types';


const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReduces, initialState);


    const searchUsers = async (text) => {
        setLoading();
    
        const res = await axios.get(
          `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
      };




      const clearUsers = () => dispatch ({type: CLEAR_USERS});



 
     
      const setLoading = () => dispatch({ type: SET_LOADING});

    return <githubContext.Provider
        value={{
            users: state.users,
            user:state.user,
            repos: state.repos,
            loading: state.loading,
            clearUsers,
            searchUsers
        }}
    >
        {props.children}
    </githubContext.Provider>
}

export default GithubState