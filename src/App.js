import { Switch, Route, Redirect } from "react-router-dom";
// import BodyMultipleCommand from "./BodyMultipleCommand/BodyMultipleCommand";
// import BodySingleCommand from "./BodySingleCommand/BodySingleCommand";

import {
  reducerBody as reducer_SR,
  initialState as initialState_SR,
  leftText as leftText_SR,
} from "./Pages/BodyCommand/CommandsReducers/SingleReducer";
import {
  reducerBody as reducer_MR,
  initialState as initialState_MR,
  leftText as leftText_MR,
} from "./Pages/BodyCommand/CommandsReducers/MultipleReducer";

import Home from "./Pages/Home/Home";

import SubPageWrapper from "./Components/SubPageWrapper/SubPageWrapper";
import BodyCommand from "./Pages/BodyCommand/BodyCommand";
import FooterButtons from "./Pages/BodyCommand/FooterButtons";

import Duo from "./Pages/Duo/Duo";
import Documentation from "./Pages/Documentation/Documentation";

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
      component: <Duo />,
      title: "Duo",
      subTitle: "Duo",
    },
    {
      key: "Documentation",
      path: "/SphericalBody/Documentation",
      component: <Documentation />,
      title: "Documentation",
      subTitle: "Documentation",
    },
  ];
  const homeLinks = links.map(({ key, path, title, subTitle }) => {
    return { key, path, title, subTitle };
  });

  const pages = links.map(({ key, path, component, title, subTitle }) => (
    <Route {...{ key, path, title, subTitle }}>
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
