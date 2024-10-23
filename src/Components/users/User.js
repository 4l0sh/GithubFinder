import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import PropTypes from 'prop-types';

const User = ({ getUser, user, loading }) => {
  const { login } = useParams(); 

  useEffect(() => {
    getUser(login); 
  }, [getUser, login]); 

  
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user || {};

 
  if (loading) return <Spinner/>

  return (
    <div>
      <h1>{name}</h1>
      <img src={avatar_url} alt={name} />
      <p>Location: {location}</p>
      <p>Bio: {bio}</p>
      <p>Blog: <a href={blog}>{blog}</a></p>
      <p>Username: {login}</p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
      <p>Public Repos: {public_repos}</p>
      <p>Public Gists: {public_gists}</p>
      <p>Hireable: {hireable ? 'Yes' : 'No'}</p>
      <a href={html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
};

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired
}
export default User;
