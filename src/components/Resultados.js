import "./alistamiento.css";
import React, { useContext } from "react";
import { DocumentContext } from "../context/DocumentContext";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Resultados() {
	const { registroAlistamiento } = useContext(DocumentContext);

	const history = useHistory();

	const handleSubmitRegistroAlistamiento = (event) => {
		event.preventDefault();
		console.log(
			"Entrando al HandleSubmitRegistroAlistamiento con esta info:",
			registroAlistamiento
		);

		axios({
			method: "POST",
			url: `${process.env.REACT_APP_API_URL}/api/sendRegistroAlistamiento`,
			data: registroAlistamiento,
		}).then((response) => {
			if (response.data.status === "200") {
				console.log("Message Sent.");
				console.log("luego de enviar al backend:", registroAlistamiento);
			} else if (response.data.status === "fail") {
				console.log("Message failed to send.");
			}
		});
	};
	return (
		<div>
			<div className="item_alistamiento">
				<table className="header_tablaDeResultados">
					<tr>
						<td colSpan="4">
							<h1>PROTOCOLO DE ALISTAMIENTO - Reporte Final</h1>
						</td>
					</tr>
					<tr>
						<td>
							<h3>Fecha de Revisión</h3>{" "}
							<p>{registroAlistamiento.fechaDeHoy}</p>
						</td>
						<td>
							<h3>Numbero de Bus</h3>{" "}
							<p>{registroAlistamiento.bus.numeroDeBus}</p>
						</td>
						<td>
							<h3>Modelo del Bus</h3> <p>{registroAlistamiento.bus.modelo}</p>
						</td>
						<td>
							<h3>Placa del Bus</h3> <p>{registroAlistamiento.bus.placa}</p>
						</td>
						<td>
							<h3>Nombre del Conductor</h3>{" "}
							<p>{registroAlistamiento.selectedConductor}</p>
						</td>
					</tr>
				</table>
			</div>

			<div className="item_alistamiento">
				<table className="tableDeResultados">
					<th>Item de Alistamiento</th>
					<th>Comentarios</th>
					<th>Resultado</th>
					<tr>
						<td>
							<h3>Documentos</h3>
						</td>
					</tr>
					<tr>
						<td>Licencia de Conducción</td>
						<td>{registroAlistamiento.comentarioLicenciaDeConduccion}</td>
						<td>{String(registroAlistamiento.licenciaDeConduccion)}</td>
					</tr>
					<tr>
						<td>Seguro a Daños y Rc</td>
						<td>{registroAlistamiento.comentarioSeguroADanosYRc}</td>
						<td>{String(registroAlistamiento.seguroADanosYRc)}</td>
					</tr>
					<tr>
						<td>Revision Técnico Mecánica</td>
						<td>{registroAlistamiento.comentarioRevisionTecnicoMecanica}</td>
						<td>{String(registroAlistamiento.revisionTecnicoMecanica)}</td>
					</tr>
					<tr>
						<td>SOAT</td>
						<td>{registroAlistamiento.comentarioSoat}</td>
						<td>{String(registroAlistamiento.soat)}</td>
					</tr>
					<tr>
						<td>Tarjeta de Operación</td>
						<td>{registroAlistamiento.comentarioTarjetaDeOperacion}</td>
						<td>{String(registroAlistamiento.tarjetaDeOperacion)}</td>
					</tr>

					<tr>
						<td>
							<h3>Equipo de Seguridad</h3>
						</td>
					</tr>
					<tr>
						<td>Botiquin</td>
						<td>{registroAlistamiento.comentarioBotiquin}</td>
						<td>{String(registroAlistamiento.botiquin)}</td>
					</tr>
					<tr>
						<td>Equipo de Carretera</td>
						<td>{registroAlistamiento.comentarioEquipoDeCarretera}</td>
						<td>{String(registroAlistamiento.equipoDeCarretera)}</td>
					</tr>
					<tr>
						<td>Extintor</td>
						<td>{registroAlistamiento.comentarioExtintor}</td>
						<td>{String(registroAlistamiento.extintor)}</td>
					</tr>

					<tr>
						<td>
							<h3>Fuga de Fluidos</h3>
						</td>
					</tr>
					<tr>
						<td>Fuga aceite de motory dirección hidráulica</td>
						<td>{registroAlistamiento.comentarioFugaDeAceite}</td>
						<td>{String(registroAlistamiento.fugaDeAceite)}</td>
					</tr>
					<tr>
						<td>Fuga de liquido refrigerante</td>
						<td>{registroAlistamiento.comentarioFugaLiquidoRefrigerante}</td>
						<td>{String(registroAlistamiento.fugaLiquidoRefrigerante)}</td>
					</tr>
					<tr>
						<td>Fuga de Combustible</td>
						<td>{registroAlistamiento.comentarioFugaDeCombustible}</td>
						<td>{String(registroAlistamiento.fugaDeCombustible)}</td>
					</tr>

					<tr>
						<td>
							<h3>Accesorios</h3>
						</td>
					</tr>
					<tr>
						<td>Correa(s) de Alternador</td>
						<td>{registroAlistamiento.comentarioCorreaDeAlternador}</td>
						<td>{String(registroAlistamiento.correaDeAlternador)}</td>
					</tr>
					<tr>
						<td>Correa de Bomba de Agua</td>
						<td>{registroAlistamiento.comentarioCorreaBombaDeAgua}</td>
						<td>{String(registroAlistamiento.correaBombaDeAgua)}</td>
					</tr>
					<tr>
						<td>Correa Bomba de Aceite</td>
						<td>{registroAlistamiento.comentarioCorreaBombaDeAceite}</td>
						<td>{String(registroAlistamiento.correaBombaDeAceite)}</td>
					</tr>
					<tr>
						<td>Tapa de Radiador</td>
						<td>{registroAlistamiento.comentarioTapaDeRadiador}</td>
						<td>{String(registroAlistamiento.tapaDeRadiador)}</td>
					</tr>

					<tr>
						<td>
							<h3>Nivel de Liquidos</h3>
						</td>
					</tr>
					<tr>
						<td>Nivel de Aceite de Motor</td>
						<td>{registroAlistamiento.comentarioNivelAceiteDeMotor}</td>
						<td>{String(registroAlistamiento.nivelAceiteDeMotor)}</td>
					</tr>
					<tr>
						<td>Nivel de Aceite de Transmisión</td>
						<td>{registroAlistamiento.comentarioNivelAceiteDeTransmision}</td>
						<td>{String(registroAlistamiento.nivelAceiteDeTransmision)}</td>
					</tr>
					<tr>
						<td>Nivel de Aceite de Caja de Dirección</td>
						<td>{registroAlistamiento.comentarioNivelAceiteDeDireccion}</td>
						<td>{String(registroAlistamiento.nivelAceiteDeDireccion)}</td>
					</tr>
					<tr>
						<td>Nivel de Liquido de Frenos y Clutch</td>
						<td>
							{registroAlistamiento.comentarioNivelDeliquidoDeFrenosYClutch}
						</td>
						<td>
							{String(registroAlistamiento.nivelDeliquidoDeFrenosYClutch)}
						</td>
					</tr>
					<tr>
						<td>Nivel de Liquido Refrigerante</td>
						<td>{registroAlistamiento.comentarioNivelDeliquidoRefrigerante}</td>
						<td>{String(registroAlistamiento.nivelDeliquidoRefrigerante)}</td>
					</tr>
					<tr>
						<td>Nivel de Agua de Limpiabrisas</td>
						<td>{registroAlistamiento.comentarioNivelDeliquidoLimpiabrisas}</td>
						<td>{String(registroAlistamiento.nivelDeliquidoLimpiabrisas)}</td>
					</tr>

					<tr>
						<td>
							<h3>Filtros</h3>
						</td>
					</tr>
					<tr>
						<td>Filtro de Aire</td>
						<td>{registroAlistamiento.comentarioFiltroDeAire}</td>
						<td>{String(registroAlistamiento.filtroDeAire)}</td>
					</tr>
					<tr>
						<td>Filtro de Aceite</td>
						<td>{registroAlistamiento.comentarioFiltroDeAceite}</td>
						<td>{String(registroAlistamiento.filtroDeAceite)}</td>
					</tr>
					<tr>
						<td>Filtro de Combustible</td>
						<td>{registroAlistamiento.comentarioFiltroDeCombustible}</td>
						<td>{String(registroAlistamiento.filtroDeCombustible)}</td>
					</tr>

					<tr>
						<td>
							<h3>Novedad</h3>
						</td>
					</tr>
					<tr>
						<td>Frenos de Pedal y Emergencia</td>
						<td>{registroAlistamiento.comentarioFrenoDePedalYEmergencia}</td>
						<td>{String(registroAlistamiento.frenoDePedalYEmergencia)}</td>
					</tr>
					<tr>
						<td>Luces</td>
						<td>{registroAlistamiento.comentarioLuces}</td>
						<td>{String(registroAlistamiento.luces)}</td>
					</tr>
					<tr>
						<td>Limpiabrisas</td>
						<td>{registroAlistamiento.comentarioLimpiabrisas}</td>
						<td>{String(registroAlistamiento.limpiabrisas)}</td>
					</tr>
					<tr>
						<td>Espejos Laterales y Retrovisor</td>
						<td>
							{registroAlistamiento.comentarioEspejosLateralesYRetrovisor}
						</td>
						<td>{String(registroAlistamiento.espejosLateralesYRetrovisor)}</td>
					</tr>
					<tr>
						<td>Sillas de Pasajeros</td>
						<td>{registroAlistamiento.comentarioSillasDePasajeros}</td>
						<td>{String(registroAlistamiento.sillasDePasajeros)}</td>
					</tr>
					<tr>
						<td>Baterias</td>
						<td>{registroAlistamiento.comentarioBaterias}</td>
						<td>{String(registroAlistamiento.baterias)}</td>
					</tr>
					<tr>
						<td>Llantas</td>
						<td>{registroAlistamiento.comentarioLlantas}</td>
						<td>{String(registroAlistamiento.llantas)}</td>
					</tr>
				</table>

				<div className="grupo_alistamiento">
					<button className="btn" onClick={() => history.goBack()}>
						Atras
					</button>
					<button
						className="btn"
						onClick={(event) => handleSubmitRegistroAlistamiento(event)}
					>
						Grabar Registro Alistamiento
					</button>
					<button className="btn" onClick={() => history.push("/")}>
						Home
					</button>
				</div>
			</div>
		</div>
	);
}
