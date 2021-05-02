import "./alistamiento.css";
import React, { useContext, useEffect } from "react";
import axios from "axios";
import { DocumentContext } from "../context/DocumentContext";
import { useHistory } from "react-router-dom";

const InfoVehiculo = (props) => {
	const { registroAlistamiento, setRegistroAlistamiento } = useContext(
		DocumentContext
	);

	useEffect(() => {
		setRegistroAlistamiento({
			...registroAlistamiento,
			fechaDeHoy: Date(),
		});
		return console.log("Saliendo del useEffect"); //corre cuando desmonta la forma
	}, []); //Si hay una variable y cambia el useEffect vuelve y corre la funcion del primer parametro

	const history = useHistory();

	const handleSelect = (e) => {
		console.log("Conductor seleccionado:", e.target.value);
		setRegistroAlistamiento({
			...registroAlistamiento,
			selectedConductor: e.target.value,
		});
	};

	const reducerBus = (accumulator, currentValue) => {
		accumulator.numeroDeBus = currentValue.NroBus;
		accumulator.placa = currentValue.Placa;
		accumulator.modelo = currentValue.Modelo;
		accumulator.conductores.push(currentValue.Conductor);
		console.log("Esto es lo que hay en conductores:", accumulator.conductores);
		return accumulator;
	};

	const getInfoBus = (e) => {
		e.preventDefault();
		axios({
			method: "GET",
			url: `${process.env.REACT_APP_API_URL}/api/getInfoBus/${registroAlistamiento.bus.numeroDeBus}`,
		}).then((response) => {
			console.log("Status", response.status);
			if (response.status === 200) {
				console.log(
					"luego de enviar al backend el bus #",
					registroAlistamiento.bus.numeroDeBus
				);
				console.log("Lo que llega del backend:", response);
				if (response.data && response.data.recordset) {
					const respuesta = response.data.recordset;
					console.log("Esta es la 'respuesta'", respuesta);

					const xyz = respuesta.reduce(reducerBus, { conductores: [] });
					setRegistroAlistamiento({
						...registroAlistamiento,
						bus: xyz,
					});
				}
			} else if (response.data.status !== 200) {
				console.log("No se obtuvo informacion para el numero de bus");
			}
		});
	};

	const setBusNumber = (e) => {
		setRegistroAlistamiento({
			...registroAlistamiento,
			bus: { ...registroAlistamiento.bus, numeroDeBus: e.target.value },
		});
	};

	const resetForm = () => {
		registroAlistamiento.bus.numeroDeBus = " ";
		setRegistroAlistamiento({
			...registroAlistamiento,
			bus: { conductores: [] },
		});
	};

	return (
		<div className="grupo_alistamiento">
			<div>
				<h1>Información del Vehículo</h1>
			</div>
			<div>
				<form
					className="grupo_alistamiento"
					onSubmit={(event) => getInfoBus(event)}
					method="GET"
				>
					<div className="item_alistamiento">
						<h3>Fecha de Alistamiento</h3>
						{registroAlistamiento.fechaDeHoy}
					</div>

					<div className="item_alistamiento">
						<h3 htmlFor="bus-numero">Numero de Bus</h3>
						<input
							className="input_numeroDeBus"
							type="text"
							name="numeroDeBus"
							value={registroAlistamiento.bus.numeroDeBus}
							onChange={setBusNumber}
						/>

						<button type="submit" className="btn" onClick={getInfoBus}>
							Obtener Información del bus
						</button>
						<button type="submit" className="btn" onClick={resetForm}>
							Reiniciar Forma
						</button>
					</div>

					<div className="item_alistamiento">
						<h3 htmlFor="placa">Placa</h3>
						<p>{registroAlistamiento.bus.placa}</p>
					</div>

					<div className="item_alistamiento">
						<h3 htmlFor="modelo">Modelo</h3>
						<p>{registroAlistamiento.bus.modelo}</p>
					</div>

					<div className="item_alistamiento">
						<h3 htmlFor="conductores">Seleccionar Conductor</h3>

						<select
							defaultValue="Seleccionar Conductor"
							className="btn"
							name="selectConductor"
							onChange={(e) => handleSelect(e)}
						>
							{registroAlistamiento.bus.conductores.map((item) => (
								<option>{item}</option>
							))}
						</select>
						<div>
							<p>
								Conductor Seleccionado: {registroAlistamiento.selectedConductor}
							</p>
						</div>
					</div>
					<div className="item_alistamiento">
						<button className="btn" onClick={() => history.goBack()}>
							Atras
						</button>
						<button className="btn" onClick={() => history.push("/documentos")}>
							Siguiente: Documentos
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default InfoVehiculo;
