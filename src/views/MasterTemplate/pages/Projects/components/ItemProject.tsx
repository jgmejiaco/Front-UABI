import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { CSSProperties } from 'react';
import { IItemProject } from '../../../../../utils/interfaces/components.interfaces';

const ItemProject = ({ id, name, creationDate }: IItemProject) => {
	let { path, url } = useRouteMatch();
	const history = useHistory();

	const LinkStyle: CSSProperties = {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: 'none',
	};

	const handleViewProject = () => {
		history.push(`/projects/${id}`);
	};

	return (
		<tr>
			<th scope='row'>{id}</th>
			<td>{name}</td>
			<td>{creationDate}</td>
			<td>
				<div
					className='btn-group'
					role='group'
					aria-label='Basic mixed styles example'
					style={{
						display: 'flex',
						width: '100%',
						justifyContent: 'space-around',
					}}
				>
					<Link to={`/projects/${id}`} style={LinkStyle}>
						<i className='fa fa-eye' aria-hidden='true'></i>
					</Link>
					<Link to={`/projects/edit/${id}`} style={LinkStyle}>
						<i className='fa fa-pencil' aria-hidden='true'></i>
					</Link>
					<Link to={`/projects/delete?id=${id}`} style={LinkStyle}>
						<i className='fa fa-trash' aria-hidden='true'></i>
					</Link>
				</div>
			</td>
		</tr>
	);
};

export default ItemProject;
