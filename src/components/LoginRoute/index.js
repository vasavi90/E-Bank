import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginRoute extends Component {
  state = {
    userId: '',
    userPin: '',
    isFailure: false,
    errorMsg: '',
  }

  onChangeId = event => {
    this.setState({
      userId: event.target.value,
    })
  }

  onChangePin = event => {
    this.setState({
      userPin: event.target.value,
    })
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      isFailure: true,
      errorMsg,
    })
  }

  submitForm = async event => {
    event.preventDefault()

    const {userId, userPin} = this.state

    const userDetails = {userId, userPin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userId, userPin, isFailure, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="login-image"
          />
          <form className="input-container" onSubmit={this.submitForm}>
            <h1 className="login-heading">Welcome Back!</h1>
            <label className="label" htmlFor="id">
              User ID
            </label>
            <input
              type="text"
              className="input"
              id="id"
              value={userId}
              onChange={this.onChangeId}
            />
            <label className="label" htmlFor="pin">
              PIN
            </label>
            <input
              type="password"
              className="input"
              id="pin"
              value={userPin}
              onChange={this.onChangePin}
            />
            <button type="submit" className="button" onClick={this.click}>
              Login
            </button>
            {isFailure && <p className="error-msg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginRoute
