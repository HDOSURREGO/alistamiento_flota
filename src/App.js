import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import InfoVehiculo from "./components/InfoVehiculo";
import Documentos from "./components/Documentos";
import Seguridad from "./components/Seguridad";
import { DocumentContext } from "./context/DocumentContext";
import { useState } from "react";
import FugaDeFluidos from "./components/FugaDeFluidos";
import Accesorios from "./components/Accesorios";
import NivelDeLiquidos from "./components/NivelDeLiquidos";
import Filtros from "./components/Filtros";
import Novedad from "./components/Novedad";
import Resultados from "./components/Resultados";

function App() {
	const [registroAlistamiento, setRegistroAlistamiento] = useState({
		bus: { conductores: [] },
		licenciaDeConduccion: "No Conforme",
		comentarioLicenciaDeConduccion: " ",
		seguroADanosYRc: "No Conforme",
		comentarioSeguroADanosYRc: " ",
		revisionTecnicoMecanica: "No Conforme",
		comentarioRevisionTecnicoMecanica: " ",
		soat: "No Conforme",
		comentarioSoat: " ",
		tarjetaDeOperacion: "No Conforme",
		comentarioTarjetaDeOperacion: " ",
		botiquin: "No Conforme",
		comentarioBotiquin: " ",
		equipoDeCarretera: "No Conforme",
		comentarioEquipoDeCarretera: " ",
		extintor: "No Conforme",
		comentarioExtintor: " ",
		fugaDeAceite: "No Conforme",
		comentarioFugaDeAceite: " ",
		fugaLiquidoRefrigerante: "No Conforme",
		comentarioFugaLiquidoRefrigerante: " ",
		fugaDeCombustible: "No Conforme",
		comentarioFugaDeCombustible: " ",
		correaDeAlternador: "No Conforme",
		comentarioCorreaDeAlternador: " ",
		correaBombaDeAgua: "No Conforme",
		comentarioCorreaBombaDeAgua: " ",
		correaBombaDeAceite: "No Conforme",
		comentarioCorreaBombaDeAceite: " ",
		tapaDeRadiador: "No Conforme",
		comentarioTapaDeRadiador: " ",
		nivelAceiteDeMotor: "No Conforme",
		comentarioNivelAceiteDeMotor: " ",
		nivelAceiteDeTransmision: "No Conforme",
		comentarioNivelAceiteDeTransmision: " ",
		nivelAceiteDeDireccion: "No Conforme",
		comentarioNivelAceiteDeDireccion: " ",
		nivelDeliquidoDeFrenosYClutch: "No Conforme",
		comentarioNivelDeliquidoDeFrenosYClutch: " ",
		nivelDeliquidoRefrigerante: "No Conforme",
		comentarioNivelDeliquidoRefrigerante: " ",
		nivelDeliquidoLimpiabrisas: "No Conforme",
		comentarioNivelDeliquidoLimpiabrisas: " ",
		filtroDeAire: "No Conforme",
		comentarioFiltroDeAire: " ",
		filtroDeAceite: "No Conforme",
		comentarioFiltroDeAceite: " ",
		filtroDeCombustible: "No Conforme",
		comentarioFiltroDeCombustible: " ",
		frenoDePedalYEmergencia: "No Conforme",
		comentarioFrenoDePedalYEmergencia: " ",
		luces: "No Conforme",
		comentarioLuces: " ",
		limpiabrisas: "No Conforme",
		comentarioLimpiabrisas: " ",
		espejosLateralesYRetrovisor: "No Conforme",
		comentarioEspejosLateralesYRetrovisor: " ",
		sillasDePasajeros: "No Conforme",
		comentarioSillasDePasajeros: " ",
		baterias: "No Conforme",
		comentarioBaterias: " ",
		llantas: "No Conforme",
		comentarioLlantas: " ",
	});

	console.log(
		"Esto es en lo que va el registro de alistamiento:",
		registroAlistamiento
	);

	return (
		<DocumentContext.Provider
			value={{ registroAlistamiento, setRegistroAlistamiento }}
		>
			<div>
				<div>
					<BrowserRouter>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route
								exact
								path="/info_vehiculo"
								component={InfoVehiculo}
							></Route>
							<Route exact path="/documentos" component={Documentos}></Route>
							<Route exact path="/seguridad" component={Seguridad}></Route>
							<Route
								exact
								path="/fugadefluidos"
								component={FugaDeFluidos}
							></Route>
							<Route exact path="/accesorios" component={Accesorios}></Route>
							<Route
								exact
								path="/niveldeliquidos"
								component={NivelDeLiquidos}
							></Route>
							<Route exact path="/filtros" component={Filtros}></Route>
							<Route exact path="/novedad" component={Novedad}></Route>
							<Route exact path="/resultados" component={Resultados}></Route>
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		</DocumentContext.Provider>
	);
}
export default App;
