import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const HomeRoute = props => {
  const logoutClick = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }

  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="app-container">
      <div className="top-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="logo-website"
        />
        <button type="button" className="logout-button" onClick={logoutClick}>
          Logout
        </button>
      </div>
      <h1 className="heading">Your Flexibility, Our Excellence</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
        className="card-container"
      />
    </div>
  )
}
export default HomeRoute
