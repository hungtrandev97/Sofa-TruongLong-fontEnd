import React from "react";
import { shape, string, number, arrayOf, func } from "prop-types";
import { Pie } from "react-chartjs-2";

const styles = `
  #composition-chart-canvas {
    max-width: 300px;
    max-height: 300px;
  }
`;
function CompositionChartCanvas(props) {
  const { chartData, onAnimationChartComplete } = props;
  const labels = [];
  const values = [];
  const backgroundColors = [];
  chartData.forEach((element) => {
    labels.push(element.name);
    values.push(element.value);
    backgroundColors.push(element.color);
  });
  const chartDataDisplay = {
    labels,
    datasets: [
      {
        label: "",
        data: values,
        backgroundColor: backgroundColors,
        borderWidth: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    responsiveAnimationDuration: 0,
    maintainAspectRatio: true,
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
      callbacks: {
        label(tooltipItem, data) {
          const label = data.labels[tooltipItem.index] || "";
          const value = data.datasets[0].data[tooltipItem.index] || "";
          return `${label}: ${value}%`;
        },
      },
    },
    animation: {
      onComplete() {
        onAnimationChartComplete(true);
      },
    },
  };
  return (
    <div
      id="compositionChart"
      style={{ visibility: "visible" }}
      className="d-flex align-item-center justify-content-center"
    >
      <style>{styles}</style>
      <Pie
        id="composition-chart-canvas"
        data={chartDataDisplay}
        options={options}
        height={300}
        width={300}
      />
    </div>
  );
}

CompositionChartCanvas.propTypes = {
  chartData: arrayOf(
    shape({
      name: string,
      value: number,
      color: string,
    })
  ),
  onAnimationChartComplete: func.isRequired,
};

CompositionChartCanvas.defaultProps = {
  chartData: [],
};

export default CompositionChartCanvas;
