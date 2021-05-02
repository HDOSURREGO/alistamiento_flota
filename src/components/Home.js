import "./alistamiento.css";
import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
	const history = useHistory("/infoVehiculo");

	// const handleBack = () => {
	// 	history.goBack();
	// };

	return (
		<div className="grupo_alistamiento">
			<h1>Este es el Home</h1>
			<div className="item_alistamiento">
				<button onClick={() => history.push("/info_vehiculo")}>
					OK y sigo con Info Vehiculo
				</button>
			</div>
		</div>
	);
}
