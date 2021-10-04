import React, {useState} from 'react';

const Location = () => {
	//	Crear el State
	const [locationName, setLocationName] = useState({
		pais: '',
		departamento: '',
		municipio: '',
		comuna: '',
		barrio: '',
		via: '',
		numero1: '',
		letra1: '',
		orientacion1: '',
		numero2: '',
		letra2: '',
		orientacion2: '',
		indicativo: '',
		indicaciones: ''
	});

	//	Función que detecta los cambios de cada select e input del formulario
	const handleChange = (e: any) => {
		console.log(e.target.name);
		console.log(e.target.value);
		setLocationName({
			...locationName,
			[e.target.name]: e.target.value
		});
	};

	//	Extraigo los valores del objeto con "destructuring"
	const {	pais, departamento, municipio, comuna, barrio, via, numero1, letra1, orientacion1, numero2, letra2, orientacion2, indicativo, indicaciones} = locationName;

	//	Función cuando el usuario hace Submit
	type FormElement = React.FormEvent<HTMLFormElement>;

	const handleSubmit = (e: FormElement) => {
		e.preventDefault();
		console.log('Enviando datos del formulario....................');
		alert('Enviando datos del formulario....................');
	}

	return (
		<section className='mainContainerLocation'>
			<form
				className='containerLocation'
				onSubmit={handleSubmit}	
			>
				<div className="pt-3">
					<h5 className="text-uppercase ms-3">Ubicación</h5>
					<hr />
				</div>

				<div className="innerContainerLocation">
					<div className='d-md-flex justify-content-between'>
						<div className='col-md-2'>
							<label htmlFor='country' className="form-label">País</label>
							<select
								id='country'
								className='w-100 form-select'
								name="pais"
								onChange={handleChange}
								value={pais}
								// onChange={e => setLocationName(e.target.value)}
							>
								<option value='' selected disabled>
									--País--
								</option>
								<option key="colombia" value='Colombia'>Colombia</option>
								<option key="venezuela" value='Venezuela'>Venezuela</option>
								<option key="costarica" value='Costa Rica'>Costa Rica</option>
								<option key="panama" value='Panamá'>Panamá</option>
								<option key="brasil" value='Brasíl'>Brasil</option>
								<option key="ecuador" value='Ecuador'>Ecuador</option>
							</select>
						</div>

						<div className='col-md-2 mt-4 mt-md-0'>
							<label htmlFor='state' className="form-label">Departamento</label>
							<select
								id='state'
								className='w-100 form-select'
								name="departamento"
								onChange={handleChange}
								value={departamento}
							>
								<option value='' selected disabled>
									--Departamento--
								</option>
								<option key="antioquia" value='Antioquia'>Antioquia</option>
								<option key="cundinamarca"  value='Cundinamarca'>Cundinamarca</option>
								<option key="vallecauca"  value='Valle del Cauca'>Valle del Cauca</option>
								<option key="atlantico"  value='Atlántico'>Atlántico</option>
								<option key="magdalena"  value='Magdalena'>Magdalena</option>
								<option key="bolivar"  value='Bolívar'>Bolívar</option>
							</select>
						</div>

						<div className='col-md-2 mt-4 mt-md-0'>
							<label htmlFor='city' className="form-label">Municipio</label>
							<select
								id='city'
								className='w-100 form-select'
								name='municipio'
								onChange={handleChange}
								value={municipio}
							>
								<option value='' selected disabled>
									--Municipio--
								</option>
								<option key="medellin" value='Medellín'>Medellín</option>
								<option key="envigado"  value='Envigado'>Envigado</option>
								<option key="sabaneta"  value='Sabaneta'>Sabaneta</option>
								<option key="bogota"  value='Bogotá'>Bogotá</option>
								<option key="cali"  value='Cali'>Cali</option>
								<option key="barranquilla"  value='Barranquila'>Barranquilla</option>
								<option key="santamarta"  value='Santamarta'>Santa Marta</option>
								<option key="cartagena"  value='Cartagena'>Cartagena</option>
							</select>
						</div>

						<div className='col-md-2 mt-4 mt-md-0'>
							<label htmlFor='comuna' className="form-label">Comuna</label>
							<select
								id='comuna'
								className='w-100 form-select'
								name='comuna'
								onChange={handleChange}
								value={comuna}
							>
								<option value='' selected disabled>
									--Comuna--
								</option>
								<option key="01" value='01'>01</option>
								<option key="02" value='02'>02</option>
								<option key="03" value='03'>03</option>
								<option key="04" value='04'>04</option>
								<option key="05" value='05'>05</option>
								<option key="06" value='06'>06</option>
								<option key="07" value='07'>07</option>
								<option key="08" value='08'>08</option>
								<option key="09" value='09'>09</option>
								<option key="10" value='10'>10</option>
								<option key="11" value='11'>11</option>
								<option key="12" value='12'>12</option>
								<option key="13" value='13'>13</option>
								<option key="14" value='14'>14</option>
								<option key="15" value='15'>15</option>
								<option key="16" value='16'>16</option>
							</select>
						</div>

						<div className='col-md-2 mt-4 mt-md-0'>
							<label htmlFor='barrio' className="form-label">Barrio</label>
							<select
								id='barrio'
								className='w-100 form-select'
								name='barrio'
								onChange={handleChange}
								value={barrio}
							>
								<option value='' selected disabled>
									--Barrio--
								</option>
								<option key="belenlamota" value='Belén La Mota'>Belén La Mota</option>
								<option key="salvador" value='Salvador'>Salvador</option>
								<option key="buenosaires" value='Buenos Aires'>Buenos Aires</option>
								<option key="manrique" value='Manríque'>Manrique</option>
								<option key="aranjuez" value='Aranjúez'>Aranjúez</option>
								<option key="laureles" value='Laureles'>Laureles</option>
								<option key="milagrosa" value='La Milagrosa'>Milagrosa</option>
							</select>
						</div>
					</div>

					{/* ====================================== */}
					{/* ====================================== */}
					{/* ====================================== */}

					<div className='mt-5'>
						<h5 className='text-center text-uppercase'>Dirección</h5>

						<div className='d-md-flex justify-content-between mt-1'>
							<div className='col-md-2 mt-4 mt-md-0 pe-sm-0'>
								<label htmlFor='type1' className="form-label">Tipo</label>
								<select
									id='type1'
									className='w-100 form-select'
									name='via'
									onChange={handleChange}
									value={via}
								>
									<option value='' selected disabled>
										--Tipo--
									</option>
									<option key="calle"  value='Calle'>Calle</option>
									<option key="carrera"  value='Carrera'>Carrera</option>
									<option key="avenida"  value='Avenida'>Avenida</option>
									<option key="circular"  value='Circular'>Circular</option>
									<option key="transversal"  value='Transversal'>Transversal</option>
									<option key="circunvalar"  value='Circunvalar'>Circunvalar</option>
									<option key="diagonal"  value='Diagonal'>Diagonal</option>
								</select>
							</div>

							{/* <div className='col-md-2 pe-3 mt-sm-3 mt-md-0'>
								<div className='d-flex align-items-end '>
									<p>#</p>
								</div>
							</div> */}

							<div className='col-md-2 mt-4 mt-md-0 pe-sm-0'>
								<label htmlFor='number1' className="form-label">Número</label>
								<input
									type='number'
									name='numero1'
									id='number1'
									className="form-control"
									onChange={handleChange}
									value={numero1}
								/>
							</div>

							<div className='col-md-2 mt-4 mt-md-0 pe-sm-0'>
								<label htmlFor='letter1' className="form-label">Letra</label>
								<select
									id='letter1'
									className='w-100 form-select'
									name='letra1'
									onChange={handleChange}
									value={letra1}
								>
									<option value='' selected disabled>
										--Letra--
									</option>
									<option value='A'>A</option>
									<option value='B'>B</option>
									<option value='B'>C</option>
									<option value='D'>D</option>
									<option value='E'>E</option>
									<option value='F'>F</option>
									<option value='G'>G</option>
									<option value='H'>H</option>
									<option value='I'>I</option>
									<option value='AA'>AA</option>
									<option value='AB'>AB</option>
									<option value='AC'>AC</option>
									<option value='AD'>AD</option>
									<option value='AE'>AE</option>
									<option value='BB'>BB</option>
									<option value='BC'>BC</option>
									<option value='CC'>CC</option>
									<option value='CD'>CD</option>
									<option value='CE'>CE</option>
									<option value='DD'>DD</option>
									<option value='DE'>DE</option>
								</select>
							</div>

							<div className='col-md-2 mt-4 mt-md-0 pe-sm-0'>
								<label htmlFor='orientation1' className="form-label">Orientación</label>
								<select
									id='orientation1'
									className='w-100 form-select'
									name='orientacion1'
									onChange={handleChange}
									value={orientacion1}
								>
									<option value='' selected disabled>
										--Orientación--
									</option>
									<option value='Sur'>Sur</option>
									<option value='Norte'>Norte</option>
									<option value='Oeste'>Oeste</option>
									<option value='Este'>Este</option>
								</select>
							</div>
						</div>

						{/* ====================================== */}

						<div className='d-md-flex justify-content-between mt-5'>
							{/* <div className='col-md-2 mt-sm-2 mt-md-0'>
								<label htmlFor='type2' className="form-label">Tipo</label>
								<select id='type2' className='w-100 form-select'>
									<option value='' selected disabled>
										--Tipo--
									</option>
									<option value='calle'>Calle</option>
									<option value='carrera'>Carrera</option>
									<option value='avenida'>Avenida</option>
									<option value='circular'>Circular</option>
									<option value='transversal'>Transversal</option>
									<option value='circunvalar'>Circunvalar</option>
									<option value='diagonal'>Diagonal</option>
								</select>
							</div> */}

							<div className='col-md-0 d-none d-md-flex align-items-end justify-content-center'>
								<p className="fs-4">#</p>
							</div>

							<div className='col-md-2 mt-4 mt-md-0'>
								<label htmlFor='number2' className="form-label">Número</label>
								<input
									type='number'
									name='numero2'
									id='number2'
									className="form-control"
									onChange={handleChange}
									value={numero2}
								/>
							</div>

							<div className='col-md-2 mt-4 mt-md-0'>
								<label htmlFor='letter2' className="form-label">Letra</label>
								<select
									id='letter2'
									className='w-100 form-select'
									name='letra2'
									onChange={handleChange}
									value={letra2}
								>
									<option value='' selected disabled>
										--Letra--
									</option>
									<option value='A'>A</option>
									<option value='B'>B</option>
									<option value='B'>C</option>
									<option value='D'>D</option>
									<option value='E'>E</option>
									<option value='F'>F</option>
									<option value='G'>G</option>
									<option value='H'>H</option>
									<option value='I'>I</option>
									<option value='AA'>AA</option>
									<option value='AB'>AB</option>
									<option value='AC'>AC</option>
									<option value='AD'>AD</option>
									<option value='AE'>AE</option>
									<option value='BB'>BB</option>
									<option value='BC'>BC</option>
									<option value='CC'>CC</option>
									<option value='CD'>CD</option>
									<option value='CE'>CE</option>
									<option value='DD'>DD</option>
									<option value='DE'>DE</option>
								</select>
							</div>

							<div className='col-md-2 mt-4 mt-md-0'>
								<label htmlFor='orientation2' className="form-label">Orientación</label>
								<select
									id='orientation2'
									className='w-100 form-select'
									name='orientacion2'
									onChange={handleChange}
									value={orientacion2}
								>
									<option value='' selected disabled>
										--Orientación--
									</option>
									<option value='Sur'>Sur</option>
									<option value='Norte'>Norte</option>
									<option value='Oeste'>Oeste</option>
									<option value='Este'>Este</option>
								</select>
							</div>

							<div className='col-md-0 d-none d-md-flex align-items-end justify-content-center'>
								<p className="fs-3">-</p>
							</div>

							<div className='col-md-2 mt-4 mt-md-0'>
								<label htmlFor='indicativo' className="form-label">Indicativo</label>
								<input
									type='number'
									name='indicativo'
									id='indicativo'
									className="form-control"
									onChange={handleChange}
									value={indicativo}
								/>
							</div>
						</div>
					</div>

					<div className='col mt-4 mt-md-5'>
						<label htmlFor='indications' className="form-label">Indicaciones</label>
						<input
							type='text'
							name='indicaciones'
							id='indications'
							className="w-100  form-control"
							placeholder="Manzana, Urbanización, Núcleo, Bloque, apartamento"
							onChange={handleChange}
							value={indicaciones}
						/>
							
					</div>

					<div className='d-flex justify-content-end mt-5'>
						<button type='button' className='btn btn-primary btn-lg'>
							Consultar
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};


export default Location;
