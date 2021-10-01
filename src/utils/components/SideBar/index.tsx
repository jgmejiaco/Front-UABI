import tmpImg from './../../assets/img/medellin.png';
import { Link } from 'react-router-dom';
import SBItem from './components/SBItem';

const SideBar = () => {
	return (
		<div id='sidebar' className='d-none d-md-block d-lg-block'>
			<div className='p-2' style={{ backgroundColor: '#6DA3FC' }}>
				<img src={tmpImg} className='img-fluid' alt='' />
			</div>

			<ul className='list-unstyled ps-0'>
				<SBItem
					id=''
					name='Inicio'
					collapse={false}
					sublinks={[{ to: '', name: 'Inicio' }]}
				/>
				<SBItem
					id='projects'
					name='Proyectos'
					sublinks={[
						{ to: '/', name: 'Lista' },
						{ to: '/create', name: 'Nuevo' },
						{ to: '/edit', name: 'Editar' },
					]}
				/>
				<SBItem
					id='adquisitions'
					name='Registro'
					sublinks={[
						{ to: '/', name: 'Adquisiones' },
						{ to: '/create', name: 'Registro Contable - UABI' },
					]}
				/>
				<SBItem
					id='realEstates'
					name='Asegurabilidad'
					sublinks={[
						{ to: '/', name: 'Lista' },
						{ to: '/create', name: 'Nuevo' },
						{ to: '/edit', name: 'Editar' },
					]}
				/>
				<SBItem id='bienesInmuebles/areas' name='Disposición' />
				<SBItem id='adquisisiones' name='Supervisión' />
				<SBItem id='adquisisiones' name='Facturación' />
				<SBItem id='adquisisiones' name='Mantenimiento' />
				<SBItem id='adquisisiones' name='Consultas' />
				<SBItem id='adquisisiones' name='Informes y Logs' />
			</ul>
		</div>
	);
};

export default SideBar;
