import './index.css'

const NotFound = () => (
  <div className="note-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
      className="image"
    />
    <h1 className="note-found-heading">Page Not Found</h1>
    <p className="text">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
