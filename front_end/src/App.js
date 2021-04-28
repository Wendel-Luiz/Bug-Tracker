import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SideBar from './Atomic/Organisms/SignIn_sideBar';

function App() {
  return (
    <Router> 
      <SideBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

function Home(){
  return (
    <h1>Hello Home</h1>
  )
}

export default App;
