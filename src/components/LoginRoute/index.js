import {Component} from 'react'

import './index.css'

class LoginRoute extends Component {
  state = {
    id: '',
    pin: '',
  }

  render() {
    return (
      <div className="login-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="login-image"
          />
          <form className="input-container">
            <h1 className="login-heading">Welcome Back!</h1>
            <label className="label" htmlFor="id">
              User ID
            </label>
            <input type="text" className="input" id="pin" />
            <label className="label" htmlFor="id">
              PIN
            </label>
            <input type="text" className="input" id="pin" />
            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginRoute
