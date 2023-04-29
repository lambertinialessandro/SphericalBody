import { Switch, Route, Redirect } from "react-router-dom";
// import BodyMultipleCommand from "./BodyMultipleCommand/BodyMultipleCommand";
// import BodySingleCommand from "./BodySingleCommand/BodySingleCommand";

import BodyCommand from "./BodyCommand/BodyCommand";
import {
  reducerBody as reducer_SR,
  initialState as initialState_SR,
  leftText as leftText_SR,
} from "./BodyCommand/CommandsReducers/SingleReducer";
import {
  reducerBody as reducer_MR,
  initialState as initialState_MR,
  leftText as leftText_MR,
} from "./BodyCommand/CommandsReducers/MultipleReducer";

import Home from "./Home/Home";
import FooterButtons from "./BodyMultipleCommand/FooterButtons";

function App() {
  const links = [
    {
      key: "SingleCommand",
      path: "/SphericalBody/SingleCommand",
      component: (
        <BodyCommand
          reducer={reducer_SR}
          initialState={initialState_SR}
          leftText={leftText_SR}
        />
      ),
      title: "Single Command",
      subTitle: "There will be shown one command at a time",
    },
    {
      key: "MultipleCommand",
      path: "/SphericalBody/MultipleCommand",
      component: (
        <BodyCommand
          reducer={reducer_MR}
          initialState={initialState_MR}
          leftText={leftText_MR}
          footer={<FooterButtons />}
        />
      ),
      title: "Multiple Command",
      subTitle: "There will be shown many commands one after the other",
    },
    {
      key: "Duo",
      path: "/SphericalBody/Duo",
      component: <BodyCommand />,
      title: "Duo",
      subTitle: "Duo",
    },
    {
      key: "Documentation",
      path: "/SphericalBody/Documentation",
      component: <BodyCommand />,
      title: "Documentation",
      subTitle: "Documentation",
    },
  ];
  const homeLinks = links.map(({ key, path, title, subTitle }) => {
    return { key, path, title, subTitle };
  });

  const pages = links.map(({ key, path, component, title, subTitle }) => (
    <Route {...{ key, path, title, subTitle }}>{component}</Route>
  ));

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>

      <Route path="/SphericalBody/home">
        <Home links={homeLinks} />
      </Route>

      {pages}

      <Route path="*">
        <Redirect to="/SphericalBody/home" />
      </Route>
    </Switch>
  );
}

export default App;
