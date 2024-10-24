import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/gitHub/githubContext';

const Search = ({ setAlert}) => {
  const githubContext = useContext(GithubContext);

 const [text, setText ] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(text === '') {
        setAlert('Please entre a name', 'light');
    }else {
        githubContext.searchUsers(text);
    setText('');
    }
   
  };

  const onChange = (e) => {
    setText( e.target.value );
  };
 

    return (
      <div>
        <form onSubmit={onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search User'
            value={text}
            onChange={onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {githubContext.users.length > 0 && (
          <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }

 Search.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default Search;
