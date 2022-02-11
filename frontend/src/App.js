import "./App.css";
import { Graph } from "./components/chart/Graph";
import { useEffect, useState } from "react";
import { api } from "./utils/axios";
import axios from "axios";
import moment from "moment";

function App() {
  const [dataset, setDatset] = useState();

  useEffect(() => {
    const requestForReal = api.get("/reales");
    const requestForEstimations = api.get("/estimaciones");

    axios
      .all([requestForReal, requestForEstimations])
      .then(
        axios.spread((...responses) => {
          const dataOne = responses[0].data;
          const dataTwo = responses[1].data;

          const datesFormatted = dataTwo.onzasProyectadas.fechas.map((fecha) => moment(fecha).format("MMM Do YY"));

          const data = {
            machineLearning: dataTwo.onzasProyectadas.machineLearning,
            tradicional: dataTwo.onzasProyectadas.tradicional,
            fechas: datesFormatted,
            sensores: dataOne.sensores,
          };

          setDatset(data);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <Graph dataset={dataset} title="Comparación de resultados" />
    </div>
  );
}

export default App;
