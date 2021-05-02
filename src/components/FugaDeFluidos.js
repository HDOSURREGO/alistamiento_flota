import "./alistamiento.css";
import React, { useContext } from "react";
import { CgCloseO } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";
import { DocumentContext } from "../context/DocumentContext";
import { useHistory } from "react-router-dom";

export default function FugaDeFluidos() {
	const { registroAlistamiento, setRegistroAlistamiento } = useContext(
		DocumentContext
	);

	const history = useHistory();

	return (
		<div className="grupo_alistamiento">
			<div>
				<h1>Fuga de Fluidos</h1>
			</div>

			<div className="item_alistamiento">
				<table>
					<tr>
						<td>
							<h3>Fugas de Aceite (Motor y Dirección Hidráulica) </h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.fugaDeAceite)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										fugaDeAceite: "Conforme",
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
										fugaDeAceite: "No Conforme",
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
								name="comentarioFugaDeAceite"
								defaultValue=" "
								value={registroAlistamiento.comentarioFugaDeAceite}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioFugaDeAceite: e.target.value,
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
							<h3>Fugas de Liquido Refrigerante </h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.fugaLiquidoRefrigerante)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										fugaLiquidoRefrigerante: "Conforme",
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
										fugaLiquidoRefrigerante: "No Conforme",
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
								name="comentarioFugaLiquidoRefrigerante"
								defaultValue=" "
								value={registroAlistamiento.comentarioFugaLiquidoRefrigerante}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioFugaLiquidoRefrigerante: e.target.value,
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
							<h3>Fuga de Combustible </h3>
						</td>
						<td>
							<p>{String(registroAlistamiento.fugaDeCombustible)}</p>
						</td>

						<td>
							<button
								className="check_btn"
								onClick={() =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										fugaDeCombustible: "Conforme",
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
										fugaDeCombustible: "No Conforme",
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
								name="comentarioFugaDeCombustible"
								defaultValue=" "
								value={registroAlistamiento.comentarioFugaDeCombustible}
								onChange={(e) =>
									setRegistroAlistamiento({
										...registroAlistamiento,
										comentarioFugaDeCombustible: e.target.value,
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
				<button className="btn" onClick={() => history.push("/accesorios")}>
					Siguiente: Accesorios
				</button>
			</div>
		</div>
	);
}
