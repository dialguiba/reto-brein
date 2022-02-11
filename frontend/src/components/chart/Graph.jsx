import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

export const Graph = ({ dataset }) => {
  const [chartData, setChartData] = useState();
  const [options, setOptions] = useState();

  useEffect(() => {
    if (dataset) {
      ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: "Comparación de resultados",
            fontSize: 100,
          },
        },
      };

      setOptions(options);

      const labels = dataset.fechas;

      const data = {
        labels,
        datasets: [
          {
            label: "Sensores",
            data: dataset.sensores,
            borderColor: "#f9742d",
            backgroundColor: "#f9742d",
          },
          {
            label: "Machine Learning",
            data: dataset.machineLearning,
            borderColor: "#534cc3",
            backgroundColor: "#534cc3",
          },
          {
            label: "Tradicional",
            data: dataset.tradicional,
            borderColor: "#b0b0b0",
            backgroundColor: "#b0b0b0",
          },
        ],
      };

      setChartData(data);
    }
  }, [dataset]);

  return <div>{dataset && chartData && options && <Line options={options} data={chartData} />}</div>;
};
