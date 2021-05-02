import "./alistamiento.css";
import React, { useContext } from "react";
import { CgCloseO } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";
import { DocumentContext } from "../context/DocumentContext";
import { useHistory } from "react-router-dom";

export default function Accesorios() {
	const { registroAlistamiento, setRegistroAlistamiento } = useContext(
		DocumentContext
	);

	const history = useHistory();

	return (
		<div className="grupo_alistamiento">
			<div>
				<h1>Accesorios</h1>
			</div>

			<div className="item_alistamiento">
				<table>
					<tr>
						<td>
							<h3>Correa(s) de Alternador </h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.correaDeAlternador)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										correaDeAlternador: "Conforme",
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
										correaDeAlternador: "No Conforme",
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
								name="comentarioCorreaDeAlternador"
								defaultValue=" "
								value={registroAlistamiento.comentarioCorreaDeAlternador}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioCorreaDeAlternador: e.target.value,
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
							<h3>Correa de Bomba de Agua</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.correaBombaDeAgua)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										correaBombaDeAgua: "Conforme",
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
										correaBombaDeAgua: "No Conforme",
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
								name="comentarioCorreaBombaDeAgua"
								defaultValue=" "
								value={registroAlistamiento.comentarioCorreaBombaDeAgua}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioCorreaBombaDeAgua: e.target.value,
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
							<h3>Correa Bomba de Aceite</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.correaBombaDeAceite)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										correaBombaDeAceite: "Conforme",
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
										correaBombaDeAceite: "No Conforme",
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
								name="comentarioCorreaBombaDeAceite"
								defaultValue=""
								value={registroAlistamiento.comentarioCorreaBombaDeAceite}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioCorreaBombaDeAceite: e.target.value,
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
							<h3>Tapa de Radiador</h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.tapaDeRadiador)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										tapaDeRadiador: "Conforme",
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
										tapaDeRadiador: "No Conforme",
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
								name="comentarioTapaDeRadiador"
								value={registroAlistamiento.comentarioTapaDeRadiador}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioTapaDeRadiador: e.target.value,
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
				<button
					className="btn"
					onClick={() => history.push("/niveldeliquidos")}
				>
					Siguiente: Nivel de Liquidos
				</button>
			</div>
		</div>
	);
}
