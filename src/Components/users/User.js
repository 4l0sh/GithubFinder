import React, { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/repos';

// export class User extends Component {
//   componentDidMount(){
//     this.props.getUserRepos(this.match.params.login);
//   }

// static propTypes = {

//   repos: PropTypes.array.isRequired
// }

// }

const User = ({ getUser, getUserRepos, user, loading, repos }) => {
  const { login } = useParams();

  useEffect(() => {
    getUser(login);
    getUserRepos(login);
  }, [getUser, getUserRepos, login]);

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

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};
export default User;
