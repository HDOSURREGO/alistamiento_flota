import "./alistamiento.css";
import React, { useContext } from "react";
import { CgCloseO } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";
import { DocumentContext } from "../context/DocumentContext";
import { useHistory } from "react-router-dom";

export default function NivelDeLiquidos() {
	const { registroAlistamiento, setRegistroAlistamiento } = useContext(
		DocumentContext
	);

	const history = useHistory();

	return (
		<div className="grupo_alistamiento">
			<div>
				<h1>Nivel de Liquidos</h1>
			</div>

			<div className="item_alistamiento">
				<table>
					<tr>
						<td>
							<h3>Nivel de Aceite de Motor</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.nivelAceiteDeMotor)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										nivelAceiteDeMotor: "Conforme",
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
										nivelAceiteDeMotor: "No Conforme",
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
								name="comentarioNivelAceiteDeMotor"
								defaultValue=" "
								value={registroAlistamiento.comentarioNivelAceiteDeMotor}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioNivelAceiteDeMotor: e.target.value,
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
							<h3>Nivel de Aceite de Transmisión</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.nivelAceiteDeTransmision)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										nivelAceiteDeTransmision: "Conforme",
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
										nivelAceiteDeTransmision: "No Conforme",
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
								name="comentarioNivelAceiteDeTransmision"
								defaultValue=" "
								value={registroAlistamiento.comentarioNivelAceiteDeTransmision}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioNivelAceiteDeTransmision: e.target.value,
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
							<h3>Nivel de Aceite de Caja de Dirección</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.nivelAceiteDeDireccion)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										nivelAceiteDeDireccion: "Conforme",
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
										nivelAceiteDeDireccion: "No Conforme",
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
								name="comentarioNivelAceiteDeDireccion"
								defaultValue=" "
								value={registroAlistamiento.comentarioNivelAceiteDeDireccion}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioNivelAceiteDeDireccion: e.target.value,
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
							<h3>Nivel de Liquido de Frenos y Clutch</h3>
						</td>
						<td>
							<p>
								{String(registroAlistamiento.nivelDeliquidoDeFrenosYClutch)}
							</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										nivelDeliquidoDeFrenosYClutch: "Conforme",
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
										nivelDeliquidoDeFrenosYClutch: "No Conforme",
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
								name="comentarioNivelDeliquidoDeFrenosYClutch"
								defaultValue=" "
								value={
									registroAlistamiento.comentarioNivelDeliquidoDeFrenosYClutch
								}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioNivelDeliquidoDeFrenosYClutch: e.target.value,
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
							<h3>Nivel de Liquido Refrigerante</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.nivelDeliquidoRefrigerante)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										nivelDeliquidoRefrigerante: "Conforme",
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
										nivelDeliquidoRefrigerante: "No Conforme",
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
								name="comentarioNivelDeliquidoRefrigerante"
								defaultValue=" "
								value={
									registroAlistamiento.comentarioNivelDeliquidoRefrigerante
								}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioNivelDeliquidoRefrigerante: e.target.value,
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
							<h3>Nivel de Agua de Limpiabrisas</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.nivelDeliquidoLimpiabrisas)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										nivelDeliquidoLimpiabrisas: "Conforme",
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
										nivelDeliquidoLimpiabrisas: "No Conforme",
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
								name="comentarioNivelDeliquidoLimpiabrisas"
								defaultValue=" "
								value={
									registroAlistamiento.comentarioNivelDeliquidoLimpiabrisas
								}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioNivelDeliquidoLimpiabrisas: e.target.value,
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
				<button className="btn" onClick={() => history.push("/filtros")}>
					Siguiente: Filtros
				</button>
			</div>
		</div>
	);
}
