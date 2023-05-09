import { Switch, Route, Redirect } from "react-router-dom";
// import BodyMultipleCommand from "./BodyMultipleCommand/BodyMultipleCommand";
// import BodySingleCommand from "./BodySingleCommand/BodySingleCommand";

import {
  reducerBody as reducer_SCR,
  initialState as initialState_SCR,
  leftText as leftText_SCR,
} from "./Pages/BodyCommand/CommandsReducers/SingleConcatenationReducer";

import SubPageWrapper from "./Components/SubPageWrapper/SubPageWrapper";

import Home from "./Pages/Home/Home";
import SphericalSystem from "./Pages/SphericalSystem/SphericalSystem";
import BodyCommand from "./Pages/BodyCommand/BodyCommand";
import Abstract from "./Pages/Abstract/Abstract";
import Documentary from "./Pages/Documentary/Documentary";

function App() {
  const links = [
    {
      key: "ABSTRACT",
      path: "/SphericalBody/Abstract",
      component: <Abstract />,
      title: "ABSTRACT",
    },
    {
      key: "APP",
      path: "/SphericalBody/MultipleCommand",
      component: (
        <BodyCommand
          title="APP"
          reducer={reducer_SCR}
          initialState={initialState_SCR}
          leftText={leftText_SCR}
        />
      ),
      title: "APP",
    },
    {
      key: "SPHERICAL_SYSTEM",
      path: "/SphericalBody/SphericalSystem",
      component: <SphericalSystem />,
      title: "SPHERICAL SYSTEM",
    },
    {
      key: "DOCUMENTARY",
      path: "/SphericalBody/Documentary",
      component: <Documentary />,
      title: "DOCUMENTARY",
    },
  ];
  const homeLinks = links.map(({ key, path, title }, index) => {
    return { key, index, path, title };
  });

  const pages = links.map(({ key, path, component, title }) => (
    <Route {...{ key, path, title }}>
      <SubPageWrapper>{component}</SubPageWrapper>
    </Route>
  ));

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/Home" />
      </Route>

      <Route path="/SphericalBody/Home">
        <Home links={homeLinks} />
      </Route>

      {pages}

      <Route path="*">
        <Redirect to="/SphericalBody/Home" />
      </Route>
    </Switch>
  );
}

export default App;
