import "./alistamiento.css";
import React, { useContext } from "react";
import { CgCloseO } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";
import { DocumentContext } from "../context/DocumentContext";
import { useHistory } from "react-router-dom";

export default function Novedad() {
	const { registroAlistamiento, setRegistroAlistamiento } = useContext(
		DocumentContext
	);

	const history = useHistory();

	return (
		<div className="grupo_alistamiento">
			<div>
				<h1>Novedad</h1>
			</div>

			<div className="item_alistamiento">
				<table>
					<tr>
						<td>
							<h3>Frenos de Pedal y Emergencia</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.frenoDePedalYEmergencia)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										frenoDePedalYEmergencia: "Conforme",
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
										frenoDePedalYEmergencia: "No Conforme",
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
								name="comentarioFrenoDePedalYEmergencia"
								defaultValue=" "
								value={registroAlistamiento.comentarioFrenoDePedalYEmergencia}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioFrenoDePedalYEmergencia: e.target.value,
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
							<h3>Luces</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.luces)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										luces: "Conforme",
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
										luces: "No Conforme",
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
								name="comentarioLuces"
								defaultValue=" "
								value={registroAlistamiento.comentarioLuces}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioLuces: e.target.value,
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
							<h3>Limpiabrisas</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.limpiabrisas)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										limpiabrisas: "Conforme",
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
										limpiabrisas: "No Conforme",
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
								name="comentarioLimpiabrisas"
								defaultValue=" "
								value={registroAlistamiento.comentarioLimpiabrisas}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioLimpiabrisas: e.target.value,
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
							<h3>Espejos Laterales y Retrovisor</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.espejosLateralesYRetrovisor)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										espejosLateralesYRetrovisor: "Conforme",
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
										espejosLateralesYRetrovisor: "No Conforme",
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
								name="comentarioEspejosLateralesYRetrovisor"
								defaultValue=" "
								value={
									registroAlistamiento.comentarioEspejosLateralesYRetrovisor
								}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioEspejosLateralesYRetrovisor: e.target.value,
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
							<h3>Sillas de Pasajeros</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.sillasDePasajeros)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										sillasDePasajeros: "Conforme",
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
										sillasDePasajeros: "No Conforme",
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
								name="comentarioSillasDePasajeros"
								defaultValue=" "
								value={registroAlistamiento.comentarioSillasDePasajeros}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioSillasDePasajeros: e.target.value,
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
							<h3>Baterias</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.baterias)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										baterias: "Conforme",
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
										baterias: "No Conforme",
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
								name="comentarioBaterias"
								defaultValue=" "
								value={registroAlistamiento.comentarioBaterias}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioBaterias: e.target.value,
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
							<h3>Llantas</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.llantas)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										llantas: "Conforme",
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
										llantas: "No Conforme",
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
								name="comentarioLlantas"
								defaultValue=" "
								value={registroAlistamiento.comentarioLlantas}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioLlantas: e.target.value,
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
				<button className="btn" onClick={() => history.push("/resultados")}>
					Siguiente: Resultados
				</button>
			</div>
		</div>
	);
}
