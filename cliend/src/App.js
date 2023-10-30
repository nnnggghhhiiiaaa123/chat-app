// import './App.css'; 
import Login from './components/Login';
import { Route, Switch, BrowserRoute } from 'react-router-dom'
import ChatRoom from './components/ChatRoom';

function App() {
  return <BrowserRoute>
  <Switch>
    <Route component={Login} path="/login" />
    <Route component={ChatRoom} path="/" />
  </Switch>
  </BrowserRoute>

}

export default App;
