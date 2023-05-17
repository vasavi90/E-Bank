import {Switch, Route} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={HomeRoute} />
      <Route exact path="/ebank/login" component={LoginRoute} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
