import "./alistamiento.css";
import React, { useContext } from "react";
import { CgCloseO } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";
import { DocumentContext } from "../context/DocumentContext";
import { useHistory } from "react-router-dom";

export default function Seguridad() {
	const { registroAlistamiento, setRegistroAlistamiento } = useContext(
		DocumentContext
	);

	const history = useHistory();

	return (
		<div className="grupo_alistamiento">
			<div>
				<h1>Equipo de Seguridad</h1>
			</div>

			<div className="item_alistamiento">
				<table>
					<tr>
						<td>
							<h3>Botiquin </h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.botiquin)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										botiquin: "Conforme",
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
										botiquin: "No Conforme",
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
								name="comentarioBotiquin"
								defaultValue=" "
								value={registroAlistamiento.comentarioBotiquin}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioBotiquin: e.target.value,
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
							<h3>Equipo de Carretera </h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.equipoDeCarretera)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										equipoDeCarretera: "Conforme",
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
										equipoDeCarretera: "No Conforme",
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
								name="comentarioEquipoDeCarretera"
								defaultValue=" "
								value={registroAlistamiento.comentarioEquipoDeCarretera}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioEquipoDeCarretera: e.target.value,
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
							<h3>Extintor </h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.extintor)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										extintor: "Conforme",
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
										extintor: "No Conforme",
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
								name="comentariocomentarioExtintor"
								defaultValue=" "
								value={registroAlistamiento.comentarioExtintor}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioExtintor: e.target.value,
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
				<button className="btn" onClick={() => history.push("/fugadefluidos")}>
					Siguiente: Fuga de Fluidos
				</button>
			</div>
		</div>
	);
}
