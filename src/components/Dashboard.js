import React, { Component, PropTypes } from 'react';
import ballmer from 'assets/ballmer.jpg';

export default class Dashboard extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool,
    login: PropTypes.func,
    logout: PropTypes.func
  }

  render() {
    return (
      <div className='Dashboard u-content'>
        <h2>Hello, {this.props.username}</h2>
        <div className='u-spaced'>
          <button
            className='Button'
            onClick={() => this.props.isLoggedIn ? this.props.logout() : this.props.login('admin', 'admin')}
          >{this.props.isLoggedIn ? 'Logout' : 'Login'}</button>
        </div>
        <img src={ballmer} alt='Steve Ballmer' />
      </div>
    );
  }
}
