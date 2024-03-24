import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/admin";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={`/admin`} component={AdminLayout} />
        <Redirect from="/" to="/admin" />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
