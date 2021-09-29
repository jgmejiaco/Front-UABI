const Registros = () => {
	return (
		// <div className='content w-100'>

		<section className='pt-5' id='texto-superior'>
			<div className='container-fluid'>
				<div className='row justify-content-center'>
					<div className='col-md-12 text-center'>
						<div style={{ backgroundColor: 'white', borderRadius: 15 }}>
							<h1>Registros</h1>
							<button type='button' className='btn btn-primary'>
								Creación de activo
							</button>
							<table className='table table-hover'>
								<thead>
									<tr>
										<th scope='col'>ID Inmueble</th>
										<th scope='col'>Descripción</th>
										<th scope='col'>Valor</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope='row'>12345678</th>
										<td>Este es el inmueble 1</td>
										<td>10000000</td>
									</tr>
									<tr>
										<th scope='row'>12345679</th>
										<td>Este es el inmueble 2</td>
										<td>10000000</td>
									</tr>
									<tr>
										<th scope='row'>12345670</th>
										<td>Este es el inmueble 3</td>
										<td>10000000</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
		// </div>
	);
};

export default Registros;
