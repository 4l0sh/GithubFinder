import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = ({ getUser, user, loading }) => {
  const { login } = useParams(); // Get the login parameter from the URL

  useEffect(() => {
    getUser(login); // Call getUser when the component mounts
  }, [getUser, login]); // Add getUser and login as dependencies

  // Destructure user properties safely to handle loading or undefined user
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

  if (loading) return <div>Loading...</div>; // Show loading state

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

export default User;
