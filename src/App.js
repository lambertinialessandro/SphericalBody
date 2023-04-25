import { Switch, Route, Redirect } from "react-router-dom";
import BodyMultipleCommand from "./BodyMultipleCommand/BodyMultipleCommand";
import BodySingleCommand from "./BodySingleCommand/BodySingleCommand";
import BodyCommand from "./BodyCommand/BodyCommand";
import {
  reducerBody as reducer_SR,
  initialState as initialState_SR,
} from "./BodyCommand/CommandsReducers/SingleReducer";
import {
  reducerBody as reducer_MR,
  initialState as initialState_MR,
} from "./BodyCommand/CommandsReducers/MultipleReducer";
import Home from "./Home/Home";

function App() {
  const links = [
    {
      key: "SingleCommand",
      path: "/SingleCommand",
      component: (
        <BodyCommand reducer={reducer_SR} initialState={initialState_SR} />
      ),
      title: "Single Command",
      subTitle: "There will be shown one command at a time",
    },
    {
      key: "MultipleCommand",
      path: "/MultipleCommand",
      component: (
        <BodyCommand
          reducer={reducer_MR}
          initialState={initialState_MR}
          footer={<FooterButtons />}
        />
      ),
      title: "Multiple Command",
      subTitle: "There will be shown many commands one after the other",
    },
    {
      key: "Duo",
      path: "/Duo",
      component: <BodyCommand />,
      title: "Duo",
      subTitle: "Duo",
    },
    {
      key: "Documentation",
      path: "/Documentation",
      component: <BodyCommand />,
      title: "Documentation",
      subTitle: "Documentation",
    },
  ];
  const homeLinks = links.map(({ key, path, title, subTitle }) => {
    return { key, idx: key, path, title, subTitle };
  });

  const pages = links.map(({ key, path, component, title, subTitle }) => (
    <Route {...{ key, path, title, subTitle }}>{component}</Route>
  ));

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>

      <Route path="/home">
        <Home links={homeLinks} />
      </Route>

      {pages}

      <Route path="*">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
}

export default App;
