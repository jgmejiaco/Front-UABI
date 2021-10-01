import {
	Route,
	BrowserRouter as Router,
	Switch,
	useRouteMatch,
	Redirect,
} from 'react-router-dom';

import Registros from './pages/Registros';
import SideBar from '../../utils/components/SideBar';
import TopBar from './../../utils/components/TopBar/index';
import Location from '../../utils/components/location/location';
import Home from './pages/Home';
import { PrivateRoute } from '../../utils/components/PrivateRoute';
import { useEffect, useState, Component } from 'react';
import Projects from './pages/Projects';
import RealEstate from './pages/RealEstate';
import CreateProject from './pages/Projects/components/CreateProject';
import EstateAreas from './pages/EstateAreas';
import DetailProject from './pages/Projects/components/DetailProject';
import EditProject from './pages/Projects/components/EditProject';

function MasterTemplate() {
	let { path, url } = useRouteMatch();

	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setIsAuthenticated(true);
		}
		console.log(isAuthenticated);
	}, []);

	return (
		<Router>
			<div className='d-flex'>
				<SideBar />
				<div className='content w-100'>
					<TopBar />
					<Switch>
						<PrivateRoute path='/' isAuthenticated={isAuthenticated} exact>
							<Home />
						</PrivateRoute>
            <PrivateRoute path='/location' isAuthenticated={isAuthenticated}>
              <Location />
						</PrivateRoute>
						<PrivateRoute path='/registros' isAuthenticated={isAuthenticated}>
							<Registros />
						</PrivateRoute>
						<PrivateRoute
							path='/realEstates/areas/create'
							isAuthenticated={isAuthenticated}
						>
							<EstateAreas />
						</PrivateRoute>
						<PrivateRoute
							path='/realEstates/create'
							isAuthenticated={isAuthenticated}
						>
							<RealEstate name='Crear' />
						</PrivateRoute>
						<PrivateRoute
							path='/realEstates/edit'
							isAuthenticated={isAuthenticated}
						>
							<RealEstate name='Editar' />
						</PrivateRoute>
						<PrivateRoute path='/realEstates' isAuthenticated={isAuthenticated}>
							<Projects name='Bienes Inmuebles' />
						</PrivateRoute>

						<PrivateRoute
							path='/projects/create'
							isAuthenticated={isAuthenticated}
						>
							<CreateProject name='Crear Proyecto' />
						</PrivateRoute>
						<Route path='/projects/edit/:id'>
							<EditProject />
						</Route>
						<Route path='/projects/:id' component={DetailProject} />
						<PrivateRoute path='/projects' isAuthenticated={isAuthenticated}>
							<Projects name='Proyectos' />
						</PrivateRoute>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default MasterTemplate;
