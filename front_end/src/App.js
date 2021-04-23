import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import OAuth from './Atomic/Atoms/OAuth';

function App() {
  return (
    <Router>
      <OAuth type="facebook"/>
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
