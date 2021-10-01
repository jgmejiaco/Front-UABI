


const Location = () => {
	return (
		<section className='mainContainerLocation'>
			<form className='containerLocation'>
                <div className='d-md-flex justify-content-between'>
                    <div className="col-md-2">
                        <label htmlFor="country">País</label>
                        <select id="country" className="w-100">
                            <option value="" selected>--País--</option>
                            <option value="colombia">Colombia</option>
                            <option value="venezuela">Venezuela</option>
                            <option value="costarica">Costa Rica</option>
                            <option value="panama">Panamá</option>
                            <option value="brasil">Brasil</option>
                            <option value="ecuador">Ecuador</option>
                        </select>
                    </div>

                    <div className="col-md-2 mt-sm-3 mt-md-0">
                        <label htmlFor="state">Departamento</label>
                        <select id="state" className="w-100">
                            <option value="" selected>--Departamento--</option>
                            <option value="antioquia">Antioquia</option>
                            <option value="cundinamarca">Cundinamarca</option>
                            <option value="vallecauca">Valle del Cauca</option>
                            <option value="atlantico">Atlántico</option>
                            <option value="magdalena">Magdalena</option>
                            <option value="bolivar">Bolívar</option>
                        </select>
                    </div>

                    <div className="col-md-2 mt-sm-3 mt-md-0">
                        <label htmlFor="state">Municipio</label>
                        <select id="city" className="w-100">
                            <option value="" selected>--Municipio--</option>
                            <option value="medellin">Medellín</option>
                            <option value="envigado">Envigado</option>
                            <option value="sabaneta">Sabaneta</option>
                            <option value="bogota">Bogotá</option>
                            <option value="cali">Cali</option>
                            <option value="barranquila">Barranquilla</option>
                            <option value="santamarta">Santa Marta</option>
                            <option value="cartagena">Cartagena</option>
                        </select>
                    </div>

                    <div className="col-md-2 mt-sm-3 mt-md-0">
                        <label htmlFor="comuna">Comuna</label>
                        <select id="comuna" className="w-100">
                            <option value="" selected>--Comuna--</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                        </select>
                    </div>

                    <div className="col-md-2 mt-sm-3 mt-md-0">
                        <label htmlFor="barrio">Barrio</label>
                        <select id="city" className="w-100">
                            <option value="" selected>--Barrio--</option>
                            <option value="belen">Belén La Mota</option>
                            <option value="salvador">Salvador</option>
                            <option value="buenosaires">Buenos Aires</option>
                            <option value="manrique">Manrique</option>
                            <option value="aranjuez">Aranjúez</option>
                            <option value="laureles">Laureles</option>
                            <option value="milagrosa">Milagrosa</option>
                        </select>
                    </div>
                </div>

                {/* ====================================== */}
                {/* ====================================== */}
                {/* ====================================== */}



                <div className='mt-5'>

                    <h3 className='text-center text-uppercase'>Dirección</h3>

                    <div className='d-md-flex justify-content-between mt-1'>

                        <div className="col-md-2 pe-3">
                            <label htmlFor="type">Tipo</label>
                            <select id="type" className="w-100">
                                <option value="" selected>--Tipo--</option>
                                <option value="calle">Calle</option>
                                <option value="carrera">Carrera</option>
                                <option value="avenida">Avenida</option>
                                <option value="circular">Circular</option>
                                <option value="transversal">Transversal</option>
                                <option value="circunvalar">Circunvalar</option>
                                <option value="diagonal">Diagonal</option>
                            </select>
                        </div>

                        <div className="col-md-2 pe-3 mt-sm-3 mt-md-0">
                            <label htmlFor="number1">Número</label>
                            <input type="number" name="" id="number1" className="" />     
                        </div>

                        <div className="col-md-2 pe-3 mt-sm-3 mt-md-0">
                            <label htmlFor="letter">Orientación</label>
                            <select id="letter" className="w-100">
                                <option value="" selected>--Letra--</option>
                                <option value="antioquia">Sur</option>
                                <option value="cundinamarca">Norte</option>
                                <option value="vallecauca">Oeste</option>
                                <option value="atlantico">A</option>
                                <option value="magdalena">B</option>
                                <option value="bolivar">C</option>
                                <option value="bolivar">D</option>
                                <option value="bolivar">E</option>
                                <option value="bolivar">F</option>
                                <option value="bolivar">G</option>
                                <option value="bolivar">H</option>
                                <option value="bolivar">I</option>
                                <option value="bolivar">AA</option>
                                <option value="bolivar">AB</option>
                                <option value="bolivar">AC</option>
                                <option value="bolivar">AD</option>
                                <option value="bolivar">AE</option>
                                <option value="bolivar">BB</option>
                                <option value="bolivar">BC</option>
                                <option value="bolivar">CC</option>
                                <option value="bolivar">CD</option>
                                <option value="bolivar">CE</option>
                                <option value="bolivar">DD</option>
                                <option value="bolivar">DE</option>
                            </select>
                        </div>

                        <div className="d-flex align-items-end ">
                            <p>#</p>
                        </div>

                        <div className="col-md-2 pe-3 mt-sm-3 mt-md-0">
                            <label htmlFor="cruce">Tipo</label>
                            <select id="cruce" className="w-100">
                                <option value="" selected>--Tipo--</option>
                                <option value="calle">Calle</option>
                                <option value="carrera">Carrera</option>
                                <option value="avenida">Avenida</option>
                                <option value="circular">Circular</option>
                                <option value="transversal">Transversal</option>
                                <option value="circunvalar">Circunvalar</option>
                                <option value="diagonal">Diagonal</option>
                            </select>
                        </div>

                        <div className="col-md-2 pe-3 mt-sm-3 mt-md-0">
                            <label htmlFor="letter">Orientación</label>
                            <select id="letter" className="w-100">
                                <option value="" selected>--Letra--</option>
                                <option value="antioquia">Sur</option>
                                <option value="cundinamarca">Norte</option>
                                <option value="vallecauca">Oeste</option>
                                <option value="atlantico">A</option>
                                <option value="magdalena">B</option>
                                <option value="bolivar">C</option>
                                <option value="bolivar">D</option>
                                <option value="bolivar">E</option>
                                <option value="bolivar">F</option>
                                <option value="bolivar">G</option>
                                <option value="bolivar">H</option>
                                <option value="bolivar">I</option>
                                <option value="bolivar">AA</option>
                                <option value="bolivar">AB</option>
                                <option value="bolivar">AC</option>
                                <option value="bolivar">AD</option>
                                <option value="bolivar">AE</option>
                                <option value="bolivar">BB</option>
                                <option value="bolivar">BC</option>
                                <option value="bolivar">CC</option>
                                <option value="bolivar">CD</option>
                                <option value="bolivar">CE</option>
                                <option value="bolivar">DD</option>
                                <option value="bolivar">DE</option>
                            </select>
                        </div>

                        <div className="col-md-2 pe-3 mt-sm-3 mt-md-0">
                            <label htmlFor="number2">Número</label>
                            <input type="number" name="" id="number2" />     
                        </div>

                        <div className="d-flex align-items-end ">
                            <p>-</p>
                        </div>

                        
                        <div className="col-md-2 pe-3 mt-sm-3 mt-md-0">
                            <label htmlFor="number3">Número</label>
                            <input type="number" name="" id="number3" />     
                        </div>

                    </div>   
                </div>

                <div className="d-flex justify-content-end mt-5">
                    <button type="button" className="btn btn-primary">Consultar</button>
                </div>
			</form>
		</section>
	);
};

export default Location;
