import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/admin';
import RTLLayout from 'layouts/rtl';


const Routes = () => {

return (
    <HashRouter>
					<Switch>
						<Route path={`/auth`} component={AuthLayout} />
						<Route path={`/admin`} component={AdminLayout} />
						<Route path={`/rtl`} component={RTLLayout} />
						<Redirect from='/' to='/admin' />
					</Switch>
				</HashRouter>
)
}

export default Routes;