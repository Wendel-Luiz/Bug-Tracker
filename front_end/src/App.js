import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Form from './Atomic/Organisms/Form';

function App() {
  return (
    <Router> 
      <Form />
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
