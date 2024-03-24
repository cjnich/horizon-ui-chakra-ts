import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth";

const AuthStackRoutes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Redirect from="/" to="/auth" />
      </Switch>
    </HashRouter>
  );
};

export default AuthStackRoutes;
