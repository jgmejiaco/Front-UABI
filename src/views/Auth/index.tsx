import {
	Route,
	BrowserRouter as Router,
	Switch,
	useRouteMatch,
	Redirect,
} from 'react-router-dom';

// Components
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

const Auth = () => {
	let { path } = useRouteMatch();
	return (
		// Router for sub pages: Login and Register.
		<Router>
			<Switch>
				<Route exact path={path}>
					<Redirect to={{ pathname: `${path}/login` }} />
				</Route>
				<Route path={`${path}/login`}>
					<LogIn />
				</Route>
				<Route path={`${path}/signup`}>
					<SignUp />
				</Route>
			</Switch>
		</Router>
	);
};

export default Auth;
