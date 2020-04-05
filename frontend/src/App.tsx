import React from "react";
import { Route, Redirect, Switch } from "react-router";
import Players from "./players/components/players.component";
import LoginForm from "./login/components/login.component";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import About from "./about/about.component";
import Home from "./home/home.component";

type TAppProp = {
  // history: History;
};
const App: React.FC<TAppProp> = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/players" exact>
            <Players />
          </Route>
          <Route path="/admin" exact>
            <div>Admin component will be load here</div>
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/login" component={LoginForm} exact={true} />
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </>
  );
};

export default App;
