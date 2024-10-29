import React, { useEffect, Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/repos';
import GithubContext from '../../context/gitHub/githubContext';

const User = () => {
  const { login } = useParams();

  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    console.log(login);
    getUser(login);
    getUserRepos(login);
    //eslint-desable-next-line
  }, []);

  const {
    name,
    company,
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

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        {' '}
        Back To Search
      </Link>
      Hireable: {''}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            style={{ width: '130px' }}
          />
          <h1>{name}</h1>
          <p>location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              {' '}
              <h3>
                {' '}
                <p>{bio}</p>
              </h3>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            {' '}
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>company: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>
          Public Repositories: {public_repos}
        </div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
