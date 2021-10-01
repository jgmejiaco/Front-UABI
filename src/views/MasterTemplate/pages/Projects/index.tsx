import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getProjects } from '../../../../apis/uabi';
import {
	IProjectAttributes,
	IProjectsResponse,
} from '../../../../utils/interfaces/components.interfaces';
import ItemProject from './components/ItemProject';

interface IProps {
	name: string;
}

const Projects = ({ name }: IProps) => {
	const [projectsArray, setProjectsArray] = useState<IProjectAttributes[]>([
		{
			id: '',
			name: '',
			description: '',
			audit_trail: {
				created_by: '',
				created_on: '',
				updated_by: null,
				updated_on: null,
				updated_values: null,
			},
			status: -1,
		},
	]);

	const _getProjects = async () => {
		let projectsResponse: IProjectsResponse | string = await getProjects();

		if (typeof projectsResponse !== 'string') {
			let tmpData = projectsResponse.data;

			setProjectsArray(tmpData);
		}
	};

	useEffect(() => {
		_getProjects();
	}, []);

	return (
		<section className='pt-5' id='texto-superior'>
			<div className='container-fluid'>
				<Link
					className='justify-content-end'
					style={{ display: 'flex' }}
					to='/projects/create'
				>
					Crear <i className='fa fa-plus-circle' aria-hidden='true'></i>
				</Link>
				<div className='row justify-content-center'>
					<div className='col-md-12'>
						<div style={{ backgroundColor: 'white', borderRadius: 15 }}>
							<h5>Administrar {name}</h5>
							<hr />
							<form>
								<div className='row justify-content-between'>
									<div className='col-5 d-flex'>
										<div className='col-6'>
											<div className='input-group'>
												<input
													type='text'
													className='form-control'
													placeholder='Nombre / Código'
													aria-label='Nombre / Código'
													aria-describedby='button-addon2'
												/>
												<span className='input-group-text'>
													<a href=''>
														<i className='fa fa-search' aria-hidden='true'></i>
													</a>
												</span>
											</div>
										</div>
										<a href='#'>
											Filtro búsqueda{' '}
											<i className='fa fa-filter' aria-hidden='true'></i>
										</a>
									</div>
									<div className='col-3 d-flex'>
										<label>Registros por página</label>
										<select
											style={{ width: '30%' }}
											className='form-select form-select-lg mb-3'
											aria-label='.form-select-lg example'
										>
											<option selected>10</option>
											<option value='1'>20</option>
											<option value='2'>50</option>
										</select>
									</div>
								</div>
							</form>
							<hr />
							{/* <table className='table table-hover text-center'> */}
							<Table responsive>
								<thead>
									<tr>
										<th scope='col' className='align-top center'>
											Matricula
										</th>
										<th scope='col' className='align-top'>
											{name}
										</th>
										<th scope='col' className='align-top'>
											Fecha Creación
										</th>
										<th scope='col' className='align-top'>
											<div
												style={{
													display: 'flex',
													flexDirection: 'column',
												}}
											>
												Acciones
												<div
													style={{
														display: 'flex',
														width: '100%',
														justifyContent: 'space-around',
													}}
												>
													<p> Ver </p>
													<p> Editar </p>
													<p> Eliminar </p>
												</div>
											</div>
										</th>
									</tr>
								</thead>
								<tbody>
									{projectsArray.map((project) => {
										let creationDate = new Date(
											parseFloat(project.audit_trail.created_on) * 1000
										).toDateString();
										return (
											<ItemProject
												id={project.id}
												name={project.name}
												creationDate={creationDate}
											/>
										);
									})}
									<ItemProject
										id='123123'
										name='Name'
										creationDate='1 day ago'
									/>
								</tbody>
							</Table>
							<nav aria-label='Page navigation example'>
								<ul className='pagination justify-content-end'>
									<li className='page-item'>
										<a className='page-link' href='#' aria-label='Previous'>
											<span aria-hidden='true'>&laquo;</span>
										</a>
									</li>
									<li className='page-item'>
										<a className='page-link' href='#'>
											1
										</a>
									</li>
									<li className='page-item'>
										<a className='page-link' href='#'>
											2
										</a>
									</li>
									<li className='page-item'>
										<a className='page-link' href='#'>
											3
										</a>
									</li>
									<li className='page-item'>
										<a className='page-link' href='#' aria-label='Next'>
											<span aria-hidden='true'>&raquo;</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
