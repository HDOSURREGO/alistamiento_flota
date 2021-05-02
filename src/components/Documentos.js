import "./alistamiento.css";
import React, { useContext } from "react";
import { CgCloseO } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";
import { DocumentContext } from "../context/DocumentContext";
import { useHistory } from "react-router-dom";

export default function Documentos() {
	const { registroAlistamiento, setRegistroAlistamiento } = useContext(
		DocumentContext
	);

	const history = useHistory();

	return (
		<div className="grupo_alistamiento">
			<div>
				<h1>Documentos</h1>
			</div>

			<div className="item_alistamiento">
				<table>
					<tr>
						<td>
							<h3>Licencia de conducción </h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.licenciaDeConduccion)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										licenciaDeConduccion: "Conforme",
									})
								}
							>
								<FaRegCheckCircle />
							</button>
						</td>
						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										licenciaDeConduccion: "No Conforme",
									})
								}
							>
								<CgCloseO />
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<h3>Comentario</h3>
						</td>
						<td colSpan="3">
							<input
								className="comentario_alistamiento"
								type="text"
								name="comentarioLicenciaDeconduccion"
								defaultValue=" "
								value={registroAlistamiento.comentarioLicenciaDeConduccion}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioLicenciaDeConduccion: e.target.value,
									})
								}
							/>
						</td>
					</tr>
				</table>
			</div>

			<div className="item_alistamiento">
				<table>
					<tr>
						<td>
							<h3>Seguro a Daños y Rc </h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.seguroADanosYRc)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										seguroADanosYRc: "Conforme",
									})
								}
							>
								<FaRegCheckCircle />
							</button>
						</td>
						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										seguroADanosYRc: "No Conforme",
									})
								}
							>
								<CgCloseO />
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<h3>Comentario</h3>
						</td>
						<td colSpan="3">
							<input
								className="comentario_alistamiento"
								type="text"
								name="comentarioSeguroADanosYRc"
								defaultValue=" "
								value={registroAlistamiento.comentarioSeguroADanosYRc}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioSeguroADanosYRc: e.target.value,
									})
								}
							/>
						</td>
					</tr>
				</table>
			</div>

			<div className="item_alistamiento">
				<table>
					<tr>
						<td>
							<h3>Revisión Técnico Mecánica </h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.revisionTecnicoMecanica)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										revisionTecnicoMecanica: "Conforme",
									})
								}
							>
								<FaRegCheckCircle />
							</button>
						</td>
						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										revisionTecnicoMecanica: "No Conforme",
									})
								}
							>
								<CgCloseO />
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<h3>Comentario</h3>
						</td>
						<td colSpan="3">
							<input
								className="comentario_alistamiento"
								type="text"
								name="comentarioRevisionTecnicoMecanica"
								defaultValue=" "
								value={registroAlistamiento.comentarioRevisionTecnicoMecanica}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioRevisionTecnicoMecanica: e.target.value,
									})
								}
							/>
						</td>
					</tr>
				</table>
			</div>

			<div className="item_alistamiento">
				<table>
					<tr>
						<td>
							<h3>SOAT </h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.soat)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										soat: "Conforme",
									})
								}
							>
								<FaRegCheckCircle />
							</button>
						</td>
						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										soat: "No Conforme",
									})
								}
							>
								<CgCloseO />
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<h3>Comentario</h3>
						</td>
						<td colSpan="3">
							<input
								className="comentario_alistamiento"
								type="text"
								name="comentarioSoat"
								defaultValue=" "
								value={registroAlistamiento.comentarioSoat}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioSoat: e.target.value,
									})
								}
							/>
						</td>
					</tr>
				</table>
			</div>

			<div className="item_alistamiento">
				<table>
					<tr>
						<td>
							<h3>Tarjeta de Operación </h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.tarjetaDeOperacion)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										tarjetaDeOperacion: "Conforme",
									})
								}
							>
								<FaRegCheckCircle />
							</button>
						</td>
						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										tarjetaDeOperacion: "No Conforme",
									})
								}
							>
								<CgCloseO />
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<h3>Comentario</h3>
						</td>
						<td colSpan="3">
							<input
								className="comentario_alistamiento"
								type="text"
								name="comentarioTarjetaDeOperacion"
								defaultValue=" "
								value={registroAlistamiento.comentarioTarjetaDeOperacion}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioTarjetaDeOperacion: e.target.value,
									})
								}
							/>
						</td>
					</tr>
				</table>
			</div>

			<div className="item_alistamiento">
				<button className="btn" onClick={() => history.goBack()}>
					Atras
				</button>
				<button className="btn" onClick={() => history.push("/seguridad")}>
					Siguiente: Equipo de Seguridad
				</button>
			</div>
		</div>
	);
}
