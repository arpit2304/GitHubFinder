import React from 'react';
import PropTypes from 'prop-types';
import UserItem from '../users/UserItem';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'GithubFinder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};
export default Navbar;
