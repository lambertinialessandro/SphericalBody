import { Switch, Route, Redirect } from "react-router-dom";
import BodyMultipleCommand from "./BodyMultipleCommand/BodyMultipleCommand";
import BodySingleCommand from "./BodySingleCommand/BodySingleCommand";
import Home from "./Home/Home";
import Test from "./Test";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>

      <Route path="/home">
        <Home />
      </Route>
      <Route path="/SingleCommand">
        <BodySingleCommand />
      </Route>
      <Route path="/MultipleCommand">
        <BodyMultipleCommand />
      </Route>

      <Route path="/Test">
        <Test />
      </Route>

      <Route path="*">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
}

export default App;
